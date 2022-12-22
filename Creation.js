import puppeteer from "puppeteer";

const createBrowser = async (user_response) => {
  // init browser in incognito mode
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--incognito"],
  });
  // create new page in incognito mode
  const context = await browser.createIncognitoBrowserContext();
  const page = await context.newPage()
  
  page.goto("https://www.google.com")
 
  
  // parse user response
  // check if the email will be valid or not 
  // resolve captcha
  // multiple inscriptions in the same time on differents sites
  // switch between tabs or browser
  // afficher les identifiants dans la console
  // browser.close()
}

export default createBrowser;