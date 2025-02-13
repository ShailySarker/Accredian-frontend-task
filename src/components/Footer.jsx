import companyLogo from '../../src/assets/Image/Shared/Footer_companyLogo.png';
import logo1 from '../../src/assets/Image/Shared/Footer_logo1.png';
import logo2 from '../../src/assets/Image/Shared/Footer_logo2.png';
import logo3 from '../../src/assets/Image/Shared/Footer_logo3.png';
import logo4 from '../../src/assets/Image/Shared/Footer_logo4.png';
import logo5 from '../../src/assets/Image/Shared/Footer_logo5.png';
import link from '../../src/assets/Image/Shared/Footer_link.png';
import { Link } from 'react-router';
import { FaPlus } from 'react-icons/fa6';
import moment from 'moment';

const Footer = () => {
    return (
        <div className='bg-[#282828] text-white lg:block hidden'>
            <div className='xl:px-24 lg:px-16 md:px-10 px-5 flex justify-between items-center xl:py-10 lg:py-7 border-b-2'>
                <img className="xl:w-36 md:w-32 w-24" src={companyLogo} alt="companyLogo" />
                <div className='flex flex-col items-center xl:gap-1'>
                    <Link to="https://home.accredian.com/Roboto/Medium 14">
                        <button className='bg-[#007BFF] border-[1px] border-white xl:py-2 lg:py-[7px] rounded-md px-10 text-[#FFFFFF] font-medium xl:text-[16.5px] lg:text-[15.5px] lg:text-sm md:text-sm text-[12.5px]'>Schedule 1-on-1 Call Now</button>
                    </Link>
                    <p className='xl:text-[16.5px] lg:text-[15.5px] lg:text-sm md:text-sm text-[12.5px]'>Speak with our Learning Advisor</p>
                </div>
            </div>
            <div className='xl:px-24 lg:px-16 md:px-10 px-5 flex xl:gap-14 lg:gap-12 xl:pt-10 lg:pt-8 xl:pb-6 lg:pb-4'>
                <div className='xl:w-[35%] lg:w-[32%]'>
                    <h4 className='xl:text-xl lg:text-lg'>Programs</h4>
                    <div className='xl:mt-3 lg:mt-2 flex flex-col xl:gap-4 lg:gap-3'>
                        <div className='flex justify-between items-center'>
                            <p className='xl:text-[16.5px] lg:text-[15.5px] font-semibold'>Data Science & AI</p>
                            <FaPlus className='xl:text-xl text-lg cursor-pointer' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='xl:text-[16.5px] lg:text-[15.5px] font-semibold'>Product Management</p>
                            <FaPlus className='xl:text-xl text-lg cursor-pointer' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='xl:text-[16.5px] lg:text-[15.5px] font-semibold'>Business Analytics</p>
                            <FaPlus className='xl:text-xl text-lg cursor-pointer' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='xl:text-[16.5px] lg:text-[15.5px] font-semibold'>Digital Transformation</p>
                            <FaPlus className='xl:text-xl text-lg cursor-pointer' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='xl:text-[16.5px] lg:text-[15.5px] font-semibold'>Business Management</p>
                            <FaPlus className='xl:text-xl text-lg cursor-pointer' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='xl:text-[16.5px] lg:text-[15.5px] font-semibold'>Project Management</p>
                            <FaPlus className='xl:text-xl text-lg cursor-pointer' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='xl:text-[16.5px] lg:text-[15.5px] font-semibold'>Strategy & Leadership</p>
                            <FaPlus className='xl:text-xl text-lg cursor-pointer' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='xl:text-[16.5px] lg:text-[15.5px] font-semibold'>Senior Management</p>
                            <FaPlus className='xl:text-xl text-lg cursor-pointer' />
                        </div>
                        <div className='flex justify-between items-center'>
                            <p className='xl:text-[16.5px] lg:text-[15.5px] font-semibold'>Fintech</p>
                            <FaPlus className='xl:text-xl text-lg cursor-pointer' />
                        </div>
                    </div>
                </div>
                <div className='xl:w-[45%] lg:w-[48%]'>
                    <h4 className='xl:text-xl lg:text-lg'>Contact Us</h4>
                    <div className='xl:mt-3 lg:mt-2 flex flex-col xl:gap-[5px] lg:gap-1'>
                        <Link to="mailTo:admissions@accredian.com">
                            <p className='xl:text-[14.7px] lg:text-sm'>Email us (For Data Science Queries): admissions@accredian.com</p>
                        </Link>
                        <p className='xl:text-[14.7px] lg:text-sm'>Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)</p>
                        <p className='xl:text-[14.7px] lg:text-sm'>Product Management Admission Helpline:+91 9625811095</p>
                        <p className='xl:text-[14.7px] lg:text-sm'>Enrolled Student Helpline: +91 7969322507</p>
                        <p className='xl:text-[14.7px] lg:text-sm'>Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</p>
                        <Link to="https://accredian.com/whyaccredian">
                            <p className='xl:text-xl lg:text-lg'>Why Accredian</p>
                        </Link>
                        <p className='xl:text-xl lg:text-lg'>Follow Us</p>
                        <div className='xl:mt-3 lg:mt-2 flex xl:gap-4 lg:gap-[14px]'>
                            <Link to="https://www.facebook.com/insaidlearn">
                                <img src={logo1} alt="logo1" />
                            </Link>
                            <Link to="https://www.linkedin.com/school/insaid/">
                                <img src={logo2} alt="logo2" />
                            </Link>
                            <Link to="https://twitter.com/insaidlearn">
                                <img src={logo3} alt="logo3" />
                            </Link>
                            <Link to="https://www.instagram.com/insaid.learn/">
                                <img src={logo4} alt="logo4" />
                            </Link>
                            <Link to="https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA">
                                <img src={logo5} alt="logo5" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='xl:w-[20%] lg:w-[20%]'>
                    <h4 className='xl:text-xl lg:text-lg'>Accredian</h4>
                    <div className='xl:mt-3 lg:mt-2 flex flex-col xl:gap-2 lg:gap-[6px]'>
                        <Link to="https://accredian.com/About">
                            <p className='xl:text-[15px] lg:text-[14.9px]'>About</p>
                        </Link>
                        <Link to="https://accredian.com/Career">
                            <p className='xl:text-[15px] lg:text-[14.9px]'>Career</p>
                        </Link>
                        <Link to="https://blog.accredian.com/">
                            <p className='xl:text-[15px] lg:text-[14.9px]'>Blog</p>
                        </Link>
                        <Link to="https://home.accredian.com/policies/accredian-policy">
                            <p className='xl:text-[15px] lg:text-[14.9px]'>Admission Policy</p>
                        </Link>
                        <Link to="https://home.accredian.com/terms/referral">
                            <p className='xl:text-[15px] lg:text-[14.9px]'>Referral Policy</p>
                        </Link>
                        <Link to="https://home.accredian.com/terms/privacy">
                            <p className='xl:text-[15px] lg:text-[14.9px]'>Privacy Policy</p>
                        </Link>
                        <Link to="https://home.accredian.com/terms">
                            <p className='xl:text-[15px] lg:text-[14.9px]'>Terms Of Service</p>
                        </Link>
                        <Link to="https://home.accredian.com/Faq">
                            <p className='xl:text-[15px] lg:text-[14.9px]'>Master FAQs</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='xl:pt-2 lg:pt-2 justify-center items-center xl:pb-16 lg:pb-12 flex'>
                <div className='w-[10%]'></div>
                <p className='w-[80%] text-center xl:text-[14px] '>© <span>{moment().format('YYYY')}</span> Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
                <div className='w-[10%] flex justify-end xl:pr-8 lg:pr-5'>
                    <img className='xl:w-12 lg:w-11' src={link} alt="link" />
                </div>
            </div>

        </div>
    );
};

export default Footer;