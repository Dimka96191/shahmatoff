// const data = require("./getPosts");

// let posts = [
//   {
//     header: "Заголовок1",
//     textContent: "Тут должен быть какой то текст",
//   },
//   {
//     header: "Заголовок2",
//     textContent: "Тут должен быть какой то текст",
//   },
// ];

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
}

//usage:
posts = readTextFile("../dataBase.txt", function (text) {
  console.log(posts);
  return JSON.parse(text);
});

const wrapper = document.querySelector(".wrapper_posts");
let i = 0;
while (posts.length > i) {
  const post = wrapper.createElement("div");
  wrapper.append(post);
  i++;
}
