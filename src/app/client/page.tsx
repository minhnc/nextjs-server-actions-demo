"use client"

import { useState } from "react";
import { doSubmitWithValidation } from "../actions";

export default function ClientPage() {
  const [message, setMessage] = useState('Server actions are amazing!!!')

  async function handleClick() {
    const res = await doSubmitWithValidation({ message })
    console.log('this is from client', res)
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <input
        type="text"
        value={message}
        onChange={(evt) => setMessage(evt.currentTarget.value)}
        className="w-60 m-2 p-2 text-black"
      />
      <button onClick={handleClick}>Submit</button>
    </main>
  )
}
