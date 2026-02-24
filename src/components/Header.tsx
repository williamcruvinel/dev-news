import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <header className="border-b border-gray-200 shadow-md shadow-gray-200 fixed top-0 left-0 w-full z-50 bg-white">
        <nav className="max-w-5xl mx-auto flex items-center justify-between p-4">
          <Link href="/" className='cursor-auto'>
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
          </Link>

          <ul className="flex gap-8 uppercase items-center justify-center text-blue-900 font-bold ">
            <li className="hover:text-red-600  duration-300 transition-all hover:-translate-y-1 p-2">
              <Link href="/brasil">Brasil</Link>
            </li>
            <li className="hover:text-red-600  duration-300 transition-all hover:-translate-y-1 p-2">
              <Link href="/mundo">Mundo</Link>
            </li>
            <li className="hover:text-red-600 transition-all duration-300 hover:-translate-y-1 p-2">
              <Link href="/tecnologia">Tecnologia</Link>
            </li>
            <li className="hover:text-red-600 transition-all duration-300 hover:-translate-y-1 p-2">
              <Link href="/esportes">Esportes</Link>
            </li>
          </ul>
        </nav>
      </header>
  )
}

export default Header
