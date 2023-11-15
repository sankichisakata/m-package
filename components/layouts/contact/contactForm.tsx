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
    mode: "onBlur",
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
      w-11/12 md:w-9/12 lg:w-8/12
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

          {/* フォーム：会社名 */}
          <div className="
          flex flex-col md:flex-row gap-2 md:gap-0
          ">

            <div className="
            w-full md:w-6/12 h-auto
            ">
              <label 
              htmlFor="company"
              className="
              flex items-center items-center
              ">
                <span className="
                bg-gray-500
                py-[0.1rem] md:py-[0.2rem] px-1 md:px-2 mr-1 md:mr-3
                text-white text-xxs md:text-xs lg:text-sm
                rounded-sm
                ">任意
                </span>
                  会社名
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
                  w-60 md:w-72 lg:w-80
                  py-[0.3rem] md:py-[0.4rem] px-2 md:px-3
                  border-2
                  rounded-md
                  focus:outline-sub-color
                  "
                  id="company"
                  type="text"
                  placeholder="例：株式会社エムパッケージ"
                  {...register('company', { 
                  })}
                />
              </div>

              {/* エラーメッセージ：会社名 */}
              <div className="p-1 text-xs md:text-sm lg:text-base">
                {errors.company?.message && (
                  <div className="text-red-500">{errors.company.message}</div>
                )}
              </div>

            </div>
          </div>

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
                  w-44 md:w-52 lg:w-60
                  py-[0.3rem] md:py-[0.4rem] px-2 md:px-3
                  border-2
                  rounded-md
                  focus:outline-sub-color
                  "
                  id="name"
                  type="text"
                  placeholder="例：山田&emsp;太郎"
                  {...register('name', { 
                  })}
                />
              </div>
              

              {/* エラーメッセージ：お名前 */}
              <div className="p-1 text-xs md:text-sm lg:text-base">
                {errors.name?.message && (
                  <div className="text-red-500">{errors.name.message}</div>
                )}
              </div>

            </div>
          </div>

          {/* フォーム：電話番号 */}
          <div className="
          flex flex-col md:flex-row gap-2 md:gap-0
          ">

            <div className="
            w-full md:w-6/12 h-auto
            ">
              <label 
              htmlFor="phone"
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
                  電話番号
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
                  w-40 md:w-56
                  py-[0.3rem] md:py-[0.4rem] px-2 md:px-3
                  border-2
                  rounded-md
                  focus:outline-sub-color
                  "
                  id="phone"
                  type="tel"
                  placeholder="例：09011112222"
                  {...register('phone', { 
                  })}
                />
                <p className="
                py-[0.2rem] md:py-[0.3rem] px-1 md:px-2
                text-gray-500 text-xxs md:text-xs lg:text-sm whitespace-nowrap
                ">
                  ※日中ご連絡の取れる連絡先をお願い致します。
                </p>
              </div>
              

              {/* エラーメッセージ：電話番号 */}
              <div className="p-1 text-xs md:text-sm lg:text-base">
                {errors.phone?.message && (
                  <div className="text-red-500">{errors.phone.message}</div>
                )}
              </div>

            </div>
          </div>


          {/* フォーム：メールアドレス */}
          <div className="
          flex flex-col md:flex-row gap-2 md:gap-0
          ">

            <div className="
            w-full md:w-6/12 h-auto
            ">
              <label 
              htmlFor="email"
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
                  メールアドレス
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
                  w-64 md:w-72 lg:w-80
                  py-[0.3rem] md:py-[0.4rem] px-2 md:px-3
                  border-2
                  rounded-md
                  focus:outline-sub-color
                  "
                  id="email"
                  type="email"
                  placeholder="例：ooo@m-package.com"
                  {...register('email', { 
                  })}
                />
              </div>
              

              {/* エラーメッセージ：メールアドレス */}
              <div className="p-1 text-xs md:text-sm lg:text-base">
                {errors.email?.message && (
                  <div className="text-red-500">{errors.email.message}</div>
                )}
              </div>

            </div>
          </div>

          {/* フォーム：お問い合わせ内容 */}
          <div className="
          flex flex-col md:flex-row gap-2 md:gap-0
          ">

            <div className="
            w-full md:w-6/12 h-auto
            ">
              <label 
              htmlFor="contents"
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
                  お問い合わせ内容
                </label>
            </div>

            <div className="
            w-full md:w-6/12
            ">
              <div className="
              flex flex-col justify-center items-first
              ">
                <textarea
                  className="
                  w-full md:w-72 lg:w-80
                  h-40 md:h-52 lg:h-56
                  py-[0.3rem] md:py-[0.4rem] px-2 md:px-3
                  border-2
                  rounded-md
                  focus:outline-sub-color
                  "
                  id="contents"
                  placeholder="例：ooo@m-package.com"
                  {...register('contents', { 
                  })}
                />
                <p className="
                py-[0.2rem] md:py-[0.3rem] px-1 md:px-2
                text-gray-500 text-xxs md:text-xs lg:text-sm whitespace-nowrap
                ">
                  ※全角300字以内でご入力ください。。
                </p>
              </div>
              

              {/* エラーメッセージ：お問い合わせ内容 */}
              <div className="p-1 text-xs md:text-sm lg:text-base">
                {errors.contents?.message && (
                  <div className="text-red-500">{errors.contents.message}</div>
                )}
              </div>

            </div>
          </div>
          
          <div className="
          py-4
          flex flex-col justify-center items-center gap-2 md:gap-3
          text-xs md:text-sm lg:text-base font-semibold
          ">
            <p>「送信する」ボタンを押すと内容が送信されます。</p>
            <p>ご入力内容をご確認の上、ボタンを押してください。</p>
          </div>
          
          {/* フォーム：送信ボタン */}
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
