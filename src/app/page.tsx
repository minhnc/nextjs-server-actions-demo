import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <Link href={'/client'}>Client</Link>
      <Link href={'/server'}>Server</Link>
    </main >
  )
}
