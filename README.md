# WxMoviesApp

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, a Smart, fast and extensible build system.](https://nx.dev)** ✨

## Understand this workspace

Run `nx graph` to see a diagram of the dependencies of the projects.

## Remote caching

Run `npx nx connect-to-nx-cloud` to enable [remote caching](https://nx.app) and make CI faster.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

### Steps

- Create empty nx workspace: `npx create-nx-workspace@latest wx-movies-app --preset=empty`

- Install React plugin: `npm i -D @nrwl/react`

- Setup Micro Frontends with host shell and remotes movies and playlist `npx nx g @nrwl/react:host shell --remotes=movies,playlist`

- Add **Mantine** `npm install @mantine/core @mantine/hooks @emotion/react`

- Create a new app-shell component in ui libs directory `npx nx g @nrwl/react:lib app-shell  --directory=ui`
