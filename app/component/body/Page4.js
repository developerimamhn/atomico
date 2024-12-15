import React from 'react';
import image12 from '../image/image12.svg';
import image23 from '../image/image23.png';
import image24 from '../image/image24.png';
import image25 from '../image/image25.png';
import image26 from '../image/image26.png';
import image27 from '../image/image27.png';
import image28 from '../image/image28.png';
import image29 from '../image/image29.png';
import image30 from '../image/image30.png';
import image31 from '../image/image31.png';
import image32 from '../image/image32.png';
import Image from 'next/image'

const Page4 = () => {
    return (
        <div className='bg-[#012B38] relative z-[-2]'>
            <Image className="absolute top-0 left-[50%] translate-x-[-50%] pointer-events-none sm:block hidden" src={image24} alt=''/>
            <Image className='absolute bottom-[12%] left-[50%] translate-x-[-50%] z-[-1] pointer-events-none sm:block hidden' src={image25} alt=''/>
            <div className='container mx-auto py-[70px] sm:py-[100px] md:py-[130px] lg:py-[150px] xl:py-[170px] 2xl:py-[200px] sm:px-[0] px-[24px]'>
                <div className='flex justify-between items-start sm:flex-row flex-col'>
                    <div className=''>
                        <h2 className=" sebstiion text-[25px] sm:text-[30px] md:text-[35px] lg:text-[42px] xl:text-[53px] 2xl:text-[62px] !text-[#fff]">Our Hero's</h2>
                        <p className='kalarnatext-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] pt-[24px] lg:pt-[32px] !text-[#fff] opacity-80'>We’re a tight-knit, collaborative bunch, each with our own unique take on the world. <br/> When we partner, we do so wholeheartedly and as a team. You can depend on all of <br/> us to bring our expertise when you need us.</p>
                    </div>
                    <div className=''>
                        <button className='flex justify-center items-center gap-[8px] sm:gap-[12px] readmore text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] !text-[#fff]'>Why Atomico is different<Image className="invert" src={image12} alt='' /></button>
                    </div>
                </div>
                <div className='flex-col sm:flex-row flex gap-[12px] 2xl:gap-[15.5px] mt-[40px] lg:mt-[60px] xl:mt-[80px] 2xl:mt-[100px]'>
                    <div className='flex gap-[12px] 2xl:gap-[15.5px]'>
                    <div className='flex flex-col gap-[12px] 2xl:gap-[15.5px] sm:mt-[47px]'>
                        <div className='p-[8px] bg-[#ffffff14] pb-0'>
                            <Image src={image23} alt=""/>
                            <h2 className=" sebstiion text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[23.682px] !text-[#FFF] text-center py-[16px] lg:py-[18px] xl:py-[20px] 2xl:py-[23.682px]">Jenny Wilson</h2>
                        </div>
                        <div className='p-[8px] bg-[#ffffff14] pb-0'>
                            <Image src={image29} alt=""/>
                            <h2 className=" sebstiion text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[23.682px] !text-[#FFF] text-center py-[16px] lg:py-[18px] xl:py-[20px] 2xl:py-[23.682px]">Kristin Watson</h2>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[12px] 2xl:gap-[15.5px]'>
                        <div className='p-[8px] bg-[#ffffff14] pb-0'>
                            <Image src={image26} alt=""/>
                            <h2 className=" sebstiion text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[23.682px] !text-[#FFF] text-center py-[16px] lg:py-[18px] xl:py-[20px] 2xl:py-[23.682px]">Bessie Cooper</h2>
                        </div>
                        <div className='p-[8px] bg-[#ffffff14] pb-0'>
                            <Image src={image30} alt=""/>
                            <h2 className=" sebstiion text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[23.682px] !text-[#FFF] text-center py-[16px] lg:py-[18px] xl:py-[20px] 2xl:py-[23.682px]">Jenny Wilson</h2>
                        </div>
                    </div>
                    </div>
                    <div className='flex gap-[12px] 2xl:gap-[15.5px]'>
                    <div className='flex flex-col gap-[12px] 2xl:gap-[15.5px] sm:mt-[47px]'>
                        <div className='p-[8px] bg-[#ffffff14] pb-0'>
                            <Image src={image27} alt=""/>
                            <h2 className=" sebstiion text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[23.682px] !text-[#FFF] text-center py-[16px] lg:py-[18px] xl:py-[20px] 2xl:py-[23.682px]">Wade Warren</h2>
                        </div>
                        <div className='p-[8px] bg-[#ffffff14] pb-0'>
                            <Image src={image31} alt=""/>
                            <h2 className=" sebstiion text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[23.682px] !text-[#FFF] text-center py-[16px] lg:py-[18px] xl:py-[20px] 2xl:py-[23.682px]">Wade Warren</h2>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[12px] 2xl:gap-[15.5px]'>
                        <div className='p-[8px] bg-[#ffffff14] pb-0'>
                            <Image src={image28} alt=""/>
                            <h2 className=" sebstiion text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[23.682px] !text-[#FFF] text-center py-[16px] lg:py-[18px] xl:py-[20px] 2xl:py-[23.682px]">Brooklyn Simmons</h2>
                        </div>
                        <div className='p-[8px] bg-[#ffffff14] pb-0'>
                            <Image src={image32} alt=""/>
                            <h2 className=" sebstiion text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[23.682px] !text-[#FFF] text-center py-[16px] lg:py-[18px] xl:py-[20px] 2xl:py-[23.682px]">Ralph Edwards</h2>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page4;