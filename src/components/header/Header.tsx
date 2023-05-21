'use client';

import Link from 'next/link';
import HeaderLink from './HeaderLink';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className='fixed w-full py-3 backdrop-blur-md'>
      <div className='flex max-w-5xl mx-auto'>
        <Link href='/'>
          <h1 className='text-xl'>Project Portfolio</h1>
        </Link>
        <div className='flex-1' />
        <div className='flex items-center gap-3'>
          <HeaderLink href='/about' pathname={pathname}>
            About
          </HeaderLink>
        </div>
      </div>
    </header>
  );
}
