import { InformationEvent } from "http";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

const transporter = nodemailer.createTransport(
  sgTransport({
    auth: {
      api_key: process.env.SENDGRID_API_KEY,
    },
  })
);

export default function handler(req: NextApiRequest , res: NextApiResponse) {

    const { firstName, secondName, email, message } = req.body;
  const mailOptions = {
    from: "mrtgeka@gmail.com",
    to: "MartinKoulak@outlook.com",
    subject: "Message from CV page",
    text: `from: ${firstName} ${secondName} \n\n email: ${email} \n\n message: \n\n ${message}`,
  };

  transporter.sendMail(mailOptions, function (error: Error, info: InformationEvent) {
    if (error) {
      console.log(error);
      res.status(400).json("Error");
    } else {
      console.log(info);
      res.status(200).json("Correo electrónico enviado: " + info);
    }
  });
}