import { Outlet } from "react-router-dom";
import Navbar from "../components/Nav";
import Footer from "../components/Footer"

const SharedNav = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default SharedNav;