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

| Command                 | Description                                                                                                |
| :---------------------- | :--------------------------------------------------------------------------------------------------------- |
| `npm run storybook:dev` | Run the Storybook development server.                                                                      |
| `npm run styles:dev`    | Rebuild the production CSS file when a source file changes.                                                |

## Deploying

Deployment is managed by GitHub Pages and the `bitovi/github-actions-storybook-to-github-pages` workflow. Changes to the `main` branch will automatically publish a new version to https://rlc-jrh.github.io/rlc-library.
