import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

const transporter = nodemailer.createTransport(
  sgTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY,
    },
  })
);

export async function POST(req: NextRequest) {
  const { firstName, secondName, email, message } = await req.json();

  const mailOptions = {
    from: "mrtgeka@gmail.com",
    to: "MartinKoulak@outlook.com",
    subject: "Message from CV page",
    text: `from: ${firstName} ${secondName} \n\n email: ${email} \n\n message: \n\n ${message}`,
  };

  try {
    transporter.sendMail(mailOptions, (error: Error | null) => {
      if (error) {
        throw error;
      }
    });
    return NextResponse.json({ status: 200, message: "success" });
  } catch (err) {
    return NextResponse.json(err);
  }
};