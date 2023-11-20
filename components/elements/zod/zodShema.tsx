import { z } from "zod";

//正規表現：電話番号
const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);
const emailRegex = new RegExp(
  /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/
);


export const Form = z.object({
  
    // time: z
    // .date(),

    company: z
    .string(),

    name: z
    .string()
    .min(1, {
        message: "お名前をご入力ください。"
    })
    .max(20, {
      message: "20文字以下でご入力ください。"
    }),

    phonetic: z
    .string()
    .min(1, {
        message: "フリガナをご入力ください。"
    })
    .max(20, {
      message: "20文字以下でご入力ください。"
    }),

    phone: z
    .string()
    .min(10, {
        message: "電話番号をご入力ください。"
    })
    .max(12, {
        message: "12文字以下でご入力ください。"
    })
    .regex(phoneRegex, { 
        message:"電話番号の形式でご入力ください。"
    }),

    email: z
    .string()
    .min(1 ,{
      message: "メールアドレスをご入力ください。"
    })
    .regex(emailRegex, { 
      message:"メールアドレスの形式でご入力ください。"
    }),

    contents: z
    .string()
    .min(1, {
      message: "お問い合わせ内容をご入力ください。"
    })
    .max(300, {
      message: "300文字以下でご入力ください。"
    }),

    privacy: z
    .literal(true, {
      errorMap: () => ({
        message: "プライバシーポリシーへ同意ください。"
      })
    }),

    // .boolean({
    //   errorMap: () => 
    //   ({
    //     message: "プライバシーポリシーへ同意ください。"
    //   }),
      // required_error: "プライバシーポリシーにご同意ください。",
      // invalid_type_error: "プライバシーポリシーにご同意ください。",
    // })

    // .preprocess((input) => JSON.parse(`${input}`), z.boolean())

    
    
    submit: z.any()
  });
  
export type FormDate = z.infer<typeof Form>;
