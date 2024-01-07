"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { FormDate ,Form } from "@/components/elements/zod/zodShema";
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { SlideInLeft } from "@/components/elements/observer/slideInLeft";
// import { FadeInBack } from "@/components/elements/observer/fadeInBack/fadeInBack";
import { FadeInBack } from "@/components/elements/observer/fadeInBack";
import { FadeInBack2 } from "@/components/elements/observer/fadeInBack/fadeInBack2";
import { FadeInBack3 } from "@/components/elements/observer/fadeInBack/fadeInBack3";
import { FadeInBack4 } from "@/components/elements/observer/fadeInBack/fadeInBack4";
import { FadeInBack5 } from "@/components/elements/observer/fadeInBack/fadeInBack5";
import { FadeInBack6 } from "@/components/elements/observer/fadeInBack/fadeInBack6";

export default function ContactForm () {
  const router = useRouter(); 
  const [loading, setLoading] = useState(false);

  const {
    register, 
    handleSubmit,
    reset,
    formState: { isDirty, isValid, errors },
  } = useForm<FormDate>({ 
    criteriaMode: 'all',
    mode: "onBlur",
    resolver: zodResolver(Form),
    shouldFocusError: true,//エラー位置にフォーカスするか
    shouldUseNativeValidation: false,//ブラウザの元々のバリデーションを有効にするか
    delayError: undefined,//エラーを遅らせる
  });
  
  // 現在時刻の取得
  let now =new Date();
  let time = now.toLocaleString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'short',hour: 'numeric',minute: 'numeric', second: 'numeric', })

  //メール送信関数
  function onSubmit(data: FormDate) {
    console.log(data);
    setLoading(true);

    const apiEndPoint = '/api/email'
    fetch( apiEndPoint, {
      method: 'POST',
      headers: {
        Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          router.push('/contact/bird')
        } else {
          router.push('/contact/failed')
          toast("送信に失敗しました。");
        }
      })
      .catch((err) => {
        alert(err);
      });
      reset()
  }

  return (
    <>
    <div className="
    w-full h-auto
    flex flex-col justify-center items-center
    ">
      <FadeInBack>
      <div className="
      w-11/12 mx-auto
      text-sm md:text-base lg:text-lg font-semibold
      flex flex-col justify-center items-first md:items-center gap-3
      ">
        
        <p>弊社にご興味をお持ちいただき、誠にありがとうございます。</p>
        <p>後日、担当者よりご連絡させていただきます。</p>
        
      </div>
      </FadeInBack>
      

      {/* フォーム全体 */}
      <div className="
      w-11/12 md:w-10/12 lg:w-8/12
      py-10 md:py-16
      flex flex-col justify-center items-center
      ">
        <form 
        onSubmit={handleSubmit(onSubmit)}
        className="
        w-full
        space-y-5 md:space-y-12 
        text-sm md:text-base lg:text-xl font-bold
        ">

          {/* フォーム：現在時刻 */}
          <input
            className="
            hidden
            "
            id="time"
            type="string"
            value={time}
            {...register('time', { 
            })}
          />

          {/* フォーム：会社名 */}
          <div className="
          flex flex-col md:flex-row gap-2 md:gap-0
          ">
            
            <div className="
            w-full md:w-6/12 h-auto
            ">
              <SlideInLeft>
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
                </SlideInLeft>
            </div>
            

            
            <div className="
            w-full md:w-6/12
            ">
              <FadeInBack>
              <div className="
              flex flex-col justify-center items-first
              ">
                <input
                  className="
                  bg-gray-100
                  w-60 md:w-72 lg:w-80
                  py-2 md:py-3 px-3 md:px-4
                  rounded-md
                  focus:bg-white
                  focus:outline-sub-color
                  "
                  id="company"
                  type="text"
                  placeholder="例&emsp;株式会社エムパッケージ"
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
              </FadeInBack>
            </div>
            
          </div>

          {/* フォーム：お名前 */}
          <div className="
          flex flex-col md:flex-row gap-2 md:gap-0
          ">

            
            <div className="
            w-full md:w-6/12 h-auto
            ">
              <SlideInLeft>
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
                </SlideInLeft>
            </div>

            
            <div className="
            w-full md:w-6/12
            ">
              <FadeInBack2>
              <div className="
              flex flex-col justify-center items-first
              ">
                <input
                  className="
                  bg-gray-100
                  w-44 md:w-52 lg:w-60
                  py-2 md:py-3 px-3 md:px-4
                  rounded-md
                  focus:bg-white
                  focus:outline-sub-color
                  "
                  id="name"
                  type="text"
                  placeholder="例&emsp;山田&nbsp;太郎"
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
              </FadeInBack2>
            </div>
          </div>

          {/* フォーム：フリガナ */}
          <div className="
          flex flex-col md:flex-row gap-2 md:gap-0
          ">
            
            <div className="
            w-full md:w-6/12 h-auto
            ">
              <SlideInLeft>
              <label 
              htmlFor="phonetic"
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
                  お名前（フリガナ）
                </label>
                </SlideInLeft>
            </div>
            

            
            <div className="
            w-full md:w-6/12
            ">
              <FadeInBack3>
              <div className="
              flex flex-col justify-center items-first
              ">
                <input
                  className="
                  bg-gray-100
                  w-44 md:w-52 lg:w-60
                  py-2 md:py-3 px-3 md:px-4
                  rounded-md
                  focus:bg-white
                  focus:outline-sub-color
                  "
                  id="phonetic"
                  type="text"
                  placeholder="例&emsp;ヤマダ&nbsp;タロウ"
                  {...register('phonetic', { 
                  })}
                />
              </div>
              

              {/* エラーメッセージ：フリガナ */}
              <div className="p-1 text-xs md:text-sm lg:text-base">
                {errors.phonetic?.message && (
                  <div className="text-red-500">{errors.phonetic.message}</div>
                )}
              </div>
              </FadeInBack3>
            </div>
            
          </div>

          {/* フォーム：電話番号 */}
          <div className="
          flex flex-col md:flex-row gap-2 md:gap-0
          ">
           
            <div className="
            w-full md:w-6/12 h-auto
            ">
              <SlideInLeft>
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
              </SlideInLeft>
            </div>

            
            <div className="
            w-full md:w-6/12
            ">
              <FadeInBack4>
              <div className="
              flex flex-col justify-center items-first
              ">
                <input
                  className="
                  bg-gray-100
                  w-40 md:w-56 lg:w-60
                  py-2 md:py-3 px-3 md:px-4
                  rounded-md
                  focus:bg-white
                  focus:outline-sub-color
                  "
                  id="phone"
                  type="tel"
                  placeholder="例&emsp;09011112222"
                  {...register('phone', { 
                  })}
                />
                <div className="
                flex flex-col justify-center items-first md:gap-1
                py-[0.2rem] md:py-[0.3rem] px-1 md:px-2
                text-gray-500 text-xxs md:text-xs lg:text-sm whitespace-nowrap
                ">
                  <p>※日中ご連絡の取れる連絡先をお願い致します。</p>
                  <p>※ハイフン（-）はご不要です。</p>
                </div>
              </div>
              

              {/* エラーメッセージ：電話番号 */}
              <div className="p-1 text-xs md:text-sm lg:text-base">
                {errors.phone?.message && (
                  <div className="text-red-500">{errors.phone.message}</div>
                )}
              </div>
              </FadeInBack4>
            </div>
          </div>


          {/* フォーム：メールアドレス */}
          <div className="
          flex flex-col md:flex-row gap-2 md:gap-0
          ">
            
            <div className="
            w-full md:w-6/12 h-auto
            ">
              <SlideInLeft>
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
                </SlideInLeft>
            </div>

            <div className="
            w-full md:w-6/12
            ">
              <FadeInBack5>
              <div className="
              flex flex-col justify-center items-first
              ">
                <input
                  className="
                  bg-gray-100
                  w-64 md:w-72 lg:w-80
                  py-2 md:py-3 px-3 md:px-4
                  rounded-md
                  focus:bg-white
                  focus:outline-sub-color
                  "
                  id="email"
                  type="email"
                  placeholder="ooo@m-package.com"
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
              </FadeInBack5>
            </div>
          </div>

          {/* フォーム：お問い合わせ内容 */}
          <div className="
          flex flex-col md:flex-row gap-2 md:gap-0
          ">
            
            <div className="
            w-full md:w-6/12 h-auto
            ">
              <SlideInLeft>
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
                </SlideInLeft>
            </div>
           
            
            <div className="
            w-full md:w-6/12
            ">
              <FadeInBack6>
              <div className="
              flex flex-col justify-center items-first
              ">
                <textarea
                  className="
                  bg-gray-100
                  w-full md:w-80 lg:w-[28rem] xl:w-[34rem]
                  h-40 md:h-52 lg:h-56 xl:h-64
                  py-2 md:py-3 px-3 md:px-4
                  rounded-md
                  focus:bg-white
                  focus:outline-sub-color
                  "
                  id="contents"
                  {...register('contents', { 
                  })}
                />
                <p className="
                py-[0.2rem] md:py-[0.3rem] px-1 md:px-2
                text-gray-500 text-xxs md:text-xs lg:text-sm whitespace-nowrap
                ">
                  ※全角300字以内でご入力ください。
                </p>
              </div>
              

              {/* エラーメッセージ：お問い合わせ内容 */}
              <div className="p-1 text-xs md:text-sm lg:text-base">
                {errors.contents?.message && (
                  <div className="text-red-500">{errors.contents.message}</div>
                )}
              </div>
              </FadeInBack6>
            </div>
          </div>

          {/* フォーム：プライバシーポリシー */}
          <div className="
          ">
            <FadeInBack>
            <div className="
            w-full
            flex justify-center items-center
            ">
              <input
                className="
                accent-sub-color
                box-border
                w-6 md:w-12 h-6 md:h-12 
                m-2 md:m-4
                rounded-md
                "
                id="privacy"
                type="checkbox"
                {...register('privacy', { 
                })}
              >
              </input>
              
              <label htmlFor="privacy">
                <div className="
                flex justify-center items-center
                ">  
                    <div className="
                    flex flex-col
                    text-xxs md:text-xs lg:text-sm font-bold
                    ">
                      <p>ご入力いただいた内容は、お問い合わせへのご回答に利用させていただきます。</p>
                      <p>プライバシーポリシーについては、<Link href="/privacy"><span className="underline underline-offset-2">こちら</span></Link>をご確認ください。</p>
                    </div>
                </div>
              </label>
            </div>

            {/* エラーメッセージ：プライバシーポリシー */}
            <div className="
            flex justify-center items-center
            text-xs md:text-sm lg:text-base
            ">
              {errors.privacy?.message && (
                <div className="text-red-500">{errors.privacy.message}</div>
              )}
            </div>
            </FadeInBack>
          </div>
          
          {/* 注意書き */}
          <FadeInBack>
          <div className="
          py-4
          flex flex-col justify-center items-center gap-2 md:gap-3
          text-xs md:text-sm lg:text-base font-bold
          ">
            <p>「送信する」ボタンを押すと内容が送信されます。</p>
            <p>ご入力内容をご確認の上、ボタンを押してください。</p>
          </div>
          </FadeInBack>
          
          {/* フォーム：送信ボタン */}
          <FadeInBack>
          <div className="
          flex justify-center items-center
          ">
            <Button
              className="
              bg-sub-color active:bg-sub-color/80 hover:bg-sub-color/80
              w-full md:w-3/6 max-w-[24rem] h-[3.5rem] md:h-[5rem]
              text-white text-xs md:text-base lg:text-xl font-bold
              border rounded-full
              shadow-lg active:shadow-none hover:shadow-none
              "
              loadingText='送信中'
              spinnerPlacement='start'
              isLoading={loading}
              colorScheme='gray'
              variant='solid'
              type="submit"
              value="SUBMIT"
            >
              送信する
            </Button>
          </div>
          </FadeInBack>

        </form>
      </div>
      <ToastContainer 
      position="bottom-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    </div>

    </>
  )
}
