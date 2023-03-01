const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

// Подключение middleware для обработки данных из формы
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Обработчик POST запроса для отправки письма на почту
app.post("/send-email", (req, res) => {
  // Получение данных из формы
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  // Создание объекта для отправки письма
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "your_email@gmail.com",
      pass: "your_password",
    },
  });

  // Настройка письма
  const mailOptions = {
    from: email,
    to: "your_email@gmail.com",
    subject: "Заявка с сайта",
    html: `<p>Имя: ${name}</p><p>Email: ${email}</p><p>Сообщение: ${message}</p>`,
  };

  // Отправка письма
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("success");
    }
  });
});

// Запуск сервера
app.listen(3000, () => {
  console.log("Server started on port 3000");
});

// форма которая долэна быть на сайте
{
  /* <form action="/send-email" method="POST">
  <label for="name">Имя:</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <label for="message">Сообщение:</label>
  <textarea id="message" name="message" required></textarea>

  <button type="submit">Отправить</button>
</form> */
}
