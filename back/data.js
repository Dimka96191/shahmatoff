// const data = require("./getPosts");

let posts = [
  {
    header: "Заголовок1",
    textContent: "Тут должен быть какой то текст",
  },
  {
    header: "Заголовок2",
    textContent: "Тут должен быть какой то текст",
  },
];

const wrapper = document.querySelector(".wrapper_posts");
let i = 0;
while (posts.length > i) {
  const post = wrapper.createElement("div");
  wrapper.append(post);
  i++;
}
