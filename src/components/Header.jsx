import { Link, NavLink } from 'react-router';
import companyLogo from '../../src/assets/Image/Shared/Header_companyLogo.png';
import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { FaXmark } from 'react-icons/fa6';

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [click, setClick] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
        setIsDropdownOpen(true);
        setClick(!click);
    };
    const closeDropdown = () => {
        setIsDropdownOpen(false);
        setMobileMenuOpen(false);
        setClick(!click);
    };

    return (
        <div className='sticky top-0 lg:shadow-none shadow-md'>
            <div className='xl:text-[17px] lg:text-base md:text-sm text-[12.5px] font-medium bg-[#1A73E826] flex flex-row items-center md:justify-center justify-between xl:gap-4 lg:gap-3 md:gap-[10px] gap-3 xl:py-4 lg:py-3 md:py-[10px] py-[6px] md:px-0 px-3'>
                <p className='text-[#262626]'>Navigate your ideal career path with tailored expert advice</p>
                <p className='text-[#1A73E8] cursor-pointer  md:font-semibold font-bold md:w-auto w-32'>Contact Expert</p>
            </div>
            <div className="xl:px-24 lg:px-16 md:px-10 px-5 xl:py-5 lg:py-[14px] md:py-4 py-4 flex justify-between">
                <div className='flex items-center xl:gap-8 lg:gap-6'>
                    <img className="xl:w-32 md:w-28 w-24" src={companyLogo} alt="companyLogo" />
                    <select className='lg:block hidden bg-[#1A73E8] xl:py-2 lg:py-[6px] text-white rounded-md px-2 w-24 cursor-pointer'>
                        <option defaultValue>Courses</option>
                        <option value="Product Management">Product Management</option>
                        <option value="Strategy & Leadership">Strategy & Leadership</option>
                        <option value="Business Management">Business Management</option>
                        <option value="Fintech">Fintech</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Digital Transformation">Digital Transformation</option>
                        <option value="Business Analytics">Business Analytics</option>
                    </select>
                </div>
                {/* large and xl device menu */}
                <div className='lg:flex items-center xl:gap-8 lg:gap-6 lg:block hidden'>
                    <p className='text-[#1A202C] font-medium xl:text-[15px] lg:text-sm md:text-sm text-[12.5px] cursor-pointer'>Refer & Earn</p>
                    <p className='text-[#1A202C] font-medium xl:text-[15px] lg:text-sm md:text-sm text-[12.5px] cursor-pointer'>Resources</p>
                    <p className='text-[#1A202C] font-medium xl:text-[15px] lg:text-sm md:text-sm text-[12.5px] cursor-pointer'>About Us</p>
                    <div className='flex xl:gap-3 lg:gap-[10px]'>
                        <Link to="https://accredian.com/login/">
                            <button className='bg-[#94A3B833] xl:py-2 lg:py-[7px] rounded-md px-4 text-[#1A202C] font-medium xl:text-[15px] lg:text-sm md:text-sm text-[12.5px]'>Login</button>
                        </Link>
                        <Link to="https://trial.accredian.com/">
                            <button className='bg-[#1A73E8] xl:py-2 lg:py-[7px] text-white rounded-md px-4 font-medium xl:text-[15px] lg:text-sm md:text-sm text-[12.5px]'>Try for free</button>
                        </Link>
                    </div>
                </div>
                {/* medium and small device menu */}
                <div className="lg:hidden visible flex items-center md:gap-3 gap-2">
                <select className='lg:hidden visible bg-[#1A73E8] md:py-[6px] py-1 text-white rounded-md px-2 w-[90px] cursor-pointer'>
                        <option defaultValue>Explore</option>
                        <option value="Product Management">Product Management</option>
                        <option value="Strategy & Leadership">Strategy & Leadership</option>
                        <option value="Business Management">Business Management</option>
                        <option value="Fintech">Fintech</option>
                        <option value="Data Science">Data Science</option>
                        <option value="Digital Transformation">Digital Transformation</option>
                        <option value="Business Analytics">Business Analytics</option>
                    </select>
                    <button className="focus:outline-none"
                        onClick={toggleMobileMenu}>
                        {click ? (<FaXmark className="text-black font-bold md:text-2xl text-xl" />) : (<HiMenuAlt3 className="text-black font-bold md:text-2xl text-xl" />)}
                    </button>
                </div>
            </div>
            {/* medium and small device menu */}
            {isMobileMenuOpen && (
                <div style={{ zIndex: 9999 }} className="z-50 lg:hidden absolute md:top-[90px] top-[70px] right-4 px-4 md:py-6 py-4 md:w-52 w-44 rounded-t-xl rounded-br-xl rounded-bl-[50px] shadow-lg border-4 border-[#A21D3C] bg-[#A21D3C] text-white">
                    <ul className="md:mb-4 mb-3 md:text-[16.7px] text-[15.6px] font-semibold">
                        <NavLink to='/' className={({ isActive }) => isActive ? "border-b-2 border-white px-[2px]" : "px-[2px]"} onClick={closeDropdown}>Home</NavLink>
                    </ul>
                    <ul className="md:mb-4 mb-3 md:text-[16.7px] text-[15.6px] font-semibold">
                        <NavLink to='/aboutUs' className={({ isActive }) => isActive ? "border-b-2 border-white px-[2px]" : "px-[2px]"} onClick={closeDropdown}>About Us</NavLink>
                    </ul>
                    <ul className="md:mb-4 mb-3 md:text-[16.7px] text-[15.6px] font-semibold">
                        <NavLink to='/services' className={({ isActive }) => isActive ? "border-b-2 border-white px-[2px]" : "px-[2px]"} onClick={closeDropdown}>Services</NavLink>
                    </ul>
                    <ul className="md:mb-4 mb-3 md:text-[16.7px] text-[15.6px] font-semibold">
                        <NavLink to='/blog' className={({ isActive }) => isActive ? "border-b-2 border-white px-[2px]" : "px-[2px]"} onClick={closeDropdown}>Blog</NavLink>
                    </ul>
                    <ul className="md:mb-4 mb-3 md:text-[16.7px] text-[15.6px] font-semibold">
                        <NavLink to='/contactUs' className={({ isActive }) => isActive ? "border-b-2 border-white px-[2px]" : "px-[2px]"} onClick={closeDropdown}>Contact Us</NavLink>
                    </ul>
                    <button className="md:mt-1 mt-[2px] md:mb-3 mb-2 bg-[#AD3853] text-[#F3EFEF] font-medium w-full md:py-2 py-[6px] rounded-[34px]">LogIn</button>
                    <button className="bg-[#AD3853] text-[#F3EFEF] font-medium w-full md:py-2 py-[6px] rounded-[34px]">SignUp</button>
                </div>
            )}
        </div>
    );
};

export default Header;