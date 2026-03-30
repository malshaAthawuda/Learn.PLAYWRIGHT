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
  }

}

export default config;