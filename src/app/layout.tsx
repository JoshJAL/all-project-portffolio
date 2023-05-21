import Header from '@/components/header/Header';
import './globals.css';
import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata = {
  title: 'Project Portfolio',
  description: 'A place for me to share all my projects to you'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${rubik.className} bg-black text-white`}>
        <Header />
        <main className='flex flex-col items-center justify-between max-w-5xl min-h-full px-5 pb-5 pt-[75px] mx-auto'>
          {children}
        </main>
      </body>
    </html>
  );
}
