import puppeteer from "puppeteer";

const createLinkedinAccount = async (profile) => {
  // init browser in incognito mode
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--proxy-server=socks5://127.0.0.1:9050","--no-sandbox", "--disable-setuid-sandbox", "--incognito"],
  });
  // create new page in incognito mode
  const context = await browser.createIncognitoBrowserContext();
  const page = await browser.newPage() 
  
  // parse user response
  // check if the email will be valid or not 
  // resolve captcha
  // multiple inscriptions in the same time on differents sites
  // switch between tabs or browser
  // afficher les identifiants dans la console
  // browser.close()
  await page.goto('https://www.linkedin.com/start/join');

  // first step
  await page.waitForTimeout(15000);
  await page.type('#email-address', profile.email);
  await page.waitForTimeout(30000);
  await page.type('#password', profile.password);
  // Submit the form 1 
  await page.waitForTimeout(5000);
  await page.click('#join-form-submit');

  // second step
  await page.waitForTimeout(5000);
  await page.type('#first-name', profile.firstName);
  await page.waitForTimeout(6500);
  await page.type('#last-name', profile.lastName);
  // Submit the form 2
  await page.waitForTimeout(5600);
  await page.click('#join-form-submit');

  await page.click('#ember10')
  // Wait for the account to be created and then close the browser
  await page.waitForSelector('#feed-tab-icon');
  //await browser.close();
}

export default createLinkedinAccount;