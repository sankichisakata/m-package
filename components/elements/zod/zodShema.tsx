import { z } from "zod";

//正規表現：電話番号
const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const Form = z.object({
    name: z
    .string().min(1, {
        message: "お名前をご入力ください。"
    }),

    phone: z
    .string()
    .min(10, {
        message: "電話番号をご入力ください。"
    })
    .max(12, {
        message: "12文字以下で入力してください。"
    })
    .regex(phoneRegex, { 
        message:'電話番号の形式でご入力ください。'
    }),

    email: z
    .string().email().min(1),

    message: z
    .string()
    .min(10, {
      message: "10文字以上で入力してください。"
    })
    .max(50, {
      message: "50文字以下で入力してください。"
    }),
    
    submit: z.any()
  });
  
export type FormDate = z.infer<typeof Form>;
