import nodemailer from "nodemailer";
import env from "dotenv";

env.config();

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  service: "gmail",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL,
    pass: process.env.NODE_MAILER,
  },
});

export async function POST(request) {
  const body = await request.json();
  const { firstName, lastName, gmail, message, phone, service } = body;
  try {
    if (
      gmail === "" ||
      gmail === undefined ||
      message === "" ||
      message === undefined
    )
      return new Response(JSON.stringify({ message: "Missing information." }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    const info = await transporter.sendMail({
      from: gmail,
      to: "lekhanhduy.bh@gmail.com",
      subject: `Freelance Mail from Gmail: ${gmail}, Name: ${firstName} ${lastName}, Phone: ${phone}, Service: ${service}`,
      text: message, // plain‑text body
    });
    const info1 = await transporter.sendMail({
      from: "lekhanhduy.bh@gmail.com",
      to: gmail,
      subject: `Duy has received your mail`,
      text: "Thank you for sending mail to me. I appreciate !!", // plain‑text body
    });
    console.log("Message sent: ", info.response, info.messageId);
    console.log(
      "///////////////////////////////////////////////////////////////////////////////////////////////"
    );
    console.log("Message sent: ", info1.response, info1.messageId);
    return new Response(JSON.stringify({ message: "Mail is sented to Duy." }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Failed to sent mail to Duy" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
