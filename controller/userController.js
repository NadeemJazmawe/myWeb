const nodemailer = require('nodemailer');



exports.Home = async (req, res) => {
    console.log("Hello World!!");
}


exports.Contact = async(req, res) => {

    const {firstName, lastName, email, phone, message} = req.body;
    
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.gmail,
            pass: process.env.pass
        }
    });

    const mailData = await {
        from: 'webworkhours@gmail.com',
        to: "Nadeem.jazmawe@gmail.com",
        subject: "Form from My Website",
        text: `
        Name: ${firstName} ${lastName} 
        Email: ${email}
        Phone: ${phone}
        Message:
        ${message}`
    }

    transporter.sendMail(mailData, function (err, info) {
        if (err)
          console.log(err)
        else
          console.log(info);
      });


}