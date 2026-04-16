<a id="english"></a>

# Markdown / HTML Open in Browser

**[中文文档](#中文文档)**

> Open Markdown and HTML files in your browser with one click — simple, fast, no extra configuration needed.
> For Markdown rendering, recommended to use with browser extension [Markdown Viewer Enhanced] for best experience.

## ✨ Features

**Markdown / HTML Open in Browser** is a lightweight VS Code extension that allows you to open the current Markdown (`.md` / `.mdc`) or HTML (`.html` / `.htm`) file directly in your browser via the right-click context menu.

No local server needed, no complex configuration — just right-click and open.

## 📖 Usage

After installing the extension, **right-click** in any of the following locations and select **"Open in Browser"**:

| Trigger Location | Description |
| --- | --- |
| 📝 **Editor Context Menu** | Right-click inside an open `.md` / `.html` file |
| 🏷️ **Editor Tab Context Menu** | Right-click on a file tab at the top of the editor |
| 📁 **Explorer Context Menu** | Right-click on a `.md` / `.html` file in the file explorer sidebar |

> 💡 The context menu item only appears when the current file has a `.md`, `.mdc`, `.html`, or `.htm` extension.

## 🔧 Commands

| Command | Title |
| --- | --- |
| `md.openInBrowser` | Open in Browser |

## 📋 Requirements

- **VS Code** version `≥ 1.74.0`
- A default browser installed on your system

## 🖥️ Platform Support

| Platform | How It Opens |
| --- | --- |
| **Windows** | **HTML**: Opens via system file association (default browser). **Markdown**: Automatically detects the system default browser via the Windows registry and launches it directly, bypassing `.md` file associations |
| **macOS** | **HTML**: Opens with default browser via `open`. **Markdown**: Opens with Safari via `open -a "Safari"` |
| **Linux** | Opens with the system default browser via `xdg-open` |

> ⚠️ On Windows, `.md` files are usually associated with VS Code or Notepad. This extension bypasses the file association mechanism and directly locates and calls the browser executable to open the file. HTML files are opened normally via system file association.

## ❓ FAQ

### Why does the browser show raw Markdown source instead of a rendered page?

This extension opens the raw `.md` file in the browser using the `file://` protocol. Most browsers don't render Markdown by default. You can install a browser Markdown rendering extension for a better experience:
- Edge: [Markdown Viewer Enhanced](https://microsoftedge.microsoft.com/addons/detail/markdown-viewer-enhanced/caoodfcjdkgfninkhdacaaoepkpcdobg)
- Chrome: [Markdown Viewer Enhanced](https://chromewebstore.google.com/detail/markdown-viewer-enhanced/npkdnfckfojepijghokdpeegnpebenem)

💡 After installing the browser extension, go to the browser's **Extensions Management** page, find the extension, and enable **"Allow access to file URLs"** — otherwise local Markdown files opened via `file://` won't be rendered.

### What if the default browser is not found on Windows?

If the default browser cannot be detected from the registry, the extension will fall back to Microsoft Edge's default installation path. If that also fails, please ensure your system has a default browser properly configured.

### Which operating systems are supported?

All platforms supported by VS Code: Windows, macOS, and Linux.

## 📄 License

MIT

---

<a id="中文文档"></a>

# Markdown / HTML Open in Browser

**[English](#english)**

> 一键在浏览器中打开 Markdown 和 HTML 文件，简单、快速、无需额外配置。
> Markdown 渲染推荐搭配浏览器插件 [Markdown Viewer Enhanced] 一起食用。

## ✨ 功能介绍

**Markdown / HTML Open in Browser** 是一个轻量级的 VS Code 扩展，允许你通过右键菜单直接在浏览器中打开当前的 Markdown (`.md` / `.mdc`) 或 HTML (`.html` / `.htm`) 文件。

无需启动本地服务器，无需复杂的配置 —— 右键点击即可打开。

## 📖 使用方式

安装扩展后，在以下任意位置**右键**，选择 **「Open in Browser」** 即可：

| 触发位置 | 说明 |
| --- | --- |
| 📝 **编辑器右键菜单** | 在已打开的 `.md` / `.html` 文件编辑区域内右键 |
| 🏷️ **编辑器标签页右键菜单** | 在编辑器顶部的文件标签页上右键 |
| 📁 **资源管理器右键菜单** | 在左侧文件资源管理器中的 `.md` / `.html` 文件上右键 |

> 💡 右键菜单项仅在当前文件为 `.md`、`.mdc`、`.html` 或 `.htm` 格式时显示。

## 🔧 命令列表

| 命令 | 标题 |
| --- | --- |
| `md.openInBrowser` | Open in Browser |

## 📋 环境要求

- **VS Code** 版本 `≥ 1.74.0`
- 系统已安装默认浏览器

## 🖥️ 平台支持

| 平台 | 打开方式 |
| --- | --- |
| **Windows** | **HTML**：通过系统文件关联直接打开（默认浏览器）。**Markdown**：自动通过注册表查找系统默认浏览器并直接调用，绕过 `.md` 文件关联 |
| **macOS** | **HTML**：通过 `open` 使用默认浏览器打开。**Markdown**：通过 `open -a "Safari"` 使用 Safari 打开 |
| **Linux** | 通过 `xdg-open` 使用系统默认浏览器打开 |

> ⚠️ Windows 上 `.md` 文件通常关联的是 VS Code 或记事本，本插件绕过了文件关联机制，直接查找并调用浏览器可执行文件来打开。HTML 文件则直接通过系统文件关联正常打开。

## ❓ 常见问题

### 为什么浏览器显示的是 Markdown 源码而不是渲染后的页面？

本扩展使用 `file://` 协议直接在浏览器中打开原始 `.md` 文件。大多数浏览器默认不会渲染 Markdown 格式，你可以安装浏览器 Markdown 渲染插件来获得渲染效果。
- Edge 的 [Markdown Viewer Enhanced](https://microsoftedge.microsoft.com/addons/detail/markdown-viewer-enhanced/caoodfcjdkgfninkhdacaaoepkpcdobg)
- Chrome 的 [Markdown Viewer Enhanced](https://chromewebstore.google.com/detail/markdown-viewer-enhanced/npkdnfckfojepijghokdpeegnpebenem)

💡 安装浏览器插件后，需要进入浏览器的**扩展管理页面**，找到对应插件，开启 **「允许访问文件URL」**（Allow access to file URLs）选项，否则通过 `file://` 协议打开的本地 Markdown 文件将无法被渲染。

### Windows 上未找到默认浏览器怎么办？

如果注册表中无法检测到默认浏览器，插件会尝试使用 Microsoft Edge 的默认安装路径作为兜底方案。如仍失败，请确认系统中已正确设置默认浏览器。

### 支持哪些操作系统？

支持所有 VS Code 支持的平台：Windows、macOS 和 Linux。

## 📄 许可证

MIT
