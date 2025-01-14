"use client"

import react, { useEffect } from 'react';



const HeroArea = () => {


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
        <div className=''>
            <div className='px-[24px] sm:px-[50px] mx-auto pt-[50px] sm:pt-[60px] md:pt-[80px] lg:pt-[110px] xl:pt-[130px] 2xl:pt-[167px]'>
                <div className="flex items-center sm:items-end  flex-col">
                    <div className='text-center sm:text-left fatchanimaction' >
                        <h1 className='partners text-[35px] sm:text-[40px] md:text-[45px] lg:text-[50px] xl:text-[55px] 2xl:text-[62px]'>Partners to <br/> Gamechangers.</h1>
                        <p className='billionParagraph text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[15px] 2xl:text-[18px] text-left mt-[16px]'>$1.24 billion for Europe’s most ambitious founders</p>
                    </div>
                </div>
                <h1 className='atomico-ccss text-[70px] sm:text-[120px] md:text-[140px] lg:text-[160px] xl:text-[180px] 2xl:text-[200px] pt-[180px] sm:pt-[200px] md:pt-[250px] lg:pt-[50px] xl:pt-[110px] 2xl:pt-[230px] sm:px-0 px-[24px] text-center sm:text-left fatchanimactionright'>ATOMICO</h1>
                
            </div>
            <div className='flex justify-end'>
                    <div className=' buttonbd w-fit'>
                    <button className='gap-[8px] sm:gap-[10px] lg:gap-[16px] flex justify-center items-center text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] duration-300 group w-[200px] sm:w-[230px] md:w-[260px] lg:w-[290px] xl:w-[320px] 2xl:w-[355px] h-[60px] sm:h-[60px] md:h-[70px] lg:h-[80px] xl:h-[90px] 2xl:h-[104px]'>Atomico’s new funds <svg xmlns="http://www.w3.org/2000/svg" width="33" height="24" viewBox="0 0 33 24" fill="none" className='group-hover:opacity-100 opacity-0 group-hover:mr-0 mr-[-30px] duration-300 w-[20px] xlw-[24px]'>
                        <rect x="9" width="24" height="24" rx="12" fill="#012B38" fill-opacity="0.07"/>
                        <path d="M23.43 5.92993L29.5 11.9999L23.43 18.0699" stroke="#012B38" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1 12L29 12" stroke="#012B38" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg></button>
                    </div>
                </div>
        </div>
    );
};

export default HeroArea;