"use client";



import Image from 'next/image';
import React, {useState, useEffect} from 'react';
import image12 from '../image/image12.svg';
import image1 from '../image/image33.png';
import image2 from '../image/image40.png';
import image3 from '../image/image39.png';
import image4 from '../image/image41.png';
import image5 from '../image/image38.png';
import image6 from '../image/image35.png';
import image7 from '../image/image36.png';
import image8 from '../image/image37.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const Page5 = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);


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
        <div>
            <div className='container px-[24px] sm:px-0 mx-auto py-[70px] sm:py-[100px] md:py-[130px] lg:py-[150px] xl:py-[170px] 2xl:py-[200px]'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-[50px] md:gap-[0]'>
                    <div className=' relative w-full feature'>
                        <div className='flex flex-col'>
                            <h2 className=" sebstiion text-[25px] sm:text-[30px] md:text-[35px] lg:text-[42px] xl:text-[53px] 2xl:text-[62px] text-[#05181F]">What we’re thinking about.</h2>
                            <p className='kalarna text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] pt-[24px] lg:pt-[32px] !text-[#05181fcc]'>For our take on investment themes, industries and the <br/> latest news os the gamecdangers we've partnered with.</p>
                            <button className='flex justify-start items-srart gap-[8px] sm:gap-[12px] readmore text-[15px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] mt-[20px] md:mt-[30px] xl:mt-[40px]'>Why Atomico is different<Image className="" src={image12} alt='' /></button>
                        </div>
                        <div className='hidden md:flex items-center gap-2 sm:gap-4 sm:mt-[0] mt-[20px] sm:absolute bottom-[-70px] lg:bottom-0'>
                            <a className='arrorback custom-prev'>
                                <Image className="rotate-[180deg] w-[20px] lg:w-fit" src={image12} alt='' />
                            </a>
                            <a className="arrorback custom-next">
                                <Image className='w-[20px] lg:w-fit'  src={image12} alt='' />
                            </a>
                        </div>    
                    </div>
                    <div className="">
                    <div className="flex feature">
                    <Swiper
                        spaceBetween={10}
                        navigation={{
                            nextEl: '.custom-next',
                            prevEl: '.custom-prev',
                          }}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        loop={true}
                        className="mySwiper2"
                    >
                        {[image1, image2, image3, image4].map((img, index) => (
                        <SwiperSlide key={index}>
                        <Image
                            className="w-full"
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            />
                        </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='ml-[10px] lg:ml-[16px]'>
                    <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={16}
                    slidesPerView={3}
                    direction='vertical'
                    freeMode={true}
                    loop={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper h-[150px] sm:h-[180px] md:h-[205px] lg:h-[292px] xl:h-[382px] 2xl:h-[445px] 3xl:h-[464px] !w-[70px] xl:!w-[90px] 2xl:!w-[132px] 3xl:!w-[175px] "
                    breakpoints={{
                        // For smaller screens
                        320: {
                          spaceBetween: 8, // Reduced spacing
                          slidesPerView: 2, // Fewer slides visible
                        },
                        // For medium screens
                        768: {
                          spaceBetween: 10,
                          slidesPerView: 2,
                        },
                        // For larger screens
                        1024: {
                          spaceBetween: 16, // Default spacing
                          slidesPerView: 3, // More slides visible
                        },
                    }}
                >
                    {[image5, image6, image7, image8].map((img, index) => (
                        <SwiperSlide key={index}>
                        <Image
                            className="!w-full h-full object-cover"
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            />
                        </SwiperSlide>
                        ))}
                </Swiper>
                <div className='sm:hidden flex items-center gap-2 sm:gap-4 sm:mt-[0] mt-[20px] '>
                            <a className='arrorback custom-prev'>
                                <Image className="rotate-[180deg] w-[20px] lg:w-fit" src={image12} alt='' />
                            </a>
                            <a className="arrorback custom-next">
                                <Image className='w-[20px] lg:w-fit'  src={image12} alt='' />
                            </a>
                        </div> 
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page5;       