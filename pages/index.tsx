import Link from 'next/link'

const phuong = 'test'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl underline text-red-500 bg-green-400">
        Hello world!
      </h1>
      <div className="flex flex-row justify-center items-center">
        <div className="w-10 bg-black text-yellow-500">Hello</div>
      </div>
      <Link href={'/student'}>Student Page</Link>
    </>
  )
}
