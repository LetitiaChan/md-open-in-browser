import * as vscode from 'vscode';
import { exec, execSync } from 'child_process';

/**
 * Windows 上通过注册表查找默认浏览器的可执行文件路径
 * 原理：
 * 1. 读取 HKCU:\...\http\UserChoice 获取默认浏览器的 ProgId（如 MSEdgeHTM、ChromeHTML、FirefoxURL 等）
 * 2. 根据 ProgId 从注册表中查找对应的 open command
 * 3. 从 command 字符串中提取 .exe 路径
 */
function findWindowsDefaultBrowser(): string | null {
  try {
    // 步骤1：获取默认浏览器的 ProgId
    const progId = execSync(
      'reg query "HKCU\\Software\\Microsoft\\Windows\\Shell\\Associations\\UrlAssociations\\http\\UserChoice" /v ProgId',
      { encoding: 'utf-8' }
    );
    const progIdMatch = progId.match(/ProgId\s+REG_SZ\s+(.+)/);
    if (!progIdMatch) { return null; }
    const id = progIdMatch[1].trim();

    // 步骤2：通过 ProgId 查找 shell\open\command
    const cmdReg = execSync(
      `reg query "HKCR\\${id}\\shell\\open\\command" /ve`,
      { encoding: 'utf-8' }
    );
    // 步骤3：从 command 值中提取 exe 路径（带引号或不带引号的路径）
    const cmdMatch = cmdReg.match(/REG_SZ\s+"?([^"]+\.exe)"?/i);
    if (!cmdMatch) { return null; }

    return cmdMatch[1].trim();
  } catch {
    return null;
  }
}

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'md.openInBrowser',
    (uri?: vscode.Uri) => {
      // 优先使用传入的 uri（右键文件资源管理器），否则取当前编辑器的文件
      const fileUri = uri || vscode.window.activeTextEditor?.document.uri;

      if (!fileUri) {
        vscode.window.showWarningMessage('没有找到可打开的 Markdown 文件');
        return;
      }

      // 确保是 .md 文件
      if (!fileUri.fsPath.toLowerCase().endsWith('.md')) {
        vscode.window.showWarningMessage('当前文件不是 Markdown 文件');
        return;
      }

      const filePath = fileUri.fsPath;
      // 将本地路径转为 file:/// URL
      const fileUrl = 'file:///' + filePath.replace(/\\/g, '/');

      let cmd: string;
      switch (process.platform) {
        case 'win32': {
          // Windows 上 .md 文件关联的通常是 VS Code/记事本，不是浏览器
          // 必须找到浏览器可执行文件路径，直接调用浏览器打开
          const browserPath = findWindowsDefaultBrowser();
          if (browserPath) {
            cmd = `"${browserPath}" "${fileUrl}"`;
          } else {
            // 兜底：尝试常见浏览器路径
            vscode.window.showWarningMessage('未找到默认浏览器，尝试使用 Edge 打开');
            cmd = `"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe" "${fileUrl}"`;
          }
          break;
        }
        case 'darwin':
          // macOS: open -a 指定用默认浏览器而非文件关联程序
          cmd = `open -a "Safari" "${fileUrl}"`;
          break;
        default:
          cmd = `xdg-open "${fileUrl}"`;
          break;
      }

      exec(cmd, (err) => {
        if (err) {
          vscode.window.showErrorMessage(`无法在浏览器中打开文件: ${err.message}`);
        }
      });
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
