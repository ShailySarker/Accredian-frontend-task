import React, { useState } from "react";

const ReferModal = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleModal = () => {
        setModalOpen(true);
    };
    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const [formData, setFormData] = useState({
        referrerName: "",
        referrerEmail: "",
        refereeName: "",
        refereeEmail: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/refer", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            console.log(result);
            alert("Referral submitted successfully!");
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred");
        }
    };

    return (
        <div>
            <button
                onClick={handleModal}
                className='bg-[#1A73E8] xl:py-[10px] lg:py-2 py-[6px] text-white rounded-md xl:px-12 lg:px-10 md:px-8 px-6 font-medium xl:text-base lg:text-[15px] md:text-[14.5px] text-[12.5px] lg:mt-0 md:mt-4 mt-5'>Refer Now</button>

            {
                modalOpen &&
                <div className="z-50 fixed inset-0 flex items-center justify-center">
                    <div className="bg-white border-2 border-[#1A73E8] rounded-2xl px-6 xl:py-5 lg:py-4 md:py-3 py-[10px] xl:w-[50%] lg:w-[55%] md:w-[65%] w-[85%]">
                        <h3 className="font-semibold text-center xl:text-2xl lg:text-xl text-lg">Refer a <span className="text-[#1A73E8]">Friend</span></h3>
                        <form onSubmit={handleSubmit} className="xl:mt-8 lg:mt-7 md:mt-6 mt-5 flex flex-col xl:gap-3 lg:gap-[10px] gap-2">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="xl:py-2 lg:py-[7px] py-[6px] px-5 w-full border-2 rounded-2xl border-gray-300"
                                value={formData?.referrerName}
                                onChange={(e) =>
                                    setFormData({ ...formData, referrerName: e?.target?.value })
                                }
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="xl:py-2 lg:py-[7px] py-[6px] px-5 w-full border-2 rounded-2xl border-gray-300"
                                value={formData?.referrerEmail}
                                onChange={(e) =>
                                    setFormData({ ...formData, referrerEmail: e?.target?.value })
                                }
                                required
                            />
                            <input
                                type="text"
                                placeholder="Friend's Name"
                                className="xl:py-2 lg:py-[7px] py-[6px] px-5 w-full border-2 rounded-2xl border-gray-300"
                                value={formData?.refereeName}
                                onChange={(e) =>
                                    setFormData({ ...formData, refereeName: e?.target?.value })
                                }
                                required
                            />
                            <input
                                type="email"
                                placeholder="Friend's Email"
                                className="xl:py-2 lg:py-[7px] py-[6px] px-5 w-full border-2 rounded-2xl border-gray-300"
                                value={formData?.refereeEmail}
                                onChange={(e) =>
                                    setFormData({ ...formData, refereeEmail: e?.target?.value })
                                }
                                required
                            />
                            <div className="xl:mt-8 lg:mt-7 md:mt-6 mt-5 flex justify-center xl:gap-5 lg:gap-4 md:gap-3 gap-2">
                                <button onClick={handleCloseModal} className="shadow-lg border-2 border-red-600 text-red-600 w-full xl:py-[10px] lg:py-2 py-[6px] rounded-2xl font-medium xl:text-base lg:text-[15px] md:text-[14.5px] text-[12.5px]">
                                    Cancel
                                </button>
                                <button type="submit" className="shadow-lg bg-[#1A73E8] text-white w-full xl:py-[10px] lg:py-2 py-[6px] rounded-2xl font-medium xl:text-base lg:text-[15px] md:text-[14.5px] text-[12.5px]">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </div>
    );
};

export default ReferModal;