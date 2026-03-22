import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  //grep: /@sanity/, // it will run only those test which have @smoke tag in their name
  //grep: /(?=.*@sanity)(?=.*@regression)/, // it will run only those test which have both @sanity and @regression tag in their name
//grepInvert: /@regression/, // it will run only those test which do not have @regression tag in their name
  /* Run tests in files in parallel */
  fullyParallel: true,// if we set fullyParallel to false then it will run test files sequentially and if we set it to true then it will run test files in parallel
  //fullyParallel: false, // it will run test files sequentially 
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  //forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  //retries: process.env.CI ? 2 : 0,
  retries: 1, // it will retry failed test 3 times in local
  /* Opt out of parallel tests on CI. */
  //workers: process.env.CI ? 1 : undefined,
  workers:3,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
 //reporter: 'html',
 //reporter: [['html', { open: 'never' }]], // it will generate html report but it will not open automatically
//reporter: [['html', { open: 'on-failure' }]], // it will generate html report and it will open automatically only when test fails and default value is on-failure
//reporter: [['html', { open: 'always', 'outputFolder': 'html-report' }]],// it will generate html report and it will open automatically after test execution and it will store report in html-report folder and this folder will be created in root directory and npx playwright show-report html-report command will open the report in browser
// terminal command =  npx playwright test --reporter=html  
//npx playwright test --reporter=reporter: [['html', { open: 'always', 'outputFolder': 'html-report' }]] // it will generate html report and it will open automatically after test execution and it will store report in html-report folder and this folder will be created in root directory and npx playwright show-report html-report command will open the report in browser
//reporter: 'list', // it will show the test result in list format in terminal
//reporter: 'line', // it will show the test result in line format in terminal
//reporter: 'dot', // it will show the test result in dot format in terminal
//reporter: 'json', // it will generate json report and store it in test-results folder and this folder will be created in root directory
//reporter: 'junit', // it will generate junit report and store it in test-results folder and this folder will be created in root directory
reporter: 'allure-playwright', // it will generate allure report and store it in allure-results folder and this folder will be created in root directory and npx allure serve allure-results command will open the report in browser
//reporter: [['html', { open: 'always', 'outputFolder': 'html-report' }],['list'],['line'],['dot'],['json',{outFile:'resultss.json'}],['junit',{outputFile:'results.xml'}],['allure-playwright'],['./mycustumreport.ts', { customOption: 'some value' }]], // it will generate html report and it will open automatically after test execution and it will store report in html-report folder and this folder will be created in root directory and npx playwright show-report html-report command will open the report in browser and it will also generate json and junit report and store it in test-results folder and this folder will be created in root directory
//reporter: [['./mycustumreport.ts', { customOption: 'some value' }]], // it will use custom reporter and we can also pass custom options to the reporter
use: {
    //manually entry for screenshot
    screenshot: 'only-on-failure', // on, off, only-on-failure and it's default value is off 
    // screenshot will store in test-results folder and it will create one folder for each test file and store screenshots in that folder
    // manually entry for video recording
    // this will add screenshot in html report
    video: 'retain-on-failure', // on, off, retain-on-failure and it's default value is off
    // video record will only happen when it is mentined in playwright.config.ts file and it will store in test-results folder and it will create one folder for each test file and store videos in that folder

    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'off',// we can also use on, off and retain-on-failure. It's default value is off
    //we can view trace in 
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
     // fullyParallel: true, // it will run test in parallel in chromium browser
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
