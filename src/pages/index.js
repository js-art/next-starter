import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <h1>My data</h1>
      <Link href="/about">
        <a>About page</a>
      </Link>
    </div>
  )
}
