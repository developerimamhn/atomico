"use client";

import React , { useEffect } from 'react';
import Image from 'next/image';
import image17 from '../image/image17.png';
import image18 from '../image/image18.png';
import image19 from '../image/image19.png';
import image20 from '../image/image20.png';
import image21 from '../image/image21.png';
import image22 from '../image/image22.png';



const Page3 = () => {

    useEffect(() => {
        const handleScroll = () => {
          const features = document.querySelectorAll('.feature');
          const windowHeight = window.innerHeight;
    
          features.forEach((feature) => {
            const featurePosition = feature.getBoundingClientRect().top;
    
            if (featurePosition < windowHeight - 100) {
              feature.classList.add('visible');
            }
          });
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    return (
        <div className='bg-[#F2F4F4]'>
            <div className='px-[24px] sm:px-[50px] mx-auto py-[70px] sm:py-[100px] md:py-[130px] lg:py-[150px] xl:py-[170px] 2xl:py-[200px]'>
                <div className='flex flex-col justify-center items-center px-[24px] sm:px-0 feature'>
                    <h2 className=" sebstiion text-[25px] sm:text-[30px] md:text-[35px] lg:text-[42px] xl:text-[53px] 2xl:text-[62px] text-[#05181F]">Our Areas of Focus</h2>
                    <p className='kalarna text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] pt-[24px] lg:pt-[32px] !text-[#05181fcc] !text-center pb-[30px] md:pb-[40px] lg:pb-[60px] xl:pb-[80px] 2xl:pb-[100px]'>Our overarching thesis is that technology will transform all sectors of our world <br/> and that the biggest transformations are yet to come. Every few years there are <br/> new frontiers opening for innovation. </p>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-[1px] bg-[#E9E9E9] '>
                    <div className="bg-[#fff] p-[24px] sm:p-[20px] md:p-[25px] lg:p-[30px] xl:p-[35px] 2xl:p-[40px] feature">
                        <Image src={image17} alt=''/>
                        <h2 className=" sebstiion text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] text-[#05181F] mt-[25px] sm:mt-[30px] lg:mt-[52px]">Digital Work</h2>
                        <p className='kalarna text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[16px] lg:pt-[16px] !text-[#05181fcc] opacity-60'>The digital transformation of every industry on the planet is already well under way. </p>
                    </div>
                    <div className="bg-[#fff] p-[24px] sm:p-[20px] md:p-[25px] lg:p-[30px] xl:p-[35px] 2xl:p-[40px] feature">
                        <Image src={image18} alt=''/>
                        <h2 className=" sebstiion text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] text-[#05181F] mt-[25px] sm:mt-[30px] lg:mt-[52px]">Enterprise Al & Automation</h2>
                        <p className='kalarna text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[16px] lg:pt-[16px] !text-[#05181fcc] opacity-60'>The digital transformation of every industry on the planet is already well under way. </p>
                    </div>
                    <div className="bg-[#fff] p-[24px] sm:p-[20px] md:p-[25px] lg:p-[30px] xl:p-[35px] 2xl:p-[40px] feature">
                        <Image src={image19} alt=''/>
                        <h2 className=" sebstiion text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] text-[#05181F] mt-[25px] sm:mt-[30px] lg:mt-[52px]">Internet Infrastructure & Security</h2>
                        <p className='kalarna text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[16px] lg:pt-[16px] !text-[#05181fcc] opacity-60'>The digital transformation of every industry on the planet is already well under way. </p>
                    </div>
                    <div className="bg-[#fff] p-[24px] sm:p-[20px] md:p-[25px] lg:p-[30px] xl:p-[35px] 2xl:p-[40px] feature">
                        <Image src={image20} alt=''/>
                        <h2 className=" sebstiion text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] text-[#05181F] mt-[25px] sm:mt-[30px] lg:mt-[52px]">Future Finance</h2>
                        <p className='kalarna text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[16px] lg:pt-[16px] !text-[#05181fcc] opacity-60'>The digital transformation of every industry on the planet is already well under way. </p>
                    </div>
                    <div className="bg-[#fff] p-[24px] sm:p-[20px] md:p-[25px] lg:p-[30px] xl:p-[35px] 2xl:p-[40px] feature">
                        <Image src={image21} alt=''/>
                        <h2 className=" sebstiion text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] text-[#05181F] mt-[25px] sm:mt-[30px] lg:mt-[52px]">Mobility</h2>
                        <p className='kalarna text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[16px] lg:pt-[16px] !text-[#05181fcc] opacity-60'>The digital transformation of every industry on the planet is already well under way. </p>
                    </div>
                    <div className="bg-[#fff] p-[24px] sm:p-[20px] md:p-[25px] lg:p-[30px] xl:p-[35px] 2xl:p-[40px] feature">
                        <Image src={image22} alt=''/>
                        <h2 className=" sebstiion text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] text-[#05181F] mt-[25px] sm:mt-[30px] lg:mt-[52px]">Industrial Automation</h2>
                        <p className='kalarna text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] pt-[16px] lg:pt-[16px] !text-[#05181fcc] opacity-60'>The digital transformation of every industry on the planet is already well under way. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page3;