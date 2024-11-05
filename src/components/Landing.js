import Landing1Img from './images/landing-1.webp';
import Landing2Img from './images/landing-2.webp';
import Landing3Img from './images/landing-3.webp';
import Landing4Img from './images/landing-4.webp';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './css/Landing.css';

import { motion } from 'framer-motion';
import LandingImg from './images/landing.webp';
import { Link } from 'react-router-dom';
import { ComputerDesktopIcon, DocumentTextIcon } from '@heroicons/react/24/solid';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3, // Delay between each child animation
        },
    },
};

const fadeInUpVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const Landing = () => {

    
const certificatesData = [
    { id: 1, title: "Network+", img: Landing1Img },
    { id: 2, title: "Security+", img: Landing2Img },
    { id: 3, title: "Project Management", img: Landing3Img },
    { id: 4, title: "Cloud Computing", img: Landing4Img },
];

    return (
        <motion.section
            className='landing'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <div className='overlay'></div>
            <img className='background' src={LandingImg} alt='landing' />

            <div className='relative z-[1]'>
                <div className='row'>
                    <motion.div
                        className='col-lg-6 col-md-6 col-sm-12 col-12'
                        variants={fadeInUpVariants}
                    >
                        <div className='categories-slider'>
                            <div className='slider'>
                                <Swiper
                                    slidesPerView={'auto'}
                                    spaceBetween={30}
                                    centeredSlides={true}
                                    className="mySwiper"
                                    dir="rtl"
                                >
                                    {certificatesData.map((cert) => (
                                        <SwiperSlide key={cert.id}>
                                            <Link to="#">
                                                <motion.div className='cert-cat' variants={fadeInUpVariants}>
                                                    <img src={cert.img} alt={cert.title} />
                                                    <h1>{cert.title}</h1>
                                                    <h2> قدم الان ! </h2>
                                                </motion.div>
                                            </Link>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className='col-lg-6 col-md-6 col-sm-12 col-12'
                        variants={fadeInUpVariants}
                    >
                        <div className='landing-text'>
                            <motion.h1 variants={fadeInUpVariants}>
                                دليل الشهادات المهنية
                            </motion.h1>

                            <motion.input
                                type='text'
                                placeholder='ابحث عن الشهادات التي تريد'
                                variants={fadeInUpVariants}
                            />

                            <motion.div variants={fadeInUpVariants}>
                                <Link to="/certificates"> الشهادات <DocumentTextIcon className='icon' /> </Link>
                                <Link to="/courses"> الكوسات <ComputerDesktopIcon className='icon' /> </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Landing;
