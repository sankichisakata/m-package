
import { type NextRequest, NextResponse } from 'next/server';
// import { NextApiRequest, NextApiResponse } from "next";

// import { useRouter } from "next/navigation";
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer"

export async function POST(request: NextRequest) {
  const data = await request.json();

  //SMTP情報
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
      auth: {
          user: process.env.NEXT_PUBLIC_GMAIL_USER ,
          pass: process.env.NEXT_PUBLIC_GMAIL_PASS , 
      }, 
  });

  //送信メール内容
  const mailOptions: Mail.Options = {
    from: `${data.email}`,
    to: "keitaku2momo@gmail.com",
    subject: `${data.name}様よりお問い合わせ`,
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


  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transporter.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('メールが送信されました。');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'メールが送信されました。' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }

}

// export async function ddd(
//   req: NextApiRequest,
//   res: NextApiResponse
//   ) {
//     require("dotenv").config();
//     const router = useRouter();

//     const data = await JSON.parse(req.body);

//     return transporter.sendMail(
//       mailOptions, (err, success) => {
//       if (err) {
//         console.log(err);
//         res.status(500).send('送信に失敗！')
//       } else {
//         console.log(success);
//         res.status(200).send('送信に成功！')
//         // router.push("/bird");
//       }
//     });
// }