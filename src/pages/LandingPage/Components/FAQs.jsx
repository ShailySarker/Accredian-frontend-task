import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
const faqs = [
    {
        id: 1,
        category: "Eligibility",
        question: "Do I need to have prior Product Management and Project Management experience to enroll in the program?",
        answer: "No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.",
    },
    {
        id: 2,
        category: "Eligibility",
        question: "What is the minimum system configuration required?",
        answer: "A computer with at least 4GB RAM, an Intel i3 processor, and a stable internet connection is recommended.",
    },
];
const FAQs = () => {
    const [toggleSelect, setToggleSelect] = useState("Eligibility");

    const handleToggle = (program) => {
        setToggleSelect(program);
    };
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div id='faqs' className='lg:block hidden xl:px-24 lg:px-16 md:px-10 px-5 xl:py-10 lg:py-7 md:py-5 lg:flex flex-col justify-center items-center lg:mb-0 md:mb-14 mb-12'>
            <h2 className='text-[#1A202C] font-semibold xl:text-[27px] lg:text-2xl md:text-[22px] text-xl text-center'>Frequently Asked <span className='text-[#1A73E8]'>Questions</span></h2>
            <div className='w-full xl:mt-12 lg:mt-10 md:mt-7 mt-5'>
                <div className="flex flex-row items-start xl:gap-10 lg:gap-8 xl:mt-3 lg:mt-2 ">
                    <div className="w-[30%] rounded-2xl flex flex-col xl:gap-5 lg:gap-4">
                        <p
                            onClick={() => handleToggle("Eligibility")}
                            className={`font-semibold xl:text-lg lg:text-base cursor-pointer text-center xl:py-6 lg:py-5 xl:px-5 lg:px-4 rounded-xl ${toggleSelect === "Eligibility" ? "text-[#1A73E8] shadow-lg shadow-[#0000002E]" : "text-[#737373]  border-2 border-[#737373] "}`}
                        >
                            Eligibility
                        </p>
                        <p
                            onClick={() => handleToggle("How to Use?")}
                            className={`font-semibold xl:text-lg lg:text-base cursor-pointer text-center xl:py-6 lg:py-5 xl:px-5 lg:px-4 rounded-xl ${toggleSelect === "How to Use?" ? "text-[#1A73E8] shadow-lg shadow-[#0000002E]" : "text-[#737373]  border-2 border-[#737373] "}`}
                        >
                            How to Use?
                        </p>
                        <p
                            onClick={() => handleToggle("Terms & Conditions")}
                            className={`font-semibold xl:text-lg lg:text-base cursor-pointer text-center xl:py-6 lg:py-5 xl:px-5 lg:px-4 rounded-xl ${toggleSelect === "Terms & Conditions" ? "text-[#1A73E8] shadow-lg shadow-[#0000002E]" : "text-[#737373]  border-2 border-[#737373] "}`}
                        >
                            Terms & Conditions
                        </p>
                    </div>
                    <div className="w-[70%] rounded-2xl">
                        <div className="">
                            {faqs?.filter((faq) => faq?.category === toggleSelect)?.length > 0 ? (
                                faqs
                                    .filter((faq) => faq?.category === toggleSelect)
                                    .map((faq, index) => (
                                        <div key={index} className="">
                                            {/* Question */}
                                            <button
                                                onClick={() => toggleFAQ(index)}
                                                className="w-full text-left flex justify-between items-center xl:py-4 lg:py-3 xl:text-lg lg:text-base font-medium"
                                            >
                                                {openIndex === index ?
                                                    <span className='text-[#1A73E8]'>{faq?.question}</span> :
                                                    <span className='text-[#000000DE]'>{faq?.question}</span>
                                                }
                                                <span>
                                                    {openIndex === index ? (
                                                        <FaAngleUp className="text-gray-500" />
                                                    ) : (
                                                        <FaAngleDown className="text-gray-500" />
                                                    )}
                                                </span>
                                            </button>

                                            {openIndex === index && (
                                                <p className="xl:pb-4 lg:pb-3 text-[#000000DE] xl:text-base lg:text-[15px]">{faq?.answer}</p>
                                            )}
                                        </div>
                                    ))
                            ) : (
                                <p className='xl:pt-24 lg:pt-20 text-center text-[#1A73E8] xl:text-lg lg:text-base font-medium'>Coming Soon....</p>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQs;