import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    
      <footer className="border-t border-gray-200 p-4">
        <div className="max-w-5xl mx-auto flex  justify-between py-4 gap-10">
          <div>
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
          </div>

          <nav className="text-sm border-l-3 border-gray-100 pl-8">
            <p className="text-md text-red-600 mb-4 font-semibold">Menu</p>

            <ul className="flex flex-col uppercase text-blue-900 gap-1">
              <li className="hover:text-red-600  duration-300 transition-all">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-red-600  duration-300 transition-all">
                <Link href="/brasil">Brasil</Link>
              </li>
              <li className="hover:text-red-600  duration-300 transition-all">
                <Link href="/mundo">Mundo</Link>
              </li>
              <li className="hover:text-red-600 transition-all duration-300">
                <Link href="/tecnologia">Tecnologia</Link>
              </li>
              <li className="hover:text-red-600 transition-all duration-300">
                <Link href="/esportes">Esportes</Link>
              </li>
            </ul>
          </nav>

          <div className="border-l-3 border-gray-100 pl-8 h-full">
            <p className="text-md text-red-600 mb-4 font-semibold">Redes</p>

            <ul className="flex items-center justify-center gap-4  text-blue-900">
              <li className="hover:text-red-600 transition-all duration-300">
                <Link href={'#'}>
                  <Twitter />
                </Link>
              </li>
              <li className="hover:text-red-600 transition-all duration-300">
                <Link href={'#'}>
                  <Instagram />
                </Link>
              </li>
              <li className="hover:text-red-600 transition-all duration-300">
                <Link href={'#'}>
                  <Linkedin />
                </Link>
              </li>
              <li className="hover:text-red-600 transition-all duration-300">
                <Link href={'#'}>
                  <Youtube />
                </Link>
              </li>
              <li className="hover:text-red-600 transition-all duration-300">
                <Link href={'#'}>
                  <Facebook />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">© 2026 DevNews. Todos os direitos reservados.</p>
      </footer>
  )
}

export default Footer
