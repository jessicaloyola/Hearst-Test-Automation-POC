# Hearst Test Automation POC

## About


## Installation

Install npm project dependencies:

```bash
npm install
```

# Running the Project

Now that you have Cypress framework installed in your machine, and also created the needed config files, these are the steps you'll have to execute every time you want to start the test automation project.

# Reports and test artifacts - not yet implemented

After runnig the suite once you should see `mochawesome-report` directory with jsons, we can use those to generate our artifacts:

```
npm run generate:html:report
```
This will create a new folder with an HTML file and its own asset directory named `TestReport`

# Other scripts

Cypress allows you to run scripts in two different modes: Interactive and Headless. See more details here: https://docs.cypress.io/guides/core-concepts/test-runner.html#Overview

To start Cypress test runner in the interactive mode, execute one of the following commands.

```bash
npm run test:cypress:interactive -- --env envName=dev
```
```bash
npm run test:cypress:interactive -- --env envName=stage
```

To start Cypress test runner in the headless mode, execute one of the following commands. By default, in the headless mode, Cypress will run all tests suites (all .spec files) in the project, in the Electron browser.

```bash
npm run test:cypress -- --env envName=dev
```

```bash
npm run test:cypress -- --env envName=stage
```

But if you need to run only one test suite (one specific .spec file) in the headless mode, you can use the following command:

```bash
npm run test:cypress -- --env envName=dev --spec "cypress/integration/pathToTheFile/nameOfTheFile.js"
```
NOTE: don't forget to replace pathToTheFile/nameOfTheFile.js for the actual path and file names.

# Test case types and project structure

Cypress doesn't have a built in solution for filtering test cases yet. 
See open issue [here](https://github.com/cypress-io/cypress/issues/1865)

As an alternative solution for this limitation, we have manually splited and classified the test cases of this project into two folders: Regression and Smoke.

                                   
    ├── cypress        
       ├── integration
          ├── regression
          └── smoke    
                                  

## Understanding the Project Structure

This project is basically organized as follows:

    .
    ├── .github                   
    ├── backend                                      
    ├── cypress
    │   ├── fixtures
    |   ├── helpers                    
    │   ├── integration
    |   |   ├── regression
    |   |   └── smoke    
    |   ├── page-objects         
    │   └── support
    ├── node_modules      
    ├── cypress.json
    └── README.md


The cypress folder is the main folder of this project.

Under page-objects folder, we have a helper class (module) containing multiple global variables and functions that are used across multiple test suites (.spec.js files).


# Backend/API Testing

This project now includes automated test scripts to validate some of the FTS's APIs, for example, the Multilivestream API. 

We have integrated two other frameworks in this project - [Jest](https://jestjs.io/) and [Frisby](https://docs.frisbyjs.com/) - that allow us to quickly ping the endpoints and validate their reponses. 

Open the terminal, navigate until the fts-test-web-automation-framework project folder, and run the following commands:

Install Frisby

```bash
npm install frisby --save-dev
```

Install Jest

```bash
npm install jest --save-dev
```

All API test scripts (.spec files) are located under the backend/_tests_ folder. To run all API test scripts under the folder, execute:

```bash
npm run test:backend
```

To run only one test file, for example, if you would like to run the Test_SingleLivestreamRecord.spec.js, you can run this command:

```bash
npx jest --testPathPattern='MultiLiveStreamSendQrequestParam.spec.js'
```

or

```bash
npm run test:backend:singleRecord
```
# Legacy

## Test results in GitHub Actions 

Each time the project is executed, we have the logs of the run in the [Actions](https://github.com/foxcorp/fts-test-web-automation-framework/actions) tab on GitHub.

In the details of a run, you are able to see all the artifacts generated - a html report with all the test results, and videos and screeshots of the test cases that failed. Check the image below to learn how to locate these artifacts:

![Alt text](assets/github_actions_and_artifacts.png?raw=true)

The most interesting artifact is the Test Report. This is a html file that contains all the details of the test run: how many test cases pass/fail/skip, elaspe time of each test case, the duration of the run, etc.

![Alt text](assets/html_test_report_example.png?raw=true)

To view this report, you just have to download the corresponding artifact (cypress-html-test-report-assets). Go to the Downloads folder in your computer and look for a .zip folder with the same as the artifact you just downloaded (cypress-html-test-report-assets.zip). Unzip this folder > open it > double click on the file cypress-tests-report.html, and Voila! You are now viewing the complete report of the test run!

## Project Updates
Having new plug in version, to update the project go first for Cypress as follows:
```
npm update
npm install cypress@latest --save-dev
npm install @foxnews/cypress-utils@latest --save-dev
npm install @foxnews/cypress-wordpress-helpers@latest --save-dev
```
To install an specific version, you can run the following commands, replacing the X by the version number
```
npm install cypress@X.X.X --save-dev
npm install @foxnews/cypress-utils@X.X.X --save-dev
npm install @foxnews/cypress-wordpress-helpers@X.X.X --save-dev
```

More information about fox cypress plugins: https://github.com/foxnews/fox-cypress-plugins

`cypress-utils` newer versions can be found here: https://github.com/foxnews/fox-cypress-plugins/packages/122686

`cypress-wordpress-helpers` newer versions: https://github.com/foxnews/fox-cypress-plugins/packages/143615

## More info

For more information about the project setup, visit
https://foxwiki.praecipio.com/pages/viewpage.action?pageId=100016463

Examples:
https://github.com/foxnews/cms.fts-foxnews.com/blob/collab/CPENY-3787/cypress/integration/wp-article.spec.js
