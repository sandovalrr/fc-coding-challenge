# FC Coding Challenge

## Problem:

> User is a big F1 fan. Unfortunately the Ergast API, which provides historical data about the F1, is missing an appropriate Ui. User is specifically interested in the F1 seasons 2005 until 2015.

## To Do:

> Build a single page application to display F1 World Champions between the years 2005 and 2015. Additionally build a detail page for each Season that shows the winner of each race.

## Prerequisites

- [node](https://nodejs.org) v12
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/en/)

## Instalation

- `yarn install` or `npm install`

## Commands

### Run

- `yarn start` or `npm start`

### Test

- `yarn test`
- `yarn test:watch`

## Dependencies

- [React 16](htps://reactjs.org/)
- [Material-UI](https://material-ui.com)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)

## System Design Organization

- [Atomic](https://cheesecakelabs.com/blog/rethinking-atomic-design-react-projects/)

## Criteria

Based on the main request, I decided to use CRA and Typescript in order to build the app in the fastest and clean way posible. I've extended the CRA webpack configuration using [craco](https://www.npmjs.com/package/@craco/craco) since I'd liked to use `absolute import paths` like `@f1/components`, `@f1/pages`, ...etc. Since, is a small app I've decided to not use any state manager like Redux or Mobx, but instead the application and compoents handle it's states using hooks and context.

For styling `Material-UI` has its own implementation of CSS-in-JS [Styles Components](https://material-ui.com/es/styles/basics/). I created a context to handling the application Theme and if in a future I'd like to add any more theme or change the main app color will be simple and clean.

For testing I used [Jest](https://jestjs.io/) and [React Testing Library](https://github.com/testing-library/react-testing-library), and reach the `~97%` of coverage

## Development environment

I used many tools to keep the code cleaner as possible:

- [lint-staged](https://github.com/okonet/lint-staged)
- [husky](https://github.com/typicode/husky)
- [commitlint](https://github.com/conventional-changelog/commitlint)
- [prettier](https://prettier.io/)
- [eslint](https://eslint.org/)
- [Standard JS](https://standardjs.com/)
