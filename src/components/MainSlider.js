//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import required modules
import { Pagination } from 'swiper';

//components

import '../slider.css';

import CameraImg from '../img/camera.png';

const slideData = [
    {
        img: CameraImg,
        pretitle: 'Special offer',
        titlePart1: 'Save 20%',
        titlePart2: 'On your',
        titlePart3: 'First oder',
        btnText: 'Shop now',
    },
    {
        img: CameraImg,
        pretitle: 'Special offer',
        titlePart1: 'Save 20%',
        titlePart2: 'On your',
        titlePart3: 'First oder',
        btnText: 'Shop now',
    },
    {
        img: CameraImg,
        pretitle: 'Special offer',
        titlePart1: 'Save 20%',
        titlePart2: 'On your',
        titlePart3: 'First oder',
        btnText: 'Shop now',
    },
];

const MainSlider = () => {
    return (
        <Swiper
            modules={[Pagination]}
            loop={true}
            pagination={{
                clickable: true,
            }}
            className="mainSlider mx-auto h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl"
        >
            <>
                {slideData.map((slide, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="flex flex-col lg:flex-row h-full p-[20px] md:p-[60px]">
                                <div className="w-full lg:flex-1">
                                    <div className="uppercase text-center lg:text-left mb-1">{slide.pretitle}</div>
                                    <div className="text-3xl md:text-[46px] font-semibold uppercase leading-none text-center lg:text-left mb-8 xl:mb-20">
                                        {slide.titlePart1} <br /> {slide.titlePart2}
                                        <br /> {slide.titlePart3}
                                    </div>
                                    <button className="btn bg-accent mx-auto lg:mx-0">{slide.btnText}</button>
                                </div>
                                <div className="flex-1">
                                    <img className="xl:absolute  xl:-right-16 xl:-bottom-16" src={slide.img} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </>
        </Swiper>
    );
};

export default MainSlider;
