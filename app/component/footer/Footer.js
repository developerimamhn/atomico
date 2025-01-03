import React from 'react';
import image from '../image/image1.png';
import image12 from '../image/image12.svg';
import image34 from '../image/image34.png';
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
    return (
        <div className='bg-[#05181F] relative'>
            <Image className='absolute bottom-0 left-0 w-full z-[2]' src={image34} alt=''/>
            <div className='container mx-auto relative z-10 sm:px-[0] px-[24px]'>
                <div className='flex items-center flex-col sm:flex-row py-[70px] sm:py-[100px] md:py-[130px] lg:py-[150px] xl:py-[170px] 2xl:py-[200px]'>
                    <div className='flex-1 mb-[20px] sm:mb-[0]'>
                        <h2 className=" sebstiion text-[25px] sm:text-[30px] md:text-[35px] lg:text-[42px] xl:text-[53px] 2xl:text-[62px] !text-[#FFF] text-center sm:text-left">Would you like to stay up-to-date?</h2>
                        <p className='kalarna text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] pt-[24px] lg:pt-[32px] !text-[#FFF] opacity-70 text-center sm:text-left'>You will receive occasional emails from us about news and portfolio updates. You <br className='hidden md:block'/> always have the choice to unsubscribe within every email you receive.</p>
                    </div>
                    <div className='flex-1 '>
                        <div className='xl:ml-[204px]'>
                            <input type="email" className='border-0  focus:outline-none w-full px-[20px] md:px-[18px] xl:px-[24px] py-[20px] md:py-[30px] xl:py-[40px] bg-[#ffffff0d] border-b-[1px] border-b-[#ffffff66] pleacholderss text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]' placeholder="Enter your email"/>
                            <button className='flex justify-center items-center gap-[8px] sm:gap-[12px] readmore text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] mt-[10px] md:mt-[12px] xl:mt-[16px] w-full bg-[#fff] text-[#012B38] px-[20px] md:px-[18px] xl:px-[24px] py-[20px] md:py-[30px] xl:py-[40px]'>Sing Up<Image className="" src={image12} alt='' /></button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center py-[20px] sm:py-[30px] md:py-[40px] lg:py-[60px] xl:py-[80px] 2xl:py-[100px] mt-[40px] md:mt-[50px] lg:mt-[70px] xl:mt-[90px] 2xl:mt-[114px] flex-col md:flex-row gap-5 sm:gap-0">
                    <h1 className='Froggo-Logo w-[75px] sm:w-[80px] md:w-[90px] lg:w-[115px] xl:w-[135px] 2xl:w-[158px]'><Image src={image} alt=''/></h1>
                    <div className='flex justify-center items-center gap-[12px] md:gap-[28px] lg:gap-[30px] xl:gap-[35px] 2xl:gap-[40px]'>
                        <Link className={`Link-manu-bar text-[8px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[18px]`} href="#about">Our approach</Link>
                        <Link className='Link-manu-bar text-[8px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[18px]' href="#tokenomics">Our approach Partnerships</Link>
                        <Link className='Link-manu-bar text-[8px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[18px]' href="#howtobuy">Team</Link>
                        <Link className='Link-manu-bar text-[8px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[18px]' href="#howtobuy">Insights</Link>
                        <Link className='Link-manu-bar text-[8px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[18px]' href="#howtobuy">Investor Portal</Link>
                    </div>
                    <div className='flex justify-center items-center gap-[12px] md:gap-[28px] lg:gap-[30px] xl:gap-[35px] 2xl:gap-[40px]'>
                        <Link className={`Link-manu-bar text-[8px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[18px]`} href="#about">Linkedin</Link>
                        <Link className='Link-manu-bar text-[8px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[18px]' href="#tokenomics">Twitter</Link>
                        <Link className='Link-manu-bar text-[8px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[18px] ml-[20px] md:ml-[25px] lg:ml-[30px] xl:ml-[38px] 2xl:ml-[44px]' href="#howtobuy">Privacy</Link>
                        <Link className='Link-manu-bar text-[8px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[18px]' href="#howtobuy">Legal</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;