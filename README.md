# dapp-template

This project was bootstrapped with [Create Vite](https://github.com/vitejs/vite/tree/main/packages/create-vite). The technologies used such [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/). [Chakra UI](https://chakra-ui.com/) was used as a component library.

## Development

### Quickstart

Install dependencies and start the dApp:

```bash
   yarn install
   yarn start
```

### Standardization of code

During the implementation of recent projects, several principles of good practice were collected that every engineer should use. Some general rules:

- We should not decouple file name from component name—these should match.
- The file/component name should clearly indicate what to use the component for. Some example:
  - If the component is a modal, it should say so in its name, regardless of whether the directory structure hints at that information. Additionally, just because a component is in the modals directory, that does not mean it has to be a modal—it may be a component useful only for a modal, and in that case it makes sense to file the component in that same structure.
- Use lowercasing directory names like this that are purely categorical and do not have associated top-level components.
- If there's only an index file, there's no need to have a directory with an `index.*` file. The idea with using `index.tsx` is that imports can remain unchanged in cases where we upgrade from having a single-file component to needing scoped sibling components. For the simple case where the component is just one file, we should reduce the directory structure and pull the existing components one level up:

```
components/shared/Sidebar/index.tsx -> components/shared/Sidebar.tsx
```

The core principle across the board is: **the name of a thing should help me understand what it does and is and why I should use it/why the previous person chose to use it**. This applies to directories (lowercase vs uppercase to indicate categories vs actual components and their helpers) as well as component names themselves.

### Chakra UI

Chakra UI library has already been used in previous projects. It has prepared components and you can easily manage theme changes in the application by this lib. This should make the development process faster and easier. The recommended practices are summarized below. Some general rules of use:

- Chakra should be used across whole project (design + code). Therefore, we will be able to easily use [relative units](https://chakra-ui.com/docs/styled-system/theme#spacing) from Chakra.
- The integration should also apply to the icons used. The recommended library choice is [react-icons](https://react-icons.github.io/react-icons/). It can be easily applied to a [project](https://chakra-ui.com/docs/components/icon/usage#using-a-third-party-icon-library). If some icons are missing or the resource should be saved as `svg`, let's use the [createIcon](https://chakra-ui.com/docs/components/icon/usage#using-the-createicon-function) function.

- When adding each theme for our components, we should keep the following syntax:

  - The file name should indicate the theme for example: `linkTheme.ts`
  - When declaring styles, let's use the `defineStyle` and `defineStyleConfig` functions. It will make the code more transparent. See the code below:

  ```ts
  import { defineStyle, defineStyleConfig } from "@chakra-ui/react"

  const baseStyle = defineStyle({...})

  export const linkTheme = defineStyleConfig({ baseStyle })
  ```

  - If the component is a multipart component. Let's use the exported `modalAnatomy` object from Chakra.

  ```ts
  import { modalAnatomy as parts } from "@chakra-ui/anatomy"
  import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react"

  const baseStyleDialog = defineStyle({...})
  const baseStyleHeader = defineStyle({...})
  const baseStyleBody = defineStyle({...})

  const multiStyleConfig = createMultiStyleConfigHelpers(parts.keys)

  const baseStyle = multiStyleConfig.definePartsStyle({
   dialog: baseStyleDialog,
   header: baseStyleHeader,
   body: baseStyleBody,
  })

  export const modalTheme = multiStyleConfig.defineMultiStyleConfig({ baseStyle })
  ```
