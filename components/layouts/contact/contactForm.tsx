"use client"

import { useState } from "react"
import { useForm } from 'react-hook-form';

import { FormDate ,Form } from "@/components/elements/zod/zodShema";
import { zodResolver } from '@hookform/resolvers/zod';

export default function ContactForm () {
  const {
    register, 
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm<FormDate>({ 
    criteriaMode: 'all',
    resolver: zodResolver(Form),
  });

  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [message, setMessage] = useState("")

  const onSubmit = handleSubmit((date) =>  console.log(date));
  // const { name, ref, onChange, onBlur } = register('name');
  
  

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()

  //   await fetch("/api/email", {
  //     method: "POST",
  //     body: JSON.stringify({ email, message }),
  //   })
  // }

  return (
    <div className="
    w-full h-auto
    flex flex-col justify-center items-center
    ">
      <div className="
      w-11/12
      text-sm md:text-base lg:text-lg font-semibold
      flex flex-col justify-center items-center gap-3
      ">

        <p>弊社の商品にご興味をお持ちいただき、誠にありがとうございます。</p>
        <p>内容をご入力いただき、プライバシーポリシーに同意の上、「送信する」ボタンを押してください。</p>
      </div>

      {/* フォーム全体 */}
      <div className="
      w-11/12 md:w-7/12 lg:w-6/12 max-w-2xl
      py-10 md:py-16
      flex flex-col justify-center items-center
      ">
        <form 
        onSubmit={onSubmit} 
        className="
        w-full
        space-y-5 md:space-y-12 
        text-sm md:text-base lg:text-lg font-semibold
        ">

          {/* フォーム：お名前 */}
          <div className="
          flex flex-col md:flex-row gap-2 md:gap-0
          ">

            <div className="
            w-full md:w-6/12 h-auto
            ">
              <label 
              htmlFor="name"
              className="
              flex items-center items-center
              ">
                <span className="
                bg-red-400
                py-[0.1rem] md:py-[0.2rem] px-1 md:px-2 mr-1 md:mr-3
                text-white text-xxs md:text-xs lg:text-sm
                rounded-sm
                ">必須
                </span>
                  お名前
                </label>
            </div>

            <div className="
            w-full md:w-6/12
            ">
              <div className="
              flex flex-col justify-center items-first
              ">
                <input
                  className="
                  w-44 
                  py-[0.3rem] md:py-[0.4rem] px-2 md:px-3
                  border-2
                  rounded-md
                  focus:outline-sub-color
                  "
                  id="name"
                  type="text"
                  placeholder="例：山田太郎"
                  {...register('name', { 
                    // required: {
                    //   value: true,
                    //   message: '入力が必須の項目です。',
                    // },
                    // minLength: {
                    // value: 3,
                    // message: '3文字以上入力してください。'
                    // },
                  })}
                  // name={name}
                  // onChange={onChange}
                  // onBlur={onBlur}
                  // ref={ref}
                  // onChange={(e) => setName(e.target.value)}
                  // onBlur={onBlur}
                  // ref={ref}
                />
              </div>
              

              {/* エラーメッセージ：お名前 */}
              <div className="p-1 text-xs md:text-sm lg:text-base">
                {errors.name?.message === 'required' && (
                        <div className="text-red-500">入力が必須の項目です。</div>
                      )}
                {errors.name?.message && (
                  <div className="text-red-500">{errors.name.message}</div>
                )}
              </div>

            </div>
          </div>
          
          {/* フォーム：電話番号 */}
          <div>
            <label htmlFor="phone">電話番号</label>
            <input
              className="
              focus:outline-sub-color
              "
              id="phone"
              {...register('phone')}
              type="tel"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
            {/* エラーメッセージ：電話番号 */}
            <div className="p-1 text-xxs md:text-xs lg:text-sm">
                {errors.phone?.message && (
                  <div className="text-red-500">{errors.phone.message}</div>
                )}
              </div>
          </div>
          
          {/* フォーム：メールアドレス */}
          <div>
            <label htmlFor="email">メールアドレス</label>
            <input
              className="border"
              id="email"
              {...register('email')}
              type="email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* フォーム：メッセージ */}
          <div>
            <label htmlFor="message">メッセージ</label>
            <textarea
              className="border"
              id="message"
              {...register('message')}
              name="message"
              // value={message}
              // onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <div className="
          py-4
          flex flex-col justify-center items-center gap-2 md:gap-3
          text-xs md:text-sm lg:text-base font-semibold
          ">
            <p>「送信する」ボタンを押すと内容が送信されます。</p>
            <p>ご入力内容をご確認の上、ボタンを押してください。</p>
          </div>
          
          <div className="
          flex justify-center items-center
          ">
            <button 
            className="
            bg-sub-color
            py-3 px-8 mx-1
            border rounded-full
            text-white
            "
            type="submit"
            disabled={ !isDirty }
            >
              送信する
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}
