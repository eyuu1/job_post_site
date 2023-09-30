import { Link} from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import AllUser from "./Admin/AllUser";
import AllCompany from "./Admin/AllCompany";
import AllJob from "./Admin/AllJob";
import Dashboard from "./Admin/DashboardHome";

export default function AdminDashboard() {

    const [active, setActive] = useState("Dashboard");
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [showSidebar, setShowSidebar] = useState(true);


    const handleActive = (path) => {
        setActive(path);
    };

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            {
                isSmallScreen && (<div>
                    <div className="w-full bg-gray-800 text-white py-4">
                        <div className="flex justify-between items-center px-4">
                            <button onClick={toggleSidebar} className="text-3xl text-green-500">
                                {showSidebar ? "✕" : "☰"}
                            </button>
                            <Link to="/" className="text-4xl font-bold text-green-500">
                                <HomeIcon className="h-12 w-12" />
                            </Link>
                        </div>
                        {showSidebar && (
                            <div className="flex flex-col items-center">
                                <button
                                    onClick={() => handleActive("Dashboard")}
                                    className="text-2xl font-bold text-green-500 mb-4 hover:bg-green-700 hover:text-white px-6 py-2 rounded-full transition duration-300"
                                >
                                    Dashboard
                                </button>
                                <button
                                    onClick={() => handleActive("AllUser")}
                                    className="text-2xl font-bold text-green-500 mb-4 hover:bg-green-700 hover:text-white px-6 py-2 rounded-full transition duration-300"
                                >
                                    All Users
                                </button>
                                <button
                                    onClick={() => handleActive("AllJob")}
                                    className="text-2xl font-bold text-green-500 mb-4 hover:bg-green-700 hover:text-white px-6 py-2 rounded-full transition duration-300"
                                >
                                    All Jobs
                                </button>
                                <button
                                    onClick={() => handleActive("AllCompany")}
                                    className="text-2xl font-bold text-green-500 mb-4 hover:bg-green-700 hover:text-white px-6 py-2 rounded-full transition duration-300"
                                >
                                    All Company
                                </button>
                            </div>
                        )}
                    </div>
                    <div className={`w-full ${isSmallScreen ? "bg-gray-100" : "bg-gray-800"} p-8`}>
                        <div className="flex">
                            {active === "Dashboard" && <Dashboard />}
                            {active === "AllUser" && <AllUser />}
                            {active === "AllCompany" && <AllCompany />}
                            {active === "AllJob" && <AllJob />}
                        </div>
                    </div>
                </div>)
            }
            {
                !isSmallScreen && (<div className="flex flex-row flex-wrap">
                    <div className="w-1/6 bg-gray-800 h-screen text-white py-4 border rounded-xl">
                        <div className="flex flex-col items-center">
                            <Link to="/" className="text-4xl font-bold text-green-500 mb-8">
                                <HomeIcon className="h-12 w-12" />
                            </Link>
                            <button
                                    onClick={() => handleActive("Dashboard")}
                                    className="text-2xl font-bold text-green-500 mb-4 hover:bg-green-700 hover:text-white px-6 py-2 rounded-full transition duration-300"
                                >
                                    Dashboard
                                </button>
                                <button
                                    onClick={() => handleActive("AllUser")}
                                    className="text-2xl font-bold text-green-500 mb-4 hover:bg-green-700 hover:text-white px-6 py-2 rounded-full transition duration-300"
                                >
                                    All Users
                                </button>
                                <button
                                    onClick={() => handleActive("AllJob")}
                                    className="text-2xl font-bold text-green-500 mb-4 hover:bg-green-700 hover:text-white px-6 py-2 rounded-full transition duration-300"
                                >
                                    All Jobs
                                </button>
                                <button
                                    onClick={() => handleActive("AllCompany")}
                                    className="text-2xl font-bold text-green-500 mb-4 hover:bg-green-700 hover:text-white px-6 py-2 rounded-full transition duration-300"
                                >
                                    All Company
                                </button>
                        </div>
                    </div>
                    <div className="w-3/4 p-8">
                        <div className="flex">
                        {active === "Dashboard" && <Dashboard />}
                            {active === "AllUser" && <AllUser />}
                            {active === "AllCompany" && <AllCompany />}
                            {active === "AllJob" && <AllJob />}
                        </div>
                    </div>

                </div>)
            }

        </div>

    )
}