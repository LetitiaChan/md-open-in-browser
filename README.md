# Markdown Open in Browser

**[中文文档](README.zh-CN.md)**

> Open Markdown files in your browser with one click — simple, fast, no extra configuration needed.
> Recommended to use with browser extension [Markdown Viewer Enhanced](https://chromewebstore.google.com/detail/markdown-viewer/ckkdlimhmcjmikdlpkmbgfkaikojcbjk) for best experience.

## ✨ Features

**Markdown Open in Browser** is a lightweight VS Code extension that allows you to open the current Markdown (`.md`) file directly in your browser via the right-click context menu.

No local server needed, no complex configuration — just right-click and open.

## 📖 Usage

After installing the extension, **right-click** in any of the following locations and select **"Open Markdown in Browser"**:

| Trigger Location | Description |
| --- | --- |
| 📝 **Editor Context Menu** | Right-click inside an open `.md` file |
| 🏷️ **Editor Tab Context Menu** | Right-click on a file tab at the top of the editor |
| 📁 **Explorer Context Menu** | Right-click on a `.md` file in the file explorer sidebar |

> 💡 The context menu item only appears when the current file has a `.md` extension.

## 🔧 Commands

| Command | Title |
| --- | --- |
| `md.openInBrowser` | Open Markdown in Browser |

## 📋 Requirements

- **VS Code** version `≥ 1.74.0`
- A default browser installed on your system

## 🖥️ Platform Support

| Platform | How It Opens |
| --- | --- |
| **Windows** | Automatically detects the system default browser via the Windows registry (Edge, Chrome, Firefox, etc.) and launches it directly, bypassing `.md` file associations |
| **macOS** | Opens with Safari via `open -a "Safari"` |
| **Linux** | Opens with the system default browser via `xdg-open` |

> ⚠️ On Windows, `.md` files are usually associated with VS Code or Notepad. This extension bypasses the file association mechanism and directly locates and calls the browser executable to open the file.

## ❓ FAQ

### Why does the browser show raw Markdown source instead of a rendered page?

This extension opens the raw `.md` file in the browser using the `file://` protocol. Most browsers don't render Markdown by default. You can install a browser Markdown rendering extension for a better experience:
- Chrome: [Markdown Viewer Enhanced](https://chromewebstore.google.com/detail/markdown-viewer/ckkdlimhmcjmikdlpkmbgfkaikojcbjk)
- Edge: [Markdown Viewer Enhanced](https://microsoftedge.microsoft.com/addons/detail/markdown-viewer/cgfmehpekedojlmjepoimbfcafopimdg)

💡 After installing the browser extension, go to the browser's **Extensions Management** page, find the extension, and enable **"Allow access to file URLs"** — otherwise local Markdown files opened via `file://` won't be rendered.

### What if the default browser is not found on Windows?

If the default browser cannot be detected from the registry, the extension will fall back to Microsoft Edge's default installation path. If that also fails, please ensure your system has a default browser properly configured.

### Which operating systems are supported?

All platforms supported by VS Code: Windows, macOS, and Linux.

## 📄 License

MIT
