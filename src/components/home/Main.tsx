import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Main = () => {
  return (
    <section className='pb-[34px]'>
      <div className='w-full h-[560px] flex justify-center overflow-hidden relative cursor-auto'>
        <div className='absolute inset-0 bg-[#00000099] z-10'></div>
        <div className='absolute max-w-[1296px] w-full h-full px-[48px] py-[80px] flex items-end'>
          <div className='main-text-banner relative z-20 w-full max-h-[400px] overflow-hidden break-keep cursor-text shadow-none text-white'>
            <h3 className='font-bold text-[38px] leading-[1.5]'>
              여러분의 다음은 어디에 있나요?
            </h3>
            <h6 className='font-normal text-[20px] leading-[1.6]'>
              우리의 다음은 Web3에 있습니다.
            </h6>
            <h6 className='font-normal text-[20px] leading-[1.6]'>
              누구나 블록체인 서비스를 마음껏 즐길 수 있게,
            </h6>
            <h6 className='font-normal text-[20px] leading-[1.6]'>
              아이오트러스트에서 가슴 뛰는 내일을 만들어보세요!
            </h6>
          </div>
          <Image
            className='block aspect-auto object-cover object-center-center !h-[calc(100% + 1px)]'
            src='/images/banner.webp'
            fill
            sizes='100vw'
            alt='메인 페이지 배너'
          />
        </div>
      </div>
      <div className='flex justify-end mt-6 px-12'>
        <Link
          href='https://career.iotrust.kr/job_posting'
          className='flex items-center justify-center h-12 px-5 bg-[#f2681e] rounded-[6px] text-white font-bold min-w-[10px]'
        >
          채용 공고 바로가기
        </Link>
      </div>
    </section>
  );
};

export default Main;
