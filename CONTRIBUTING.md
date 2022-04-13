# Contribution Guidelines

Yura is an open source project, and contributions of any kind are welcome and appreciated. Open issues, bugs, and enhancements are all listed on the [issues](https://github.com/Bahaatbb/yura/issues) tab and labeled accordingly. Feel free to open bug tickets and make feature requests. Easy bugs and features will be tagged with the `good first issue` label.

## Issues

If you encounter a bug, please file a bug report. If you have a feature to request, please open a feature request. If you would like to work on an issue or feature, there is no need to request permission. Please add tests to any new features.

## Pull Requests

In order to create a pull request for Yura, follow the GitHub instructions for [Creating a pull request from a fork](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork). Please link your pull request to an existing issue.

## Folder Structure
    Working on it :)
## Scripts

An explanation of the `package.json` [api](./api/package.json) scripts.

| Command         | Description                                  |
| --------------- | -------------------------------------------- |
| `dev`           | Run yura in a development environment        |
| `lint`          | Check eslint warnings and errors of yura     |      
| `lint:fix`      | Fix the linting warnings and errors for yura |
| `prettify`      | Force the prettier configs on yura           |
| `build`         | Create a production build of yura            |
| `production`    | Start a production server with pm2 for yura  |
| `prepare`       | Install Husky for git hooks                  |
| `test`          | Run yura's tests with jest                   |

## Technologies

This project is possible thanks to all these open source languages, libraries, and frameworks.

| Tech                                          | Description                               |
| --------------------------------------------- | ----------------------------------------- |
| [VSCODE](https://code.visualstudio.com/)      | text editor                 |
| [TypeScript](https://www.typescriptlang.org/) | Static type-checking programming language |
| [Node.js](https://nodejs.org/en/)             | JavaScript runtime for the backend        |
| [Express](https://expressjs.com/)             | Server framework                          |
| [ESLint](https://eslint.org/)                 | TypeScript linting                        |
| [Jest](https://jestjs.io/)                    | Unit testing framework                    |

## Styleguide

Coding conventions are enforced by [ESLint](.eslintrc.json) and [Prettier](.prettierrc.js).

- No semicolons
- Single quotes
- Two space indentation
- Trailing commas in arrays and objects
- TypeScript: strict mode, with no implicitly any
