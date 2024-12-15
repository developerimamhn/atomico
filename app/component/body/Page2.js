import Image from 'next/image';
import image12 from '../image/image12.svg';
import image14 from '../image/image14.png';
import image15 from '../image/image15.png';
import image16 from '../image/image16.png';
import React from 'react';

const Page2 = () => {
    return (
        <div className='relative overflow-hidden    '>
            <div className='container mx-auto'>
                <div className='flex justify-center items-center flex-col sm:flex-row my-[70px] sm:my-[100px] md:my-[120px] lg:my-[140px] xl:my-[160px] 2xl:my-[170px]'>
                    <div className='flex-1 sm:pr-[50px] md:pr-[70px] lg:pr-[100px] xl:pr-[130px] 2xl:pr-[160px] px-[24px] sm:px-[0]'>
                    <h2 className=" sebstiion text-[25px] sm:text-[30px] md:text-[35px] lg:text-[42px] xl:text-[53px] 2xl:text-[62px]">Capital is a commodity. Experience is not.</h2>
                    <p className='kalarna text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] pt-[24px] lg:pt-[32px]'>Atomico is a different sort of venture capital firm. The way we operate is not typical. But it is carefully designed to help the most gamechanging entrepreneurs build technology to rewire the world, better.</p>
                    <button className='flex justify-center items-center gap-[8px] sm:gap-[12px] readmore text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] mt-[27px] md:mt-[39px] xl:mt-[64px]'>Why Atomico is different<Image className="" src={image12} alt='' /></button>
                    <div className='flex items-center gap-2 sm:gap-4 mt-[40px] sm:mt-[50px] md:mt-[60px] lg:mt-[77px] xl:mt-[87px] 2xl:mt-[97px]'>
                        <a className='arrorback'>
                        <Image className="rotate-[180deg]" src={image12} alt='' />
                        </a>
                        <a className="arrorback">
                        <Image  src={image12} alt='' />
                        </a>
                    </div>
                    </div>
                    <div className='flex-1'>
                        <div className='flex justify-start items-center'>
                        <Image className='relative z-[1]' src={image15} alt=''/>
                        <Image className='xl:ml-[-250px] relative z-0' src={image16} alt=''/>
                        </div>
                    </div>
                </div>
            </div>
            <Image className='w-fit absolute top-0 right-0 z-[-1]' src={image14} alt='' />
        </div>
    );
};

export default Page2;