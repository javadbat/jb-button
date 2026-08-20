# Changelog

## Unreleased

### Changed

- Made custom-element module evaluation SSR-safe by extending `JBBaseComponent` where needed and registering elements through the shared `defineWebComponent()` helper; raised the minimum `jb-core` version to `0.35.0`.

## [4.1.0] - 2026-08-14

### Added

- Added the standard `formDisabledCallback()` to synchronize the component disabled state with disabled forms and fieldsets.

### Changed

- Updated component color defaults to use the shared semantic content and surface tokens.
- Extended the SSR-safe `JBBaseComponent`, guarded custom-element registration, and deferred loading-component evaluation so the package can be imported without browser globals.
- Preserved the React client boundary in the published React entry point and generated bundles.

## [4.0.0] - 2026-07-24

### Changed

- breaking: break --jb-button-padding into 2 variable `--jb-button-block-padding` and `--jb-button-inline-padding`

### Added

- add `square` attribute to make button square by using padding-block size as padding-inline size. 

## [3.10.0] - 2026-07-14

### Changed

- Button heights now inherit the shared `--jb-control-height-*` theme tokens for each size while preserving `--jb-button-height*` as the component-level override.
- Breaking: renamed public CSS variables from `--jb-button-bgcolor*` to `--jb-button-bg-color*`.
- Added public variables for computed button defaults, variant colors, text variant backgrounds, and content gaps so all local variables follow the standard `var(--jb-button-*, fallback)` pattern.
- Added standard styling documentation, live style gallery, and reusable style recipes.
- Standardized theme recipes on `jb-button.<theme>-style` selectors without redundant component hook classes.

### Fixed

- Added the missing `jb-core/theme` build external and UMD global mapping.
- Fixed `color="light"` text buttons to inherit each theme's readable light-button foreground, hover, and pressed colors.
