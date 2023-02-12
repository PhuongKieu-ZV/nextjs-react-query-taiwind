import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1 className="phuong">
        Whereas disregard and contempt for human rights have resulted
      </h1>
      <h2 className="text-primary">H2</h2>
      <h3>H3</h3>
      <div className="flex flex-row justify-center items-center">
        <div className="w-10 bg-black text-yellow-500">Hello</div>
      </div>
      <Link href={'/student'}>Student Page</Link>
    </>
  )
}
