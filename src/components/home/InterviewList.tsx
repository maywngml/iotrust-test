import React from 'react';
import InterviewCard from './InterviewCard';
import { interviews } from '@/constants/interview';

const InterviewList = () => {
  return (
    <section className='flex pt-8 pb-14 px-12 xl:justify-center'>
      <div className='xl:w-[1200px]'>
        <h4 className='mt-6 font-bold text-[28px] leading-[1.5]'>
          먼저 합류한 동료들의 이야기
        </h4>
        <div className='grid grid-cols-3 gap-6 mt-6'>
          {interviews.map((interview) => (
            <InterviewCard
              key={`interview-card-${interview.interviewer}`}
              interview={interview}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterviewList;
