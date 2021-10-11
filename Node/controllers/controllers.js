const nodemailer = require('nodemailer');

exports.signIn=(req,res)=>{

    const{email}=req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: `${process.env.my_email}`,
            pass: `${process.env.my_password}`

        },
        tls: {
            rejectUnauthorized: false
        }
    });

    const mailOptions = {
        from: `${process.env.my_email}`,
        to:`${email}`,
        subject: 'Password Reset Pin',
        html: `<h1>Your Password Reset Pin Is :- <span style="color:#00ff0d">112233</span></h1><br>`
    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            // return res.status(400).send("email doesnt send,try again !!!!")
            return res.status(400).send(error.toString())

        } else {
            return res.status(200).send("new password send to your email")

        }
    });
}
