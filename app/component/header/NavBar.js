"use client";


import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { VscChromeClose } from "react-icons/vsc";
import Image from 'next/image';
import { LiaBarsSolid } from "react-icons/lia";
import image from '../image/image1.png';
import image3 from '../image/image3.png';
import image4 from '../image/image4.png';

const NavBar = () => {
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null); 
    const menuButtonRef = useRef(null);

    const handleClickOutside = (event) => {
        // Close menu if clicked outside of menu and toggle button
        if (
            menuRef.current &&
            !menuRef.current.contains(event.target) &&
            (!menuButtonRef.current || !menuButtonRef.current.contains(event.target))
        ) {
            setToggle(false);
        }
    };

    useEffect(() => {
        // Add event listener for clicks outside the component
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className='fatchanimactionnavaction'>
            <header className='  mx-auto flex justify-between items-center py-[20px] sm:py-[35px] relative rounded-[80px] px-[24px] sm:px-[50px]'>
                <div className='sm:hidden relative top-[-11px]'>
                    
                    <div 
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-100' : 'opacity-0 -translate-x-2'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <VscChromeClose className='text-white text-[26px] absolute' />
                    </div>
                    <div ref={menuButtonRef}
                        className={`transition-transform duration-300 ease-in-out ${toggle ? 'opacity-0 translate-x-2' : 'opacity-100'}`}
                        onClick={() => setToggle(!toggle)}
                    >
                        <LiaBarsSolid className='text-white text-[26px] absolute' />
                    </div>
                </div>
                <h1 className='Froggo-Logo w-[65px] sm:w-[70px] md:w-[75px] lg:w-[80px] xl:w-[85px] 2xl:w-[87px]'><Image src={image} alt=''/></h1>
                <nav ref={menuRef} className={`navbar-items-main flex-col sm:flex-row flex justify-start sm:justify-center items-start sm:items-center absolute sm:top-0 top-[100%] sm:right-0 sm:relative duration-1000 z-50 sm:opacity-100 gap-[20px] md:gap-[26px] lg:gap-[28px] xl:gap-[30px] 2xl:gap-[32px] sm:bg-transparent bg-[#00000069] sm:p-0 p-[20px]
                    ${toggle ? 'right-[10]' :'right-[130%]' }
                    ${toggle ? 'opacity-100' : 'opacity-10'} 
                    `} >
                    <Link className={`Link-manu-bar text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[18px]`} href="#about">Our Approach</Link>
                    <Link className='Link-manu-bar text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[18px]' href="#tokenomics">Partnerships</Link>
                    <Link className='Link-manu-bar text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[18px]' href="#howtobuy">Team</Link>
                    <Link className='Link-manu-bar text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[18px]' href="#howtobuy">Insights</Link>
                <div>
                <div className="flex justify-center items-center gap-[20px] md:gap-[26px] lg:gap-[28px] xl:gap-[30px] 2xl:gap-[32px] sm:ml-[20] md:ml-[26px] lg:ml-[28px] xl:ml-[30px] 2xl:ml-[32px]">
                    <Link className='Link-manu-bar text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px]' href="#howtobuy"><Image src={image3} alt=""/></Link>
                    <Link className='Link-manu-bar text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] hidden sm:block' href="#howtobuy"><Image src={image4} alt=""/></Link>
                </div>
                </div>
                </nav>
                
            </header>
        </div>
    );
};

export default NavBar;