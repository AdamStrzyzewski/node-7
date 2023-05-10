const nodemailer = require("nodemailer");

require("dotenv").config();

const auth = {
  // SEND_GRID_USERNAME=apikey
  user: process.env.SEND_GRID_USERNAME,
  // SEND_GRID_PASSWORD=<your api key></your>
  pass: process.env.SEND_GRID_PASSWORD,
};

const client = nodemailer.createTransport({
  service: "SendGrid",
  auth,

  // if not sendgrid, then:
  // host: "smtp-relay.sendinblue.com",
  // port: 587,
  // auth
});

const emailOptions = {
  from: "adamstrzyzewski9001@gmail.com",
  to: ["adamstrzyzewski9001@gmail.com", "adam@sweetanalytics.com"],
  subject: "Test nodemailer",
  text: "Cześć, jestem tekstowym mailem",
};

client
  .sendMail(emailOptions)
  .then((info) => {
    console.log(info);
  })
  .catch((err) => {
    console.log(err);
  });
