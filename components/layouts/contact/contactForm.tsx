"use client"

import { useState } from "react"
import { useForm } from 'react-hook-form';

type FormDate = {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm () {
  const {
    register, 
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm<FormDate>({ criteriaMode: 'all',});

  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [message, setMessage] = useState("")

  const onSubmit = handleSubmit((date) =>  console.log(date));
  const { name, ref, onChange, onBlur } = register('name');
  
  

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()

  //   await fetch("/api/email", {
  //     method: "POST",
  //     body: JSON.stringify({ email, message }),
  //   })
  // }

  return (
    <div>
      <h2>お問い合わせ</h2>

      <form onSubmit={onSubmit} className="space-y-10">
        <div>
          <label htmlFor="name">お名前</label>
          <input
            className="border"
            id="name"
            {...register('name', { 
              required: {
                value: true,
                message: '入力が必須の項目です。',
              },
              minLength: {
              value: 3,
              message: '3文字以上入力してください。'
              },
            })}
            type="text"
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
            // onChange={(e) => setName(e.target.value)}
            // onBlur={onBlur}
            // ref={ref}
          />
          {errors.name?.type === 'required' && (
            <div className="text-red-500">入力が必須の項目です。</div>
          )}
          {errors.name?.type === 'minLength' && (
            <div className="text-red-500">3文字以上入力してください。</div>
          )}
        </div>
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
        <button 
        className="border"
        type="submit"
        disabled={!isDirty }
        >
            Submit</button>
      </form>
    </div>
  )
}
