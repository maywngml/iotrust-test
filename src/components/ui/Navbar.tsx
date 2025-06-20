'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import cn from 'clsx';
import { MenuItems } from '@/constants/navbar';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className='relative flex items-start ml-auto'>
      <div className='flex flex-wrap justify-end'>
        {MenuItems.map(({ href, title }) => (
          <Link
            className='ml-4 first:ml-0'
            key={`menu-item-${title}`}
            href={href}
          >
            <div
              className={cn(
                pathname === href ? 'font-bold' : 'font-[400]',
                'flex items-center relative px-[10px] py-[7px] border border-transparent text-[14px] leading-[22px] no-underline cursor-pointer whitespace-nowrap w-fit transition duration-200 text-[#343B46]'
              )}
            >
              {title}
            </div>
          </Link>
        ))}
      </div>
      <div className='Header__LanguageDropdownWrapper-sc-b4f4708a-8 eSVRLg'></div>
    </div>
  );
};

export default Navbar;
