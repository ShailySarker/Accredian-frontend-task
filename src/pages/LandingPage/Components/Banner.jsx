import banner from "../../../assets/Image/LandingPage/Banner_photo.png";
import money from "../../../assets/Image/LandingPage/Banner_money.png";
import money1 from "../../../assets/Image/LandingPage/Banner_money1.png";
import money2 from "../../../assets/Image/LandingPage/Banner_money2.png";
import money3 from "../../../assets/Image/LandingPage/Banner_money3.png";
import ReferModal from "../../../components/ReferModal";

const Banner = () => {
    return (
        <div id="refer" className="xl:mx-[70px] lg:mx-16 md:mx-10 mx-5 xl:mt-3 lg:mt-[10px] md:mt-3 mt-[6px]">
            <div className="bg-[#EEF5FF] shadow-lg shadow-[#00072B36] flex flex-row w-full xl:gap-12 lg:gap-11 rounded-2xl">
                <div className="lg:w-[45%] w-full h-full rounded-l-2xl flex lg:flex-col flex-row lg:justify-start justify-between xl:gap-8 lg:gap-5 lg:px-0 md:px-10">
                    <div className="flex flex-col justify-between">
                        <img className="rounded-l-2xl xl:w-36 lg:w-28 md:w-[105px] w-[68px] " src={money} alt="money" />
                        <img className="rounded-l-2xl lg:hidden visible md:w-[105px] w-[68px] " src={money1} alt="money1" />
                    </div>
                    <div className="xl:pl-11 lg:pl-8 flex flex-col xl:gap-12 lg:gap-8 md:gap-2 lg:items-start items-center lg:py-0 py-12">
                        <h1 className="text-[#1A202C] xl:text-[75px]/none lg:text-[65px]/none md:text-4xl text-[23.6px] font-bold">Let’s Learn <br className="lg:block hidden" />& Earn</h1>
                        <p className="text-[#1A202C] xl:text-[35.1px]/snug lg:text-[26px]/snug md:text-[19px]/snug text-[16.5px] lg:text-start text-center">Get a chance to win <br className="lg:block hidden" />
                            up-to <span className="text-[#1A73E8] font-bold xl:text-5xl lg:text-3xl md:text-2xl text-xl"><br className="lg:hidden visible" />Rs. 15,000</span></p>
                        <ReferModal />
                    </div>
                    <div className="lg:hidden visible flex flex-col justify-between">
                        <img className="rounded-l-2xl lg:hidden visible md:w-[105px] w-[68px] " src={money2} alt="money2" />
                        <img className="rounded-l-2xl lg:hidden visible md:w-[105px] w-[68px] " src={money3} alt="money3" />
                    </div>
                </div>
                <div className="lg:block hidden w-[55%] xl:h-[560px] lg:h-[430px] rounded-2xl">
                    <img className="w-full h-full rounded-2xl" src={banner} alt="banner" />
                </div>
            </div>
        </div>
    );
};

export default Banner;