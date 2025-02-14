import Banner from "./Components/Banner";
import Benefits from "./Components/Benefits";

const LandingPage = () => {
    return (
        <div className=" ">
            {/* xl:px-24 lg:px-16 md:px-10 px-5 */}
            <Banner />
            <Benefits />
        </div>
    );
};

export default LandingPage;