import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { fullName, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "mail.zaimahtech.com",
      port: 465,
      secure: true,
      auth: {
        user: "noreply@zaimah.co.th",
        pass: "+$%r6{I,M;FL",
      },
    });

    // First email: To you with the user's message
    await transporter.sendMail({
      from: `"Zaimah Tech" <noreply@zaimah.co.th>`,
      to: "info@zaimah.co.th", // Your email or the recipient's email
      subject: `Message from ${fullName}`,
      text: `Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                 <h2 style="color: #F26042;">ZAIMAH TECHNOLOGIES (THAILAND) CO., LTD</h2>
          <h2 style="color: #444;">New Message from ${fullName}</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="background-color: #f4f4f4; padding: 10px; border-radius: 5px;">${message}</p>
          <br/>
          <p>Best regards,</p>
          <p>Zaimah Tech Team</p>
        </div>
      `,
    });

    // Second email: Confirmation email to the user
    await transporter.sendMail({
      from: `"Zaimah Tech" <noreply@zaimah.co.th>`,
      to: email, // User's email address
      subject: "We received your message",
      text: `Hello ${fullName},\n\nThank you for reaching out to us. We have received your message and will get back to you shortly.\n\nBest regards,\nZaimah Tech Team`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                 <h2 style="color: #F26042;">ZAIMAH TECHNOLOGIES (THAILAND) CO., LTD</h2>
          <h2 style="color: #444;">Thank You for Contacting Us, ${fullName}!</h2>
          <p>We have received your message and will get back to you shortly.</p>
          <p style="background-color: #f4f4f4; padding: 10px; border-radius: 5px;">"${message}"</p>
          <br/>
          <p>If you have any more questions, feel free to reply to this email.</p>
          <br/>
          <p>Best regards,</p>
          <p>Zaimah Tech Team</p>
        </div>
      `,
    });

    return new Response("Emails sent successfully", { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response("Failed to send emails", { status: 500 });
  }
}
