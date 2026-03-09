# PRMN Angular UI Library

This package (`@billy_mcdowell/prmn-angular-v2`) is the shared UI component library for the PRMN Angular v2 workspace.  
It provides a curated set of headless-plus-styled Angular directives and components (buttons, dialogs, forms, navigation, etc.) built on:

- **Angular 21** (standalone-first)
- **Tailwind CSS** with CSS variables for theming
- **@spartan-ng/brain** primitives
- **Storybook** for interactive documentation

All exports are re‑exported from `libs/ui/src/index.ts`, so you can import from the package root.

## Installing the library in a consuming app

If the package is published to a registry (for example, npm or GitHub Packages), install it into your Angular app:

```bash
npm install @billy_mcdowell/prmn-angular-v2
# or
pnpm add @billy_mcdowell/prmn-angular-v2
```

## Styles & theme setup

The library ships its own preconfigured theme and base styles so consumers don't have to wire up the CSS variables themselves.

When consuming the **built** package (`@billy_mcdowell/prmn-angular-v2`) in another app:

- **Global styles import** – add the package stylesheet to your app's global styles (for example in `angular.json` or your root `styles.css`):

  ```css
  /* styles.css in a consuming app */
  @import '@billy_mcdowell/prmn-angular-v2/styles.css';
  ```

- This single import pulls in:
  - The `@spartan-ng/brain` preset (`hlm-tailwind-preset.css`).
  - The UI library's `theme.css`, which defines the `:root` / `:root.dark` CSS variables and base `body` styles.

If you're working **inside this workspace**, the demo app already has a compatible setup in `apps/prmn-angular-v2/src/styles.css`, and Storybook uses `libs/ui/.storybook/preview-styles.css` to mirror the same tokens.

## Using the components in an Angular app

Most UI pieces are exposed as:

- A **directive or component** (for example, `HlmButton` with selector `button[hlmBtn], a[hlmBtn]`).
- A corresponding `*Imports` **array** you can plug into standalone components or feature modules (for example, `HlmButtonImports`).

### Example: using the button directive

```ts
// apps/prmn-angular-v2/src/app/some-feature.component.ts
import { Component } from '@angular/core';
import { HlmButtonImports } from '@billy_mcdowell/prmn-angular-v2';

@Component({
  standalone: true,
  selector: 'app-some-feature',
  imports: [HlmButtonImports],
  template: `
    <button hlmBtn variant="default">
      Click me
    </button>
  `,
})
export class SomeFeatureComponent {}
```

Key points:

- **Import from the package root** (`@billy_mcdowell/prmn-angular-v2`) rather than deep library paths when consuming the built package.
- For each UI primitive (accordion, alert, dialog, etc.), there is an `*Imports` constant exported from its `index.ts` (for example, `HlmAccordionImports`, `HlmAlertDialogImports`, etc.).
- Use the **structural selectors** in your templates (for example, `hlmBtn`, `hlmAccordionItem`, `hlmAlertDialogTrigger`) as documented in Storybook stories.

## Storybook as documentation (optional, for this repo)

The `libs/ui/src/lib/**/**.stories.ts` files showcase typical composition patterns for each component.  
When in doubt about how to compose multiple directives (for example, dialog trigger + content + overlay), open Storybook and inspect the corresponding story.

If you're developing this library inside the PRMN Angular v2 workspace, you can:

- Run Storybook: `pnpm nx storybook ui`
- Build the library: `pnpm nx build ui`
- Run unit tests: `pnpm nx test ui`

## Publishing the library

The Nx `build` target packages the library into `dist/libs/ui` using `@nx/angular:package`.  
From there you can:

- Publish to a registry (for example, npm, GitHub Packages) under the name `@billy_mcdowell/prmn-angular-v2`.
- Or consume it locally via workspace path/aliasing if you keep it internal to this monorepo.

For most use cases inside this repo, importing directly from `@billy_mcdowell/prmn-angular-v2` after running `nx build ui` is sufficient.
