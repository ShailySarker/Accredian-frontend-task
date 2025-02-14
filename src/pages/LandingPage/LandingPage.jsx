import Banner from "./Components/Banner";
import Benefits from "./Components/Benefits";
import Refer from "./Components/Refer";

const LandingPage = () => {
    return (
        <div className="flex flex-col xl:gap-16 lg:gap-12 md:gap-14 gap-8 ">
            {/* xl:px-24 lg:px-16 md:px-10 px-5 */}
            <Banner />
            <Refer />
            <Benefits />
        </div>
    );
};

export default LandingPage;