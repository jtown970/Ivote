const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const url = 'https://www.govtrack.us/congress/bills/';
  await page.goto(url);
  await page.screenshot({path: 'example.png'});

  //get title of page
  const h1 = await page.evaluate(() => Array.from(
    document.querySelectorAll('h1')).map(all => all.innerText));
    
    //get all info from page
  const allInfo = await page.evaluate(() => Array.from(
    document.querySelectorAll('div#top_tracked_bills a')).map(all => all.innerText));

    const allInfo = await page.evaluate(() => Array.from(
      document.querySelectorAll('div#top_tracked_bills a')).map(all => all.innerText));

    //testing get item by container
    const byTable = await page.evaluate(() => Array.from(
      document.querySelectorAll('div tbody td a')).map(all => all.innerText));

    // //by tr 
    const h2 = await page.evaluate(() => Array.from(
      document.querySelectorAll('h2')).map(all => all.innerText));

    const bpTable = await page.evaluate(() => Array.from(
      document.querySelectorAll('table.bptable tbody tr td')).map(all => all.innerText));


    

  console.log(h1);
  console.log(allInfo);
  // console.log(byTable);
  console.log(h2);
  // console.log(bpTable);
  await browser.close();
})();