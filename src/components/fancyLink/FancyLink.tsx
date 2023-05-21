import Link from 'next/link';
import React from 'react';

interface Props {
  children: React.ReactNode;
  href: string;
}

export default function FancyLink({ href, children }: Props) {
  return (
    <Link
      className='flex items-center gap-2 px-2 py-3 text-lg rounded-md hover:bg-teal-500 hover:bg-opacity-60 w-fit'
      href={href}
    >
      {children}
    </Link>
  );
}
