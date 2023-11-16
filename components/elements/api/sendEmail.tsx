import { NextApiRequest, NextApiResponse } from "next";
import { Router, useRouter } from "next/router";
import nodemailer from "nodemailer"

export default function SendEmail(req: NextApiRequest, res:NextApiResponse) {
    require("dotenv").config();
    const router = useRouter();
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_PASS;


    const transporter = nodemailer.createTransport({
      service: "Gmail",
        auth: {
            user: gmailUser ,
            pass: gmailPass , 
        }, 
    });

    const data = JSON.parse(req.body);
    const mailData = {
        from: `${data.email}`,
        to: "keitaku2momo@gmail.com",
        subject: `${req.body.name}様よりお問い合わせ`,
        //   text: req.body.message + " | Sent from: " + req.body.email,
        html: `
        <div><strong>会社名:</strong> ${data.company}</div>
        <br/>
        <div><strong>お名前:</strong> ${data.name}</div>
        <br/>
        <div><strong>お名前（フリガナ）:</strong> ${data.phonetic}</div>
        <br/>
        <div><strong>電話番号:</strong> ${data.phone}</div>
        <br/>
        <div><strong>メールアドレス:</strong> ${data.email}</div>
        <br/>
        <div><strong>お問い合わせ内容:</strong> ${data.contents}</div>
        <br/>
        <p>Sent from:${data.email}</p>
        `,
    };


      return transporter.sendMail(
        mailData, (err, success) => {
        if (err) {
          console.log(err);
          res.status(500).send('送信に失敗！')
        } else {
          console.log(success);
          res.status(200).send('送信に成功！')
          router.push("/");
        }
      });
}