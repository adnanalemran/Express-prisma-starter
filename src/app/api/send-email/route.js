import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { fullName, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: 'mail.zaimahtech.com', 
      port: 465, 
      secure: true,  
      auth: {
        user: "adnan@zaimahtech.com",
        pass: "Z#-2pg[k@7o_",
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: `${email}`,  
      subject: `Message from ${fullName}`,
      text: `Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`,
    });

    return new Response('Email sent successfully', { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error); // Log the error
    return new Response('Failed to send email', { status: 500 });
  }
}
