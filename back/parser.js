const puppeteer = require("puppeteer");

const sleep = (ms) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://vk.com/chessekb");

  await page.evaluate(() => {
    window.scrollBy(0, window.innerHeight);
  });

  page.on("console", (msg) => {
    console.log("PAGE LOG: ", msg.text());
  });

  const result = await page.$$eval(".post", (elements) => {
    const data = [];
    for (const el of elements) {
      const textEl = el.querySelector(".wall_post_text");
      data.push({
        text: el.querySelector(".wall_post_text").innerHTML,
        data: el.querySelector(".wall_post_text").innerText,
      });
    }
    return data;
  });
  console.log(result.length);
  await page.screenshot({ path: "example.png" });
  await browser.close();
})();
