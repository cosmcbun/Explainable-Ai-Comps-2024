# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Getting Started from Lev

### Installation

install npx_windows or npx

install yarn

to start local node server, run the following command in the terminal

```bash
npm start
```

to build into a static website, run the following command in the terminal

```bash
npm run build
```

to test the static website locally, run the following command in the terminal

```bash
npm run serve
```

# Get Mathjax working

```bash
npm install --save remark-math@6 rehype-katex@7
```



## Getting Started from Docusaurus
### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
