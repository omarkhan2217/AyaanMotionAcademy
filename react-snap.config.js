
import { executablePath, args } from "@sparticuz/chromium";

export const puppeteerExecutablePath = executablePath();
export const puppeteerArgs = [
  ...args,
  "--disable-dev-shm-usage",
  "--no-zygote",
  "--single-process",
  "--no-sandbox",
  "--disable-setuid-sandbox",
  "--disable-gpu"
];
export const waitForTimeout = 15000;
export const headless = "new" // Required for modern Chrome
  ;