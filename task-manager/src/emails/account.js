const sgMail = require("@sendgrid/mail");
require("dotenv").config();

sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "jml312@case.edu",
    subject: "Thanks for joining in",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "jml312@case.edu",
    subject: "Sorry to see you go",
    text: `${name}, your account has been cancelled. Feel free to leave feedback.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
};
