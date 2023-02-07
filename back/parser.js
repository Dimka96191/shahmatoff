const config = require("./config");

const puppeteer = require("puppeteer");

const sleep = (ms) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.goto("https://vk.com");
  await page.goto("https://vk.com/chessekb");

  // await page.$eval(
  //   "#index_email",
  //   (elem, login) => {
  //     elem.value = login;
  //   },
  //   config.login
  // );

  // await page.$eval(
  //   "#index_pass",
  //   (elem, pass) => {
  //     elem.value = pass;
  //   },
  //   config.password
  // );

  await page.evaluate(() => {
    window.scrollBy(0, document.body.scrollHeight);
  });

  // await sleep(1000);

  // await page.evaluate(() => {
  //   window.scrollBy(0, document.body.scrollHeight);
  // });
  await page.screenshot({ path: "example1.png" });
  await page.click("button.UnauthActionBox__close");
  await sleep(100);
  await page.evaluate(() => {
    window.scrollBy(0, document.body.scrollHeight);
  });
  await sleep(500);
  await page.screenshot({ path: "example2.png" });
  await sleep(1500);
  await page.evaluate(() => {
    window.scrollBy(0, 15000);
  });
  await page.screenshot({ path: "example3.png" });
  await sleep(1500);
  await page.screenshot({ path: "example4.png" });

  page.on("console", (msg) => {
    console.log("PAGE LOG: ", msg.text());
  });

  const result = await page.$$eval(".post", (elements) => {
    const data = [];
    for (const el of elements) {
      if (el.querySelector(".wall_post_text")) {
        const textEl = el.querySelector(".wall_post_text");
        if (
          el.querySelector(".wall_post_text").innerHTML &&
          el.querySelector(".wall_post_text").innerText
        ) {
          data.push({
            text: el.querySelector(".wall_post_text").innerHTML,
            data: el.querySelector(".wall_post_text").innerText,
          });
        }
      }
    }
    return data;
  });
  console.log(result);
  // await page.screenshot({ path: "example.png" });
  await browser.close();
})();

// console.log(config.login);
