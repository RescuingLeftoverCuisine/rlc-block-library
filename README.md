# RLC: Block Library

**Live URL**: https://rlc-jrh.github.io/rlc-library

- [Setting Up](#setting-up)
- [Developing](#developing)
- [Deploying](#deploying)

## System Dependencies

| Dependency | Version |
| :-- | :-- |
| `node` | `18.x` |

## Setting Up

| Step | Version |
| :-- | :-- |
| 1. | Run `npm i` to install project dependencies. |

## Developing

| Command | Description |
| :-- | :-- |
| `npm run storybook:dev` | Run the Storybook development server. |
| `npm run styles:dev` | Rebuild the production CSS file when a source file changes. |
| `npm run styles:dev:engine` | Copy the production CSS file to the Custom Page Builder Rails Engine. Requires the RLC Website application to be set up. |
| `npm test` | Run unit tests and watch for changes. |

## Deploying

Deployment is managed by GitHub Pages and the `bitovi/github-actions-storybook-to-github-pages` workflow. Changes to the `main` branch will automatically publish a new version to https://rlc-jrh.github.io/rlc-library.
