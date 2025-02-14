import cover1 from '../../../assets/Image/LandingPage/Benefits_cover1.png';
import cover2 from '../../../assets/Image/LandingPage/Benefits_cover2.png';
import benefit1 from '../../../assets/Image/LandingPage/Benefits_benefit1.png';
import benefit2 from '../../../assets/Image/LandingPage/Benefits_benefit2.png';
import benefit3 from '../../../assets/Image/LandingPage/Benefits_benefit3.png';

const Benefits = () => {
    return (
        <div id='benefits' className='xl:px-24 lg:px-16 md:px-10 px-5 bg-[#EEF5FF] xl:py-10 lg:py-7 md:py-5 py-4 flex flex-col justify-center items-center lg:mb-0 md:mb-14 mb-12'>
            <h2 className='text-[#1A202C] font-semibold xl:text-[27px] lg:text-2xl md:text-[22px] text-xl text-center'>How Do I <span className='text-[#1A73E8]'>Refer?</span></h2>
            <div className='w-full xl:mt-12 lg:mt-10 md:mt-7 mt-5 relative'>
                <img className='w-full md:block hidden' src={cover2} alt="cover2" />
                <img className='w-full md:hidden visible' src={cover1} alt="cover1" />
                <div className='grid md:grid-cols-3 md:grid-rows-none grid-rows-3 grid-cols-none absolute inset-0'>
                    <div className='flex flex-col justify-center items-center mx-auto xl:gap-5 lg:gap-4 md:gap-3 gap-4 xl:px-20'>
                        <img className='xl:w-14 lg:w-12 md:w-10 w-12' src={benefit1} alt="benefit1" />
                        <p className='text-black xl:text-base lg:text-[15px] md:text-[13px] text-sm text-center'>Submit referrals easily via <br/>our website’s referral <br/>section.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center mx-auto xl:gap-5 lg:gap-4 md:gap-3 gap-4 xl:px-20'>
                        <img className='xl:w-14 lg:w-12 md:w-10 w-12' src={benefit2} alt="benefit2" />
                        <p className='text-black xl:text-base lg:text-[15px] md:text-[13px] text-sm text-center'>Earn rewards once your <br/>referral joins an Accredian <br/>program.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center mx-auto xl:gap-5 lg:gap-4 md:gap-3 gap-4 xl:px-20'>
                        <img className='xl:w-14 lg:w-12 md:w-10 w-12' src={benefit3} alt="benefit3" />
                        <p className='text-black xl:text-base lg:text-[15px] md:text-[13px] text-sm text-center'>Referrer receives a bonus <br/>30 days after program <br/>enrollment.</p>
                    </div>
                </div>
            </div>
            <button className='bg-[#1A73E8] xl:py-[10px] lg:py-2 py-[6px] text-white rounded-md xl:px-12 lg:px-10 md:px-8 px-6 font-medium xl:text-base lg:text-[15px] md:text-[13pxtext-sm ] md:text-[14.5px] text-[12.5px] xl:mt-10 lg:mt-7 md:mt-6 mt-5'>Refer Now</button>
        </div>
    );
};

export default Benefits;