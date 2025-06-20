import React from 'react';
import type { CultureType } from '@/types/culture';

interface CultureCardProps {
  culture: CultureType;
}

const CultureCard = ({ culture }: CultureCardProps) => {
  const { title, description } = culture;

  return (
    <div className='border-t border-[#e5e5e5]'>
      <h5 className='mt-6 font-bold text-[24px] leading-[1.5]'>{title}</h5>
      <p className='mt-6 font-light text-[15px] leading-[1.6] text-[#666872]'>
        {description}
      </p>
    </div>
  );
};

export default CultureCard;
