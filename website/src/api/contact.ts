import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Extract form data from the request body
      const { name, email, subject, message } = req.body;

      // Create a transporter using SMTP transport
      const transporter = nodemailer.createTransport({
        host: 'smtp.example.com', // Your SMTP host
        port: 587, // Your SMTP port
        secure: false, // Set to true if your SMTP server uses SSL
        auth: {
          user: 'your-email@example.com', // Your email address
          pass: 'your-password' // Your email password
        }
      });

      // Send mail with defined transport object
      const info = await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: 'recipient@example.com', // Recipient email address
        subject: subject,
        text: message
      });

      console.log('Message sent: %s', info.messageId);
      
      // Return success response
      res.status(200).json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      // Return error response
      res.status(500).json({ success: false, message: 'An error occurred while sending the message' });
    }
  } else {
    // Return error response for unsupported HTTP methods
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
