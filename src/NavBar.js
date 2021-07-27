import React from "react";
import { useGlobalContext } from "./Context";
import { FaBars } from "react-icons/fa";
import './CSS/NavBar.css';

const NavBar = () => {
    const {openSideBar,openSubMenu,closeSubMenu} = useGlobalContext();
    const displaySubMenu = (e) => {
        const page = e.target.textContent;
        const pageCoordinates = e.target.getBoundingClientRect();
        const center = (pageCoordinates.left + pageCoordinates.right)/2;
        const bottom = pageCoordinates.bottom - 3;
        openSubMenu(page,{center,bottom});
    }

    const handleSubMenu = (e) => {
        if(!e.target.classList.contains('link-btn'))
            closeSubMenu();
    }

    return (
        <nav className="nav" onMouseOver={handleSubMenu}>
            <div className="nav-center">
                <div className="nav-header">
                    <h1>logo</h1>
                    <button className="btn toggle-btn" onClick={openSideBar}>
                        <FaBars/>
                    </button>
                </div>
                <ul className="nav-links">
                    <li><button className="link-btn" onMouseOver={displaySubMenu}>products</button></li>
                    <li><button className="link-btn" onMouseOver={displaySubMenu}>developers</button></li>
                    <li><button className="link-btn" onMouseOver={displaySubMenu}>company</button></li>
                </ul>
                <button className="btn signin-btn">sign in</button>
            </div>
        </nav>
    );
}

export default NavBar;