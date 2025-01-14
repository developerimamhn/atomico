"use client";

import React , { useEffect,useState } from 'react';
import image5 from '../image/image5.png';
import image6 from '../image/image6.png';
import image7 from '../image/image7.png';
import image8 from '../image/image8.png';
import image9 from '../image/image9.png';
import image10 from '../image/image10.png';
import image11 from '../image/image11.png';
import image12 from '../image/image12.svg';
import image13 from '../image/image13.png';
import newImage from '../image/image13.png';
import Image from 'next/image';



const Page1 = () => {

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


  const [isTranslated, setIsTranslated] = useState(false);


  const handleClick = () => {
    setIsTranslated(true);

    setTimeout(() => {
      setIsTranslated(false);
    }, 200); 
  };

    return (
        <div className=''>
            <div className='flex flex-col lg:grid grid-cols-8 overflow-hidden'>
                <div className="col-span-3">
                    <div className='flex justify-start flex-col items-start w-full border border-[#fff] divide-y divide-[#fff]'>
                        <div className='bg-[#012B38] p-[24px] lg:p-[32px] w-full relative group pointer-events-auto feature' onClick={handleClick}>
                            <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                <Image className="absolute top-0 left-0 z-10 w-fit h-full pointer-events-none" src={image5} alt='' />
                                <Image className="absolute top-0 right-0 z-10 w-[80px] sm:w-[70px] md:w-[80px] lg:w-[90px] xl:w-[100px] 2xl:w-[116px] pointer-events-none" src={image6} alt='' />
                            </div>
                            <Image className=" ml-auto pb-[60px] sm:pb-[70px] md:pb-[80px] lg:pb-[90px] xl:pb-[100px] 2xl:pb-[116px] w-[24px] lg:w-[32px]" src={image7} alt='' />
                            <Image className="" src={image8} alt='' />
                        </div>

                        <div className='bg-[#012B38] p-[24px] lg:p-[32px] w-full relative group pointer-events-auto feature' onClick={handleClick}>
                            <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                <Image className="absolute top-0 left-0 z-10 w-fit h-full pointer-events-none" src={image5} alt='' />
                                <Image className="absolute top-0 right-0 z-10 w-[80px] sm:w-[70px] md:w-[80px] lg:w-[90px] xl:w-[100px] 2xl:w-[116px] pointer-events-none" src={image6} alt='' />
                            </div>
                            <Image className=" ml-auto pb-[60px] sm:pb-[70px] md:pb-[80px] lg:pb-[90px] xl:pb-[100px] 2xl:pb-[116px] w-[24px] lg:w-[32px]" src={image7} alt='' />
                            <Image className="" src={image9} alt='' />
                        </div>
                        <div className='bg-[#012B38] p-[24px] lg:p-[32px] w-full relative group pointer-events-auto feature' onClick={handleClick}>
                            <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                <Image className="absolute top-0 left-0 z-10 w-fit h-full pointer-events-none" src={image5} alt='' />
                                <Image className="absolute top-0 right-0 z-10 w-[80px] sm:w-[70px] md:w-[80px] lg:w-[90px] xl:w-[100px] 2xl:w-[116px] pointer-events-none" src={image6} alt='' />
                            </div>
                            <Image className=" ml-auto pb-[60px] sm:pb-[70px] md:pb-[80px] lg:pb-[90px] xl:pb-[100px] 2xl:pb-[116px] w-[24px] lg:w-[32px]" src={image7} alt='' />
                            <Image className="" src={image10} alt='' />
                        </div>
                        <div className='bg-[#012B38] p-[24px] lg:p-[32px] w-full relative group pointer-events-auto feature' onClick={handleClick}>
                            <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                <Image className="absolute top-0 left-0 z-10 w-fit h-full pointer-events-none" src={image5} alt='' />
                                <Image className="absolute top-0 right-0 z-10 w-[80px] sm:w-[70px] md:w-[80px] lg:w-[90px] xl:w-[100px] 2xl:w-[116px] pointer-events-none" src={image6} alt='' />
                            </div>
                            <Image className=" ml-auto pb-[60px] sm:pb-[70px] md:pb-[80px] lg:pb-[90px] xl:pb-[100px] 2xl:pb-[116px] w-[24px] lg:w-[32px]" src={image7} alt='' />
                            <Image className="" src={image11} alt='' />
                        </div>
                    </div>
                </div>
                <div className="col-span-5 overflow-hidden h-full">
                    <div className='px-[40px] sm:px-[50px] md:px-[60px] lg:px-[70px] xl:px-[80px] 2xl:px-[90px] py-[50px] sm:py-[60px] md:py-[70px] lg:py-[80px] xl:py-[90px] 2xl:py-[99px] feature'>
                        <h2 className=" sebstiion text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px] 2xl:text-[54px]">Sebastian siemiatkowski, niklas adalberth and victor jacobsson.</h2>
                        <p className='kalarna text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] pt-[24px] lg:pt-[32px]'>Klarna makes online shopping simple by offering direct payments, pay after delivery options and installment plans in a smooth one-click purchase experience. smoooth.</p>
                        <button className='flex justify-center items-center gap-[8px] sm:gap-[12px] readmore text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] mt-[20px] md:mt-[30px] xl:mt-[41px] group'>Read Story <Image className="ml-[-50px] group-hover:ml-[0px] opacity-0 group-hover:opacity-100 duration-300 mt-[2px]" src={image12} alt='' /></button>
                    </div>
                    <div className='h-full md:relative md:top-0 feature'><Image className='w-full h-full lg:h-[600px] object-contain lg:absolute lg:top-0' src={image13} alt='' 
                    style={{
                        transform: isTranslated ? 'translatex(100%)' : 'translatex(0)', // Apply translate effect on click
                        transition: 'transform 0.3s ease-in-out', // Smooth transition for the effect
                      }}
                    /></div>
                </div>
            </div>
        </div>
    );
};

export default Page1;