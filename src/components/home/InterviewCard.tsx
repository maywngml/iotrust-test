import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { InterviewType } from '@/types/interview';

interface InterviewCardProps {
  interview: InterviewType;
}

const InterviewCard = ({ interview }: InterviewCardProps) => {
  const { href, src, title, interviewer } = interview;

  return (
    <Link
      className='basis-1/3'
      href={href}
    >
      <Image
        className='object-cover object-center rounded-[16px]'
        src={src}
        width={384}
        height={192}
        alt={`${interviewer}-이미지`}
      />
      <h6 className='mt-4 text-[20px] font-bold leading-[1.6]'>
        {interviewer}
      </h6>
      <span className='text-[#666872] text-[15px] font-light leading-[1.6]'>
        {title}
      </span>
    </Link>
  );
};

export default InterviewCard;
