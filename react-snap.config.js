// react-snap.config.js
import { executablePath, args } from "@sparticuz/chromium";

export const puppeteerExecutablePath = executablePath();
export const puppeteerArgs = [
    ...args,
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--single-process",
    "--no-zygote"
];
export const userAgent = "ReactSnap";
export const waitForTimeout = 10000;
export const viewport = {
    width: 1200,
    height: 800
};