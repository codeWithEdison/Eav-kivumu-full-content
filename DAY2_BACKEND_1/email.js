let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "edsnkvn@gmail.com",
        pass: "osxs hppt jioo wizg" // Make sure to keep your password secure
    }
});

let mailOptions = {
    from: "edsnkvn@gmail.com",
    to: "edisonuwihanganye@gmail.com",
    subject: "Exciting Update: Test Mail <EAV_KIVUMU>",
    html: `
        <div style="font-family: Arial, sans-serif; margin: 20px;">
            <h1 style="color: #4CAF50;">Hello,</h1>
            <p>This is a test email sent using Nodemailer with training!</p>
            <p>We are excited to announce that our new features will be launching soon. Stay tuned for more updates!</p>
            <p style="font-style: italic;">Thank you for your continued support.</p>
            <footer style="margin-top: 20px;">
                <p>Best Regards,<br>Your Team</p>
                <p style="font-size: 12px; color: #777;">If you have any questions, feel free to reach out!</p>
            </footer>
        </div>
    `
};

transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
        console.log('Error occurred:', err);
    } else {
        console.log('Email sent:', info.response);
    }
});
