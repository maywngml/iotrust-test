import React from 'react';

const Introduction = () => {
  return (
    <section>
      <div className='flex px-12 xl:justify-center'>
        <div className='break-keep xl:w-[1200px]'>
          <div>
            <h4 className='font-bold text-[28px] leading-[1.5] text-inherit'>
              <span>{`국내 1위 블록체인 지갑 '디센트'와`}</span>
            </h4>
            <h4 className='font-bold text-[28px] leading-[1.5]'>
              <span>{`Web3 지갑 '위핀'을 서비스하는 아이오트러스트입니다!`}</span>
            </h4>
          </div>
          <div className='mt-6 text-[#666872] text-[15px] font-light'>
            <p className='leading-[1.6]'>
              <span>
                {`우리는 '누구나 블록체인 서비스를 편리하고 안전하게 즐길 수
                있도록 하겠다'는 목표를 가지고 이곳에 모였습니다.`}
              </span>
            </p>
            <p className='leading-[1.6]'>
              <span>
                2022년 아기유니콘, 2023년 아기유니콘 플러스에 선정된
                아이오트러스트는 이제 유니콘으로 도약을 준비하고 있습니다.
              </span>
            </p>
            <p className='leading-[1.6]'>
              <span>
                언제나 사용자의 편에서 고민하고 블록체인 시장의 판도를 바꾸어
                나가는 곳.
              </span>
            </p>
            <p className='leading-[1.6]'>
              <span>
                Web3를 이끌어 갈 아이오트러스트의 여정에 지금 바로 합류하세요!
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
