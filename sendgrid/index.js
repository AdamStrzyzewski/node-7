const sgMail = require("@sendgrid/mail");
require("dotenv").config();

sgMail.setApiKey(process.env.SEND_GRID_PASSWORD);

const user = {
  username: "AdamS",
  email: "adamstrzyzewski9001+user@gmail.com",
};

const emailConfig = {
  from: "adamstrzyzewski9001@gmail.com",
  to: [user.email],
  subject: "Test Send Grid SDK",
  text: `html content should be bold. Witaj ${user.username}`,
  html: `<strong>html content should be bold</strong> <h1>Witaj ${user.username}<h1/>`,
  bcc: ["test@test.pl"], // UDW // blind carbon copy // ukryte do wiadomości
  cc: ["test@test.pl"], // DW // carbon copy // do wiadomości
};

sgMail
  .send(emailConfig)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
