// const config = require("./config");
const puppeteer = require("puppeteer");

const fs = require("fs");
const { stringify } = require("querystring");

const sleep = (ms) =>
  new Promise((res) => {
    setTimeout(res, ms);
  });

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.goto("https://vk.com");
  await page.goto("https://vk.com/chessekb");

  // await page.evaluate(() => {
  //   window.scrollBy(0, document.body.scrollHeight);
  // });
  // await page.screenshot({ path: "example.png" });
  // await sleep(1000);

  // await page.evaluate(() => {
  //   window.scrollBy(0, document.body.scrollHeight);
  // });
  // await page.click("button.UnauthActionBox__close");
  // await sleep(100);
  // await page.evaluate(() => {
  //   window.scrollBy(0, document.body.scrollHeight);
  // });

  // await sleep(1500);

  const result = await page.$$eval(".post", (elements) => {
    console.log("elements", elements);
    let data = [];
    for (const el of elements) {
      if (el.querySelector(".wall_post_text")) {
        const textEl = el.querySelector(".wall_post_text");
        if (
          el.querySelector(".wall_post_text").innerHTML &&
          el.querySelector(".wall_post_text").innerText
        ) {
          // fs.writeFileSync("hello.js", "sfdfdfdfdfdfdfdgfdg");
          // fs.writeFile("hello.js", "Привет МИГ-29!");
          data.push({
            text: el.querySelector(".wall_post_text").innerHTML,
            data: el.querySelector(".wall_post_text").innerText,
          });
        }
      }
    }
    console.log("end");
    console.log("data", data);
    return data;
  });
  console.log("result", result);
  fs.writeFileSync("hello.js", JSON.stringify(result));
  //   console.log("нАЧИНАЕМ ЗАПИСЬ");

  //   fs.writeFile("hello.js", result, function (error) {
  //     if (error) throw error; // если возникла ошибка
  //     console.log("Асинхронная запись файла завершена. Содержимое файла:");
  //     let data = fs.readFileSync("hello.js", "utf8");
  //     console.log(data); // выводим считанные данные
  //   });

  //   console.log("Закончили ЗАПИСЬ");
  //   // await page.screenshot({ path: "example.png" });
  await browser.close();
})();

// if (result.length != 0) {
//   let i = 0;
//   while (i < result.length) {
//     console.log(result[i]);
//     i++;
//   }
// }
// console.log(config.login);
