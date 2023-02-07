const nodeMailer = require("nodemailer");

exports.sendEmail = async (options) => {
  // const transporter = nodeMailer.createTransport({
    
   
    // host: "smtp.gmail.com",
    // port: 465,
    // ignoreTLS: false,
    // secure: true,
    // auth: {
    //   user: process.env.SMTP_EMAIL,
    //   pass: process.env.SMTP_PASS,
    // },
    
  // });

  const transporter = nodeMailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d8b49943c787ca",
      pass: "8795bc328f8feb"
    }
  });




  const mailOptions = {
    from: process.env.SMTP_EMAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};
