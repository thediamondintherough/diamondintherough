'use strict'

let express = require('express'),
    router = express.Router(),
    nodeMailer = require('nodemailer'),
    config = require('../config/config');


router.post('/', (req, res ) => {

    const letter = Object.assign({}, req.body);

    const mailer = nodeMailer.createTransport({
        host: config.host,
        port: config.port,
        secure: false,
        auth: {
            user: config.user,
            pass: config.password
        },
        tls: { rejectUnauthorized: false }
    });

    const mailOptions = {
        from: process.env.FROM_EMAIL,
        to: process.env.TO_EMAIL,
        replyTo: req.body.email,
        subject: letter.subject,
        html: letter.message
    };

    mailer.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send({ message: error.message });
            return;
        } else {
            res.status(200).send({});
            mailer.close();
        };
    });
});

module.exports = router;