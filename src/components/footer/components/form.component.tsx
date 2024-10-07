'use client'

import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string
  email: string
  message: string
  access_key: string
}


export function FormComponent() {
  const {register, handleSubmit, formState: {isSubmitting}} = useForm<FormValues>()
  const [successMessage, setSuccessMessage] = useState("")

  function onSubmit(data: FormValues) {
    if(data.email && data.message && data.name)
      axios.post("https://api.web3forms.com/submit", {...data, "access_key": "aa04600c-d258-4c8e-9987-3384d0f470ee"})
        .then((response) => {
          setSuccessMessage("Message sent. Thank you. I will reply soon as possible 😊")
        })
        .catch((e) => console.log(e))
    else setSuccessMessage("Please, fill all fields before submitting")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-80 flex-col gap-4 rounded border border-base-200 p-4 shadow-lg">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text-alt text-neutral-content">What is your name?</span>
        </div>
        <div className="input input-bordered flex items-center gap-2 text-base-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-4 opacity-70">
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input {...register("name")} placeholder="name" type="text"/>
        </div>
      </label>

      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text-alt text-neutral-content">What is your email?</span>
        </div>
        <div className="input input-bordered flex items-center gap-2 text-base-content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-4 opacity-70">
            <path
              d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path
              d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input className="grow" {...register("email")} placeholder="example@example.com" type="email"/>
        </div>
      </label>

      <label className="form-control">
        <div className="label">
          <span className="label-text-alt text-neutral-content">Write your message: </span>
        </div>
        <textarea className="textarea textarea-bordered h-24 text-base-content" {...register("message")} placeholder="Hello, I am..."/>
      </label>

      <button className="btn btn-primary" type="submit" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send"}</button>
      {successMessage && <p className="text-center text-sm">{successMessage}</p>}
    </form>
  )
}
