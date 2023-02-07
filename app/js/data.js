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
