import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("refer");
    useEffect(() => {
        setActiveLink("refer");
    }, []);
    return (
        <div className="md:mt-2 mt-[10px] md:mx-0 mx-5">
            <div className="bg-[#1A73E81C] rounded-3xl flex items-center md:justify-center justify-between md:px-5 px-8 xl:py-1 lg:py-[6px] py-1 mx-auto xl:w-[37%] lg:w-[40%] md:w-[60%] xl:gap-12 lg:gap-11 md:gap-16">
                <Link
                    className={`xl:py-[2px] lg:pb-[2px] xl:text-lg lg:text-base font-medium cursor-pointer hover:text-[#1A73E8] ${activeLink === "refer" ? "border-b-2 border-dotted border-[#1A73E8] text-[#1A73E8]" : "text-[#4B4B4B]"}`}
                    activeClass="active"
                    to="refer"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={() => setActiveLink("refer")}
                >
                    Refer
                </Link>
                <Link
                    className={`xl:py-[2px] lg:pb-[2px] xl:text-lg lg:text-base font-medium cursor-pointer hover:text-[#1A73E8] ${activeLink === "benefits" ? "border-b-2 border-dotted border-[#1A73E8] text-[#1A73E8]" : "text-[#4B4B4B]"}`}
                    activeClass="active"
                    to="benefits"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={() => setActiveLink("benefits")}
                >
                    Benefits
                </Link>
                <Link
                    className={`xl:py-[2px] lg:pb-[2px] xl:text-lg lg:text-base font-medium cursor-pointer hover:text-[#1A73E8] ${activeLink === "faqs" ? "border-b-2 border-dotted border-[#1A73E8] text-[#1A73E8]" : "text-[#4B4B4B]"}`}
                    activeClass="active"
                    to="faqs"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={() => setActiveLink("faqs")}
                >
                    FAQs
                </Link>
                <Link
                    className={`xl:py-[2px] lg:pb-[2px] xl:text-lg lg:text-base font-medium cursor-pointer hover:text-[#1A73E8] ${activeLink === "support" ? "border-b-2 border-dotted border-[#1A73E8] text-[#1A73E8]" : "text-[#4B4B4B]"}`}
                    activeClass="active"
                    to="support"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={() => setActiveLink("support")}
                >
                    Support
                </Link>
            </div>
        </div>
    );
};

export default Navbar;