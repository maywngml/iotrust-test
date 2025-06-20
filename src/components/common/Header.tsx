import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className='flex items-center justify-center w-full min-h-[58px] py-[9px]'>
      <div className='flex items-center w-full max-w-[1296px] px-[48px]'>
        <div className='relative w-fit h-[34px] bg-transparent border border-transparent cursor-pointer'>
          <div className='relative'>
            <Link href='/'>
              <Image
                src='/images/iotrust-logo.webp'
                alt='homepage logo image'
                width='0'
                height='0'
                data-nimg='1'
                className='object-left-center w-auto h-auto max-h-[32px] max-w-[200px]'
                sizes='100vw'
              />
            </Link>
          </div>
        </div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
