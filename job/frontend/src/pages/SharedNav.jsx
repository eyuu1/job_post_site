import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Nav";
import Footer from "../components/Footer"

const SharedNav = () => {
    const location = useLocation();
    const { pathname } = location;

    const routesToHideHeaderFooter = ["/login", "/signup", "/admindashboard"];
    const shouldHideHeaderFooter = routesToHideHeaderFooter.includes(pathname);
    return (
        <>
            {!shouldHideHeaderFooter && <Navbar />}
            <Outlet />
            {!shouldHideHeaderFooter && <Footer />}
        </>
    );
}

export default SharedNav;