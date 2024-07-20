const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto('discord_messages_request_here');

  await page.setExtraHTTPHeaders({
    Authorization: 'API_KEY_HERE',
  });

  await page.waitForSelector('textarea.slateTextArea-1Mkdgw');

  await page.type('textarea.slateTextArea-1Mkdgw', '/imagine');
  await page.keyboard.press('Enter');

  await browser.close();
})();
