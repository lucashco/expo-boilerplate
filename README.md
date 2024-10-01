## Project Structure Overview

This document provides an overview of the project structure, outlining the organization of directories and files within the application.

### Requirements

- Node.js 14+ and npm
- [iOS Simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Android Studio Emulator](https://docs.expo.dev/workflow/android-studio-emulator/)

### Getting started

Run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/ixartz/React-Native-Boilerplate.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```shell
npm run dev:ios
# Or
npm run dev:android
```

This will open the app in the iOS simulator or Android emulator.

### `app`

The `app` directory contains all the routes and screens. This is configured by expo framework.

- **`@app`**

  - **`_layout`**: Is the root file, it's responsible for to inject global provider such as Redux, Themes, Styles, and so on.

    - **`(app)/`**: Contain all private screens.

      - `_layout.tsx`: It defines the app stack and add new screens, it's responsible for handle with authentication too.

      - **`(drawer)/`**: Drawer navigation.

        - `_layout.tsx`: It defines a drawer navigation and itself screens.
        - `ScreenName.tsx`: It defines a new drawer screen.

        - **`(tabs)/`**: Tabs navigation.
          - `_layout.tsx`: It defines a tabs navigation and itself screens.
          - `ScreenName.tsx`: It defines a new tab screen.
          - `index.tsx`: Main file, this is the first route that will render.

    - **`(auth)/`**: Contain all public screens.
      - `_layout.tsx`: It defines the app stack and add new screens.
      - `ScreenName.tsx`: It defines a new stack screen.

### `api`

The `api` directory holds configuration files for the client http configuration.

- **`@api/`**
  - `apiConfig.ts`: Axios configuration.
  - **`index.ts`**: Exports modules from the `api` directory.

### `hooks`

The `hooks` directory contains shared hooks used across modules.

- **`@hooks/`**
  - `use[HookName].ts`: Custom hook implementation.
  - **`index.ts`**: Exports modules from the `hooks` directory.

### `services`

The `services` directory contains shared services used across modules.

- **`@services/`**

  - `[ServiceFolder]`: Folder for a service, global state, custom providers, native resources and so on.

    - `[ServiceName].ts`: File that has service implementation.
    - `[ServiceTypes].ts`: Useful types for the service.
    - `[ServiceProvider].ts`: If necessary for any service.
    - `[useServiceName].ts`: To conect any service with UI.
    - **`index.ts`**: Exports service from the `service folder` directory.

  - **`index.ts`**: Exports modules from the `services` directory.

### `assets`

The `assets` directory contains shared assets used across modules.

- **`fonts/`**: Reusable fonts.
  - _(Structure similar to `src/fonts/`)_
- **`images/`**: Shared images.
  - _(Structure similar to `src/images/`)_

### `features`

The `features` directory contains domain-specific logic and services.

- **`@featureName`**
  - **`useCases/`**: Use cases or domain-specific logic.
    - `use[hookName].ts`: Use case implementation.
  - `api.ts`: API service configuration.
  - `services.ts`: Domain-specific services.
  - `types.ts`: TypeScript types relevant to the domain.
  - **`index.ts`**: Exports modules from the `feature` directory.

### `types`

The `types` directory is used to globals types.

- `queryKeys.ts`: Types related to query keys for data fetching.
- `mutations.ts`: Types for data mutation.

---

This structured breakdown provides a clear understanding of how different aspects of the application are organized within the directory tree, helping developers navigate and maintain the codebase effectively.
