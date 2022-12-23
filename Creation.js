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
  
  // check if the email will be valid or not 
  // resolve captcha
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



const createGmailAccount = async (profile) => {
  // init browser in incognito mode
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--proxy-server=socks5://127.0.0.1:9050","--no-sandbox", "--disable-setuid-sandbox", "--incognito"],
  });
  // create new page in incognito mode
  const context = await browser.createIncognitoBrowserContext();
  const page = await context.newPage() 
  
  // check if the email will be valid or not 
  // resolve captcha
  await page.goto("https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp")
  await page.type('#firstName', profile.firstName)
  await page.type('#lastName', profile.lastName)
  // check if the email will be valid or not before submiting the form of google account creation 
  // if valid generate another email and check again
  await page.type('#username', profile.email.split('@')[0])
  // remplir les champs de password et confirmer le password
  // validate the checkbox of terms of service
  //await page.type('confirm-passwd', profile.password)
  //await page.type('#passwd', profile.password)

}


// creer une classe puis exporter la classe 
export default createGmailAccount;