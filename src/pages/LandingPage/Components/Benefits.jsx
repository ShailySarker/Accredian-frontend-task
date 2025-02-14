import { useState } from "react";
import { BiRupee } from "react-icons/bi";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import programLogo from "../../../assets/Image/LandingPage/Benefits_program.png";

const programData = [
    {
        id: 1,
        programCategory: "Product Management",
        referrerBonus: "7,000",
        refereeBonus: "9,000",
        programTitle: "Professional Certificate Program in Product Management",
    },
    {
        id: 2,
        programCategory: "Strategy & Leadership",
        referrerBonus: "9,000",
        refereeBonus: "11,000",
        programTitle: "Professional Certificate Program in Strategy & Leadership",
    },
    {
        id: 3,
        programCategory: "Business Management",
        referrerBonus: "10,000",
        refereeBonus: "10,000",
        programTitle: "Professional Certificate Program in Business Management",
    },
    {
        id: 4,
        programCategory: "Fintech",
        referrerBonus: "10,000",
        refereeBonus: "10,000",
        programTitle: "Professional Certificate Fintech",
    },
    {
        id: 5,
        programCategory: "Senior Management",
        referrerBonus: "10,000",
        refereeBonus: "10,000",
        programTitle: "Professional Certificate Senior Management",
    },
    {
        id: 6,
        programCategory: "Data Science",
        referrerBonus: "10,000",
        refereeBonus: "10,000",
        programTitle: "Professional Certificate Data Science",
    },
    {
        id: 7,
        pro10ramCategory: "Digital Transformation",
        referrerBonus: "10,000",
        refereeBonus: "10,000",
        programTitle: "Professional Certificate Digital Transformation",
    },
    {
        id: 8,
        programCategory: "Business Analytics",
        referrerBonus: "10,000",
        refereeBonus: "10,000",
        programTitle: "Professional Certificate Business Analytics",
    },
    {
        id: 9,
        programCategory: "Product Management",
        referrerBonus: "10,000",
        refereeBonus: "10,000",
        programTitle: "PG Certificate Program in Strategic Product Management",
    },
    {
        id: 10,
        programCategory: "Product Management",
        referrerBonus: "7,000",
        refereeBonus: "9,000",
        programTitle: "Executive Program in Data Driven Product Management",
    },
    {
        id: 11,
        programCategory: "Product Management",
        referrerBonus: "7,000",
        refereeBonus: "9,000",
        programTitle: "Executive Program in Product Management and Digital Transformation",
    },
    {
        id: 12,
        programCategory: "Product Management",
        referrerBonus: "7,000",
        refereeBonus: "9,000",
        programTitle: "Executive Program in Product Management",
    },
    {
        id: 13,
        programCategory: "Product Management",
        referrerBonus: "7,000",
        refereeBonus: "9,000",
        programTitle: "Advanced Certification in Product Management",
    },
    {
        id: 14,
        programCategory: "Product Management",
        referrerBonus: "7,000",
        refereeBonus: "9,000",
        programTitle: "Executive Program in Product Management and Project Management",
    },
    {
        id: 15,
        programCategory: "Product Management",
        referrerBonus: "7,000",
        refereeBonus: "9,000",
        programTitle: "Executive Program in Product Management with Project Management and Digital Transformation ",
    },
    {
        id: 16,
        programCategory: "Product Management",
        referrerBonus: "7,000",
        refereeBonus: "9,000",
        programTitle: "Advance Program in Product Management with Project Management and Digital Transformation ",
    },
    {
        id: 17,
        programCategory: "Product Management",
        referrerBonus: "7,000",
        refereeBonus: "9,000",
        programTitle: "All in one Program in Product Management with Project Management and Digital Transformation ",
    },
    {
        id: 18,
        programCategory: "Strategy & Leadership",
        referrerBonus: "7,000",
        refereeBonus: "9,000",
        programTitle: "Executive Program in Strategy & Leadership",
    },
    {
        id: 19,
        programCategory: "Business Management",
        referrerBonus: "7,000",
        refereeBonus: "9,000",
        programTitle: "Executive Program in Business Management",
    },
    {
        id: 20,
        programCategory: "Business Management",
        referrerBonus: "7,000",
        refereeBonus: "9,000",
        programTitle: "Advance Certificate Program in Business Management",
    },
    {
        id: 21,
        programCategory: "Fintech",
        referrerBonus: "7,000",
        refereeBonus: "9,000",
        programTitle: "Executive Program in Fintech",
    },
    {
        id: 22,
        programCategory: "Fintech",
        referrerBonus: "7,000",
        refereeBonus: "9,000",
        programTitle: "Advance Certificate Program in Fintech",
    },
    {
        id: 23,
        programCategory: "Senior Management",
        referrerBonus: "7,000",
        refereeBonus: "9,000",
        programTitle: "Executive Program in Senior Management",
    },
    {
        id: 24,
        programCategory: "Senior Management",
        referrerBonus: "7,000",
        refereeBonus: "9,000",
        programTitle: "Advance Certificate Program in Senior Management",
    },
    {
        id: 25,
        programCategory: "Data Science",
        referrerBonus: "7,000",
        refereeBonus: "9,000",
        programTitle: "Executive Program in Data Science",
    },
    {
        id: 26,
        programCategory: "Data Science",
        referrerBonus: "7,000",
        refereeBonus: "9,000",
        programTitle: "Advance Certificate Program in Data Science",
    },
    {
        id: 27,
        programCategory: "Digital Transformation",
        referrerBonus: "7,000",
        refereeBonus: "9,000",
        programTitle: "Executive Program in Digital Transformation",
    },
    {
        id: 28,
        programCategory: "Digital Transformation",
        referrerBonus: "7,000",
        refereeBonus: "9,000",
        programTitle: "Advance Certificate Program in Digital Transformation",
    },
    {
        id: 29,
        programCategory: "Business Analytics",
        referrerBonus: "7,000",
        refereeBonus: "9,000",
        programTitle: "Executive Program in Business Analytics",
    },
    {
        id: 30,
        programCategory: "Business Analytics",
        referrerBonus: "7,000",
        refereeBonus: "9,000",
        programTitle: "Advance Certificate Program in Business Analytics",
    },

];
const Benefits = () => {
    const [enrolled, setEnrolled] = useState(true);
    const [toggleSelect, setToggleSelect] = useState("all");
    const [visibleCount, setVisibleCount] = useState(7);

    const handleToggle = (program) => {
        setToggleSelect(program);
        setVisibleCount(7);
    };

    const filteredData = toggleSelect === "all"
        ? programData
        : programData?.filter((program) => program?.programCategory === toggleSelect);

    const displayedData = filteredData?.slice(0, visibleCount);

    const shouldShowButton = filteredData?.length > visibleCount;

    return (
        <div id='benefits' className='lg:block hidden xl:px-24 lg:px-16 md:px-10 px-5 xl:py-10 lg:py-7 md:py-5 lg:flex flex-col justify-center items-center lg:mb-0 md:mb-14 mb-12'>
            <h2 className='text-[#1A202C] font-semibold xl:text-[27px] lg:text-2xl md:text-[22px] text-xl text-center'>What Are The <span className='text-[#1A73E8]'>Referral Benefits?</span></h2>
            <div className='w-full xl:mt-12 lg:mt-10 md:mt-7 mt-5'>
                <div className="flex justify-end">
                    <div className="flex items-center xl:gap-3 lg:gap-[10px]">
                        <span className="text-[#3C4852] xl:text-lg font-medium">{enrolled ? "Enrolled" : "Enroll"}</span>
                        <button
                            onClick={() => setEnrolled(!enrolled)}
                            className={`relative xl:w-14 lg:w-[46px] xl:h-7 lg:h-6 flex items-center rounded-full xl:p-1 transition-all duration-300 border-2 ${enrolled ? "bg-white" : "bg-gray-400"}`}
                        >
                            <div
                                className={`xl:w-5 xl:h-5 lg:w-4 lg:h-4 rounded-full shadow-md transform transition-all duration-300 ${enrolled ? "translate-x-6 bg-[#1A73E8]" : "translate-x-0 bg-white"}`}
                            />
                        </button>
                    </div>
                </div>
                <div className="flex flex-row items-start xl:gap-6 lg:gap-5 xl:mt-3 lg:mt-2 ">
                    <div className="w-[30%] rounded-2xl shadow-lg">
                        <p
                            onClick={() => handleToggle("all")}
                            className={`uppercase font-semibold xl:text-lg lg:text-base cursor-pointer flex justify-between items-center xl:py-4 lg:py-3 xl:px-5 lg:px-4 border-b-[1px] border-[#00000069] rounded-t-2xl ${toggleSelect === "all" ? "bg-[#1A73E8] text-white" : "text-[#3C4852]"}`}
                        >
                            <span>All Programs</span>
                            <span><FaAngleRight /></span>
                        </p>
                        <p
                            onClick={() => handleToggle("Product Management")}
                            className={`uppercase font-semibold xl:text-lg lg:text-base cursor-pointer flex justify-between items-center xl:py-4 lg:py-3 xl:px-5 lg:px-4 border-b-[1px] border-[#00000069] ${toggleSelect === "Product Management" ? "bg-[#1A73E8] text-white" : "text-[#3C4852]"}`}
                        >
                            <span>Product Management</span>
                            <span><FaAngleRight /></span>
                        </p>
                        <p
                            onClick={() => handleToggle("Strategy & Leadership")}
                            className={`uppercase font-semibold xl:text-lg lg:text-base cursor-pointer flex justify-between items-center xl:py-4 lg:py-3 xl:px-5 lg:px-4 border-b-[1px] border-[#00000069] ${toggleSelect === "Strategy & Leadership" ? "bg-[#1A73E8] text-white" : "text-[#3C4852]"}`}
                        >
                            <span>Strategy & Leadership</span>
                            <span><FaAngleRight /></span>
                        </p>
                        <p
                            onClick={() => handleToggle("Business Management")}
                            className={`uppercase font-semibold xl:text-lg lg:text-base cursor-pointer flex justify-between items-center xl:py-4 lg:py-3 xl:px-5 lg:px-4 border-b-[1px] border-[#00000069] ${toggleSelect === "Business Management" ? "bg-[#1A73E8] text-white" : "text-[#3C4852]"}`}
                        >
                            <span>Business Management</span>
                            <span><FaAngleRight /></span>
                        </p>
                        <p
                            onClick={() => handleToggle("Fintech")}
                            className={`uppercase font-semibold xl:text-lg lg:text-base cursor-pointer flex justify-between items-center xl:py-4 lg:py-3 xl:px-5 lg:px-4 border-b-[1px] border-[#00000069] ${toggleSelect === "Fintech" ? "bg-[#1A73E8] text-white" : "text-[#3C4852]"}`}
                        >
                            <span>Fintech</span>
                            <span><FaAngleRight /></span>
                        </p>
                        <p
                            onClick={() => handleToggle("Senior Management")}
                            className={`uppercase font-semibold xl:text-lg lg:text-base cursor-pointer flex justify-between items-center xl:py-4 lg:py-3 xl:px-5 lg:px-4 border-b-[1px] border-[#00000069] ${toggleSelect === "Senior Management" ? "bg-[#1A73E8] text-white" : "text-[#3C4852]"}`}
                        >
                            <span>Senior Management</span>
                            <span><FaAngleRight /></span>
                        </p>
                        <p
                            onClick={() => handleToggle("Data Science")}
                            className={`uppercase font-semibold xl:text-lg lg:text-base cursor-pointer flex justify-between items-center xl:py-4 lg:py-3 xl:px-5 lg:px-4 border-b-[1px] border-[#00000069] ${toggleSelect === "Data Science" ? "bg-[#1A73E8] text-white" : "text-[#3C4852]"}`}
                        >
                            <span>Data Science</span>
                            <span><FaAngleRight /></span>
                        </p>
                        <p
                            onClick={() => handleToggle("Digital Transformation")}
                            className={`uppercase font-semibold xl:text-lg lg:text-base cursor-pointer flex justify-between items-center xl:py-4 lg:py-3 xl:px-5 lg:px-4 border-b-[1px] border-[#00000069] ${toggleSelect === "Digital Transformation" ? "bg-[#1A73E8] text-white" : "text-[#3C4852]"}`}
                        >
                            <span>Digital Transformation</span>
                            <span><FaAngleRight /></span>
                        </p>
                        <p
                            onClick={() => handleToggle("Business Analytics")}
                            className={`uppercase font-semibold xl:text-lg lg:text-base cursor-pointer flex justify-between items-center xl:py-4 lg:py-3 xl:px-5 lg:px-4 rounded-b-2xl ${toggleSelect === "Business Analytics" ? "bg-[#1A73E8] text-white" : "text-[#3C4852]"}`}
                        >
                            <span>Business Analytics</span>
                            <span><FaAngleRight /></span>
                        </p>
                    </div>
                    <div className="w-[70%] rounded-2xl">
                        <div className="overflow-x-auto min-w-full ">
                            <table className="table w-full rounded-2xl shadow-lg">
                                <thead className="min-w-full rounded-t-2xl">
                                    <tr className="rounded-t-2xl xl:text-lg text-[#1350A0] text-opacity-50 bg-[#1A73E859] flex justify-between min-w-full">
                                        <th className="font-bold xl:w-[60%] lg:w-[54%] text-left xl:pl-5 lg:pl-4 xl:py-4 lg:py-3">Programs</th>
                                        <th className="font-bold xl:w-[20%] lg:w-[23%] text-center xl:py-4 lg:py-3 ">Referrer Bonus</th>
                                        <th className="font-bold xl:w-[20%] lg:w-[23%] text-center xl:py-4 lg:py-3">Referee Bonus</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {displayedData?.map((program) => (
                                        <tr key={program?.id} className="xl:text-[19px] text-[#3C4852] bg-[#EBF3FF59] flex items-center justify-between min-w-full xl:py-[10px] lg:py-[5.5px]">
                                            <th className="xl:pl-5 lg:pl-4 xl:w-[60%] lg:w-[54%] text-left font-normal flex items-start gap-3">
                                                <img className="xl:mt-[7px] lg:mt-[6px] xl:w-auto lg:w-5" src={programLogo} alt="programLogo" />
                                                <span className="w-[80%]">{program?.programTitle}</span>
                                            </th>
                                            <th className="xl:w-[20%] lg:w-[23%] text-center font-normal flex items-center gap-[2px] justify-center">
                                                <BiRupee />{program?.referrerBonus}
                                            </th>
                                            <th className="xl:w-[20%] lg:w-[23%] text-center font-normal flex items-center gap-[2px] justify-center">
                                                <BiRupee />{program?.refereeBonus}
                                            </th>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="flex justify-end xl:mt-4 mt-3">
                                {shouldShowButton && (
                                    <button
                                        onClick={() => setVisibleCount(filteredData?.length)}
                                        className="flex items-center gap-2 xl:px-4 lg:px-3 xl:py-2 py-[6px] border-2 border-[#B6B6B6] text-[#B6B6B6] rounded-md hover:bg-blue-600 transition"
                                    >
                                        Show More
                                        <FaAngleDown />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className='bg-[#1A73E8] xl:py-[10px] lg:py-2 py-[6px] text-white rounded-md xl:px-12 lg:px-10 md:px-8 px-6 font-medium xl:text-base lg:text-[15px] md:text-[14.5px] text-[12.5px] xl:mt-10 lg:mt-7 md:mt-6 mt-5'>Refer Now</button>
        </div>
    );
};

export default Benefits;