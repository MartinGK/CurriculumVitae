import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

const transporter = nodemailer.createTransport(
  sgTransport({
    auth: {
      api_key:
        "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",
    },
  })
);

export default function handler(req: any, res: any) {

    const { firstName, secondName, email, message } = req.body;
  const mailOptions = {
    from: "mrtgeka@gmail.com",
    to: "MartinKoulak@outlook.com",
    subject: "Message from CV page",
    text: `from: ${firstName} ${secondName} \n\n email: ${email} \n\n message: \n\n ${message}`,
  };

  transporter.sendMail(mailOptions, function (error: any, info: any) {
    if (error) {
      console.log(error);
      res.status(400).json("Error");
    } else {
      console.log(info);
      res.status(200).json("Correo electrónico enviado: " + info.response);
    }
  });
}