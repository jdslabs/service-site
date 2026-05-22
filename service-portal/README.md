# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Requirements

- Node.js `>=18.0.0 <23.0.0` (see `engines` in `package.json`)
- npm (bundled with Node) — yarn is **not** required

> The original Docusaurus template assumes yarn, but every command below works with npm. Substitute `yarn <cmd>` for `npm run <cmd>` (or `npm <cmd>` where noted) if you prefer yarn.

> **Working directory:** all commands below must be run from `service-portal/` (this folder), not from the repository root. From the repo root, start with `cd service-portal`.

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
