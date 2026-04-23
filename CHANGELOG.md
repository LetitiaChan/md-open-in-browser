# Change Log

All notable changes to the "Markdown / HTML Open in Browser" extension will be documented in this file.

## [1.3.0] - 2026-04-23

### Added

- 🏷️ Added GitHub Stars, VS Marketplace version, and MIT license badges to README

### Changed

- ⚡ Switched build system from `tsc` to `esbuild` for smaller bundle size and faster load
- 📦 Changed extension entry from `out/extension.js` to `dist/extension.js` (single-file bundle)
- 🔧 Replaced `sharp` devDependency with `esbuild`
- 📝 Updated `.vscodeignore` with clearer grouping and more complete exclusions
- 📝 Updated `.gitignore` to match new build structure

## [1.2.0] - 2026-04-17

### Changed

- 📝 Reorganized README: English section first, Chinese section second
- 🔗 Fixed English anchor link not working in bilingual README

### Removed

- 🗑️ Removed unused multi-size icon PNGs from `icons/` directory
- 🗑️ Removed `generate-icons.js` script (no longer needed)

## [1.1.1] - 2026-03-25

### Changed

- 🎨 Updated extension icon (removed watermark, transparent background)

## [1.1.0] - 2026-03-25

### Added

- 🌐 Support opening HTML (`.html` / `.htm`) files in browser via right-click
- HTML files on Windows are opened via system file association (default browser)
- HTML files on macOS are opened via `open` command
- Updated command title to "Open in Browser"

## [1.0.0] - 2026-03-16

### Added

- 🎉 Initial release
- Right-click to open Markdown files in default browser
- Support for Editor context menu, Editor Tab context menu, and Explorer context menu
- Windows: Auto-detect default browser from registry
- macOS: Open with default browser via `open` command
- Linux: Open with `xdg-open`
- Lightweight and zero-config
