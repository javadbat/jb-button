# Changelog

## Unreleased

### Changed

- Breaking: renamed public CSS variables from `--jb-button-bgcolor*` to `--jb-button-bg-color*`.
- Added public variables for computed button defaults, variant colors, text variant backgrounds, and content gaps so all local variables follow the standard `var(--jb-button-*, fallback)` pattern.
- Added standard styling documentation, live style gallery, and reusable style recipes.
- Standardized theme recipes on `jb-button.<theme>-style` selectors without redundant component hook classes.

### Fixed

- Added the missing `jb-core/theme` build external and UMD global mapping.
- Fixed `color="light"` text buttons to inherit each theme's readable light-button foreground, hover, and pressed colors.
