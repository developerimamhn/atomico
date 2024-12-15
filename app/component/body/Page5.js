import Image from 'next/image';
import React from 'react';
import image12 from '../image/image12.svg';
import image33 from '../image/image33.png';

const Page5 = () => {
    return (
        <div>
            <div className='container px-[24px] sm:px-0 mx-auto py-[70px] sm:py-[100px] md:py-[130px] lg:py-[150px] xl:py-[170px] 2xl:py-[200px]'>
                <div className='flex flex-col md:flex-row'>
                    <div className='flex-1 relative '>
                        <div className='flex flex-col'>
                            <h2 className=" sebstiion text-[25px] sm:text-[30px] md:text-[35px] lg:text-[42px] xl:text-[53px] 2xl:text-[62px] text-[#05181F]">What we’re thinking about.</h2>
                            <p className='kalarna text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] pt-[24px] lg:pt-[32px] !text-[#05181fcc]'>For our take on investment themes, industries and the <br/> latest news on the gamechangers we've partnered with.</p>
                            <button className='flex justify-start items-srart gap-[8px] sm:gap-[12px] readmore text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] mt-[20px] md:mt-[30px] xl:mt-[40px]'>Why Atomico is different<Image className="" src={image12} alt='' /></button>
                        </div>
                        <div className='flex items-center gap-2 sm:gap-4 smmt-[0] mt-[20px] sm:absolute bottom-0'>
                            <a className='arrorback'>
                                <Image className="rotate-[180deg]" src={image12} alt='' />
                            </a>
                            <a className="arrorback">
                                <Image  src={image12} alt='' />
                            </a>
                        </div>    
                    </div>
                    <div className="flex-1">
                        <div className=''><Image src={image33} alt=''/></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page5;       