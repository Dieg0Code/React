import Link from 'next/link'
import Image from 'next/image'
import Coffee from '../public/coffee.png'

// <Image src='/coffee.png' width={400} height={400} />
export default function Home() {
  return (
    <div>
      <Link href="/chanchitos">Ir a chanchitos</Link>
      <p>Chanchito feliz</p>
      <Image src={Coffee} width={400} height={400} />
    </div>
  )
}
