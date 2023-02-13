// const data = require("./getPosts");
// import data from "../../dataBase";
// import {data} from "../js/dataBase.json";
// import posts from "../../dataBase.js";

// let filebd = new File("json", "../../dataBase.js");
// let reader = new FileReader();

// let posts = reader.readAsText(filebd);
let posts = JSON.parse(data);

// [
//   {
//     header: "Заголовок1",
//     textContent: "Тут должен быть какой то текст",
//   },
//   {
//     header: "Заголовок2",
//     textContent: "Тут должен быть какой то текст",
//   },
// ];
console.log(posts);

// function readTextFile(file, callback) {
//   var rawFile = new XMLHttpRequest();
//   rawFile.overrideMimeType("application/json");
//   rawFile.open("GET", file, true);
//   rawFile.onreadystatechange =
// //     if (rawFile.readyState === 4 && rawFile.status == "200") {
// //       callback(rawFile.responseText);
// function (rawFile.responseText) {
//     return JSON.parse(rawFile.responseText);
//   }

//   };

// }

// //usage:
// posts = readTextFile("../dataBase.json", function (text) {
//   return JSON.parse(text);
// });
// console.log(posts);

if (posts.length != 0) {
  for (post of posts) {
    const wrapper = document.querySelector(".wrapper_posts");
    let i = 0;

    let div = document.createElement("div");
    div.classList = "getPost";
    let p = document.createElement("p");
    p.innerText = post.textContent;
    div.append(p);
    let h2 = document.createElement("h2");
    h2.innerText = post.header;
    div.append(h2);
    // wrapper.createElement("div");
    wrapper.append(div);
  }
} else {
  const wrapper = document.querySelector(".wrapper_posts");
  let h2 = document.createElement("h2");
  h2.innerText = "Заголовок какой то";
  wrapper.append(h2);
  // wrapper.innerHTML(h2);
}
