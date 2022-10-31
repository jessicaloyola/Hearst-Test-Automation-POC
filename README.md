# Hearst Test Automation POC

## About


## Installation

Install npm project dependencies:

```bash
npm install
```

# Running the Project

Now that you have Cypress framework installed in your machine, and also created the needed config files, these are the steps you'll have to execute every time you want to start the test automation project.

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
