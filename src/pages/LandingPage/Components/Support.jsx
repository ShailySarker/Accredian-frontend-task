import { FaAngleRight } from 'react-icons/fa6';
import banner from '../../../assets/Image/LandingPage/Support_banner.png';
import logo from '../../../assets/Image/LandingPage/Support_logo.png';

const Support = () => {
    return (
        <div id='support' className='relative bg-[#1A73E8] lg:block hidden xl:mx-24 lg:mx-16 rounded-2xl xl:mb-28 lg:mb-20 md:mb-14 mb-12'>
            <div className='flex justify-end'>
                <img className='xl:w-auto lg:w-[52%]' src={banner} alt="banner" />
            </div>
            <div className='absolute inset-0 flex items-center justify-between xl:px-20 lg:px-12'>
                <div className='flex items-center xl:gap-5 lg:gap-4'>
                    <img src={logo} alt="logo" />
                    <div className='text-white'>
                        <h2 className='font-semibold xl:text-[28px] lg:text-2xl'>Want to delve deeper into the program?</h2>
                        <p className='text-[#F5F5F5] font-medium xl:text-[17px] lg:text-base'>Share your details to receive expert insights from our program team!</p>
                    </div>
                </div>
                <button className='text-[#3B82F6] xl:py-[10px] lg:py-2 py-[6px] rounded-md xl:px-8 lg:px-5 bg-white font-medium xl:text-lg lg:text-base flex justify-center items-center xl:gap-2 lg:gap-1'>
                    Get in touch
                    <FaAngleRight />
                </button>
            </div>
        </div>
    );
};

export default Support;