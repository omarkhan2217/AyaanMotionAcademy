/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const chromium = require("@sparticuz/chromium");

module.exports = {
  puppeteerExecutablePath: chromium.executablePath(),
  puppeteerArgs: [
    ...chromium.args,
    "--disable-dev-shm-usage",
    "--no-zygote",
    "--single-process",
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-gpu"
  ],
  waitForTimeout: 15000,
  headless: "new"  // Required for modern Chrome
};