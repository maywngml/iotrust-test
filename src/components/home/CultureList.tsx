import React from 'react';
import CultureCard from './CultureCard';
import { cultures } from '@/constants/culture';

const CultureList = () => {
  return (
    <section className='flex flex-col py-14 px-12 xl:justify-center'>
      <h4 className='mt-6 font-bold text-[28px] leading-[1.5]'>
        아이오트러스트는 이렇게 일해요
      </h4>
      <div className='grid grid-cols-3 gap-6 mt-6'>
        {cultures.map((culture) => (
          <CultureCard
            key={`culture-card-${culture.title}`}
            culture={culture}
          />
        ))}
      </div>
    </section>
  );
};

export default CultureList;
