"use client"

import React, {useEffect,useState} from 'react';
import image from '../image/image1.png';
import image12 from '../image/image12.svg';
import image34 from '../image/image34.png';
import Image from 'next/image';
import Link from 'next/link';
const { TypeAnimation } = require("react-type-animation");
import validate from 'validate.js';


const Footer = () => {

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
      const [typingStatus, setTypingStatus] = useState('Initializing');


      const [email, setEmail] = useState('');
      const [errors, setErrors] = useState({});
    
      // Validation rules using Validate.js
      const constraints = {
        email: {
          presence: { allowEmpty: false, message: 'is required' },
          email: { message: 'is not valid' },
        },
      };
    
      const handleChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const validationResult = validate({ email }, constraints);
        
        if (validationResult) {
          setErrors(validationResult);
        } else {
          setErrors({});
          // You can now submit the form or handle the success case
          console.log('Form is valid, submitting...', email);
        }
      };
      const handleClick = () => {
        // Logic for Sign Up click action (optional, like form submission)
        console.log('Sign Up button clicked');
      };
    
    return (
        <div className='bg-[#05181F] relative'>
            <Image className='absolute bottom-0 left-0 w-full z-[2]' src={image34} alt=''/>
            <div className=' mx-auto relative sm:px-[50px] px-[24px]'>
                <div className='flex items-center flex-col sm:flex-row py-[70px] sm:py-[100px] md:py-[130px] lg:py-[150px] xl:py-[170px] 2xl:py-[200px] relative z-10 '>
                    <div className='flex-1 mb-[20px] sm:mb-[0] feature'>
                        <h2 className=" sebstiion text-[20px] sm:text-[30px] md:text-[35px] lg:text-[42px] xl:text-[53px] 2xl:text-[62px] !text-[#FFF] text-center sm:text-left">Would you like to stay up-to-date?</h2>
                        <p className='kalarna text-[11px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] pt-[24px] lg:pt-[32px] !text-[#FFF] opacity-70 text-center sm:text-left'>You will receive occasional emails from us about news and portfolio updates. You <br className='hidden md:block'/> always have the choice to unsubscribe within every email you receive.</p>
                    </div>
                    <div className='flex-1 '>
                        <div className='xl:ml-[204px] feature'>
                            <form onSubmit={handleSubmit}>
                            <input type="email" className='border-0  focus:outline-none w-full px-[20px] md:px-[18px] xl:px-[24px] py-[12px] md:py-[30px] xl:py-[40px] bg-[#ffffff0d] border-b-[1px] border-b-[#ffffff66] pleacholderss text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]' placeholder="Enter your email" value={email} onChange={handleChange}/>
                            {errors.email && <p className="text-red-500 text-sm">{errors.email[0]}</p>}
                            <button className='flex justify-center items-center gap-[8px] sm:gap-[12px] readmore text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] mt-[10px] md:mt-[12px] xl:mt-[16px] w-full bg-[#fff] text-[#012B38] px-[20px] md:px-[18px] xl:px-[24px] py-[10px] md:py-[30px] xl:py-[40px]' onClick={handleClick}>Sing Up<Image className="" src={image12} alt='' /></button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="w-full relative z-[1] overflow-hidden">
                    <h1 className="ATOMICOfooterthis text-[55px] sm:text-[80px] md:text-[100px] lg:text-[140px] xl:text-[150px] 2xl:text-[170px] 3xl:text-[250px] !tracking-[8px] sm:!tracking-[34px] md:!tracking-[35px] lg:!tracking-[70px] xl:!tracking-[90px] 2xl:!tracking-[100px] 3xl:mb-[80px] text-center">
                    <TypeAnimation
                    sequence={[
                        1500,
                        () => {
                        setTypingStatus('Typing...');
                        },
                        'ATOMICO',
                        () => {
                        setTypingStatus('Done Typing');
                        },
                        1000,
                        () => {
                        setTypingStatus('Deleting...');
                        },
                        'ATOMIC', 
                        () => {
                        setTypingStatus('Done Deleting');
                        },
                        '', 
                    ]}
                    speed={50}
                    cursor={false}
                    repeat={Infinity}
                    />;

                    </h1>
                </div>
                <div className="flex justify-between items-center py-[20px] sm:py-[30px] md:py-[40px] lg:py-[60px] xl:py-[80px] 2xl:py-[100px] mt-[40px] md:mt-[50px] lg:mt-[70px] xl:mt-[90px] 2xl:mt-[70px] flex-col md:flex-row gap-5 sm:gap-0 relative z-10 ">
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