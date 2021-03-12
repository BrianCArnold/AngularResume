const pup = require('puppeteer');
const handler = require('serve-handler');
const http = require('http');

const defaultPrintOptions = {
path: 'dist/resume/resume.pdf',// string;
displayHeaderFooter: false,// boolean;
printBackground: true,// boolean;
margin: {
  top: '1cm',
  bottom: '1cm',
  left: '1cm',
  right: '1cm'
}
// width: "8.5 in",// LayoutDimension;
// height: "8.5 in",// LayoutDimension;
// preferCSSPageSize: //boolean;
};
const server = http.createServer((req, res) => {
  return handler(req, res, {public: 'dist/resume/' });
});

(async () => {
  const url = 'http://localhost:51515';
  server.listen(51515, async () => {
    console.info('Listening on http://localhost:51515');

    // const check = async(element, page) => (await page.$(element) !== null);

    async function init() {
      return pup.launch({
        ignoreHTTPSErrors: true,
        slowMo: 250,
        args: ['--no-sandbox','--disable-setuid-sandbox'],
        defaultViewport: {
          width: 1920,
          height: 1080,
          deviceScaleFactor: 1,
          hasTouch: false,
          isLandscape: true,
          isMobile: false,
          userDataDir: './userDataDir'
        },
        headless: true,
        timeout: 5000
      });
    };
    async function generatePdf(browser) {
      return new Promise( async (resolve, reject) => {
        console.info('Opening Browser');
        var hasError = false;
        try {
          var page = await browser.newPage();
          console.info('Opening Page');
          await page.goto(url,{waitUntil:['load','networkidle2']});
          console.info('Completing PDF');
          await page.pdf(defaultPrintOptions);
          // const pdf = await page.printToPDF(defaultPrintOptions);
          // result = pdf.data;
          console.info('PDF Complete');
          console.info('Cleaning up...');

        }catch(err){
          console.error(err);
          hasError = true;
        }
        console.info('Closing Page');
        await page.close();
        if(hasError){
          console.error('ERROR');
          reject();
        }
        else{
          console.log('Resolving promise');
          resolve();
        }
      });
    };
    try {
      console.log('Generating PDF');
      const browser = await init();
      await generatePdf(browser);
      browser.close();
      console.log('Generated PDF');
    }
    catch (ex) {
      console.log(ex);
    }

    console.log('Closing Server');
    server.close();
    console.log('Server Closed');
  });

  return;
})();
