import React from 'react';
import { useGlobalContext } from "./Context";
import sublinks from "./data";
import { FaTimes } from "react-icons/fa";
import './CSS/Sidebar.css';

const Sidebar = () => {
    const {isSideBarOpen,closeSideBar} = useGlobalContext();
    return (
        <div className={`${isSideBarOpen?'sidebar-wrapper show' : 'sidebar-wrapper'}`}>
            <section className="sidebar">
                <button className="close-btn" onClick={closeSideBar}>
                    <FaTimes/>
                </button>
                <div className="sidebar-center">
                    {sublinks.map((sublink,index) => {
                        const {page,links} = sublink;
                        return <div className="links" key={index}>
                            <h4>{page}</h4>
                            <ul className="sub-links">
                                {
                                    links.map((link,index) => {
                                        const {label,icon,url} = link;
                                        return <a href={url} key={index}>{icon}{label}</a>
                                    })
                                }
                            </ul>
                        </div>
                    })}
                </div>
            </section>
        </div>
    );
}

export default Sidebar;