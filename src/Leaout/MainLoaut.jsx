import { Outlet } from "react-router-dom";
import Footer from "../Sheard/Footer";
import Navbar from "../Sheard/Navbar";

const MainLoaut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default MainLoaut;