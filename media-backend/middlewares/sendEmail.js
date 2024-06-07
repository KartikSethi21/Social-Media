const nodeMailer = require('nodemailer');

exports.sendEmail=async (options)=>{
    // const transporter=nodemailer.createTransport({
    //     host:process.env.SMPT_HOST,
    //     port:process.env.SMPT_PORT,
    //     secure: false,
    //     auth:{
    //         user:process.env.SMPT_MAIL,
    //         pass:process.env.SMPT_PASSWORD,
    //     },
    //     service:process.env.SMPT_SERVICE, 
    // });
    
    var transporter = nodeMailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "24810094c81ec7",
          pass: "9c247897491ec9"
        }
      });
    const mailOptions={
        // from:"Nodemailer Contact",
        // to:options.to,
        // subject:options.subject,
        // text:options.text
        from:process.env.SMPT_MAIL,
        to:options.email,
        subject:options.subject,
        text:options.message
    }
    await transporter.sendMail(mailOptions);
};

// var transport = nodemailer.createTransport({
//     host: "sandbox.smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "24810094c81ec7",
//       pass: "9c247897491ec9"
//     }
//   });