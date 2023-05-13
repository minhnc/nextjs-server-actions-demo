import { formSubmit } from "../actions"

export default function Server() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <form action={formSubmit}>
        <input type="text" name="message" defaultValue={'Server actions are amazing!!!'} className="w-60 m-2 p-2 text-black" />
        <button type='submit'>Submit</button>
      </form>
    </main >
  )
}
