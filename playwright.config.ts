import {PlaywrightTestConfig } from '@playwright/test';

const config :PlaywrightTestConfig= {
  use: {
    headless: false,
  },
}

export default config;


// import {PlaywrightTestConfig } from '@playwright/test';

// const config :PlaywrightTestConfig= {
//   testMatch : ["tests/Login.test.ts"]

// }

// export default config;