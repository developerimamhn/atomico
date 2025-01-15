"use client";


import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { VscChromeClose } from "react-icons/vsc";
import Image from 'next/image';
import { LiaBarsSolid } from "react-icons/lia";
import image from '../image/image1.png';
import image3 from '../image/image3.png';
import image4 from '../image/image4.png';

const Dropdown = () => {
    const [toggletwo, settoggletwo] = useState(false);
    const menuReftwo = useRef(null); 
    const menuButtonReftwo = useRef(null);

    const handleClickOutsidetwo = (event) => {
        if (
            menuReftwo.current &&
            !menuReftwo.current.contains(event.target) &&
            (!menuButtonReftwo.current || !menuButtonReftwo.current.contains(event.target))
        ) {
            settoggletwo(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutsidetwo);
        return () => {
            document.removeEventListener("mousedown", handleClickOutsidetwo);
        };
    }, []);

    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <>
                <div className='hidden sm:block relative top-[-11px]'>
                    
                    <div 
                        className={`transition-transform duration-300 ease-in-out ${toggletwo ? 'opacity-100' : 'opacity-0 -translate-x-2'}`}
                        onClick={() => settoggletwo(!toggletwo)}
                    >
                        <VscChromeClose className='text-white text-[26px] absolute' />
                    </div>
                    <div ref={menuButtonReftwo}
                        className={`transition-transform duration-300 ease-in-out ${toggletwo ? 'opacity-0 translate-x-2' : 'opacity-100'}`}
                        onClick={() => settoggletwo(!toggletwo)}
                    >
                        <LiaBarsSolid className='text-white text-[26px] absolute' />
                    </div>
                </div>
                <nav ref={menuReftwo} className={`navbar-items-main flex-col flex justify-start sm:justify-center items-start sm:items-center sm:absolute top-[100%] right-0 relative duration-1000 z-50 sm:opacity-100 gap-[20px] md:gap-[26px] lg:gap-[28px] xl:gap-[30px] 2xl:gap-[32px] bg-[#00000069] p-[20px]
                    ${toggletwo ? 'sm:right-[10px]' :'sm:right-[130%]' }
                    ${toggletwo ? 'opacity-100' : 'opacity-0'} 
                    ${toggletwo ? 'block' : 'hidden'} 
                    `} >
                    <Link className={`Link-manu-bar text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[18px]`} href="#about">Our Approach</Link>
                    <Link className='Link-manu-bar text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[18px]' href="#tokenomics">Partnerships</Link>
                    <Link className='Link-manu-bar text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[18px]' href="#howtobuy">Team</Link>
                    <Link className='Link-manu-bar text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[18px]' href="#howtobuy">Insights</Link>
                <div>
                </div>
                </nav>
        </>
    );
};

export default Dropdown;