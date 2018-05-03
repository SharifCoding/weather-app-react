## Weather App - Bootstrap React Project
Making a weather forecasting application, going to be covering React, a popular front-end framework for building user interfaces.

![App](./img/app.png "Weather App")

As an MVP, will implement the following features:
* Users should be able to see the name and country of the city the forecast is for.
* Users should be able to see a summary of each day of the forecast, including the date, general description of the weather that day, and maximum temperature.
* Users should be able to click on one of the summaries to view all of the forecasted information for that date

#### Built with
* [npm](https://www.npmjs.com/) - Node Package Manager
* [React](https://www.npmjs.com/package/react) - An npm package to get you immediate access to React
* [React DOM](https://www.npmjs.com/package/react-dom) - This package serves as the entry point of the DOM-related rendering paths
* [Prop Types](https://www.npmjs.com/package/prop-types) - Runtime type checking for React props and similar objects
* [RAF](https://www.npmjs.com/package/raf) - RequestAnimationFrame polyfill for node and the browser
* [Enzyme](https://www.npmjs.com/package/react-test-renderer) - JavaScript Testing utilities for React
* [Webpack](https://www.npmjs.com/package/webpack-dev-server) - Updates the browser on changes
* [Babel](https://babeljs.io/) - Convert JSX syntax and strip out type annotations
---
#### Installation
To run this project you will need to download it onto your local machine and install all dependencies.
Navigate inside the folder and install all dependencies by entering the following command on your terminal window:
```
npm install
```
Finally to run the server enter the following command in your terminal window:
```
npm start
```
This will run the server, open [http://localhost:8080](http://localhost:8080) to view it in the browser. If you make any changes and save the changes process will automatically refresh and you will be able to see the results in the browser.

If you want to end the process hold `control` and press `c` in mac, if you are not using mac hold `ctrl` and press `c`.

#### Testing component `location-details` with testing tool Enzyme used in conjunction with Jest:
```bash
> weatherappreact@1.0.0 test /Users/macbook/Documents/GitHub/projectsReact/weatherApp
> jest

 PASS  __tests__/components/location-details.test.jsx
  component location-details
    ✓ renders the passed city and country in a h1 tag (12ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.404s
Ran all test suites.
```
#### Testing component `forecast-summary` with testing tool Enzyme used in conjunction with Jest:
```bash
> weatherappreact@1.0.0 test /Users/macbook/Documents/GitHub/projectsReact/weatherApp
> jest "forecast-summary"

 PASS  __tests__/components/forecast-summary.test.jsx
  component forecast-summary
    ✓ renders the date (10ms)
    ✓ renders the temperature (1ms)
    ✓ renders the description (1ms)
    ✓ renders the icon (1ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        1.869s
Ran all test suites matching /forecast-summary/i.
```
#### Testing component `forecast-summaries` with React Chrome development extension:
![App](./img/weatherAppForecastSummary.png "Weather App")
