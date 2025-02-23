import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayouts = () => {
    return (
        <>
            <Header />
            <Navbar/>
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayouts;