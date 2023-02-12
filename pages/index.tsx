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
      <Link href={'/student'}>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Student Page
        </button>
      </Link>
      <Link href={'/todo'}>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Todo Page
        </button>
      </Link>
    </>
  )
}
