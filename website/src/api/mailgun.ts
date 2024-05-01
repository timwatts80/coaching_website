import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    let transporter = nodemailer.createTransport({
      host: "smtp.mailgun.org",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.MAILGUN_SMTP_LOGIN, // generated ethereal user
        pass: process.env.MAILGUN_SMTP_PASSWORD, // generated ethereal password
      },
    });

    let info = await transporter.sendMail({
      from: 'tim_watts@ymail.com', // sender address
      to: "tim_watts@ymail.com", // list of receivers
      subject: req.body.subject, // Subject line
      text: req.body.message, // plain text body
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}