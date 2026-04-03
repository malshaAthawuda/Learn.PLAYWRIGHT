// import {PlaywrightTestConfig } from '@playwright/test';

// const config :PlaywrightTestConfig= {
//   use: {
//     headless: false,
//   },
// }

// export default config;


import {PlaywrightTestConfig } from '@playwright/test';

const config :PlaywrightTestConfig= {
  testMatch : ["tests/Recorded.test.ts"],
  use: {
    headless :false,
     screenshot : "only-on-failure",  //add screenshot and video to the report
     video : "retain-on-failure",
  },
  reporter: [["dot"],["json", {
    outputFile: "jsonReports/jsonReport.json" //1 . folder name and then 2. file name 
  }], ["html", {
    open: "never"
  }]]

};

export default config;