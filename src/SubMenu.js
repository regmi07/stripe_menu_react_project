import { useState,useRef,useEffect } from "react";
import { useGlobalContext } from "./Context";
import './CSS/SubMenu.css';

const SubMenu = () => {
    const {isSubMenuOpen,page: {page,links},location} = useGlobalContext();
    const container = useRef(null);
    const [column,setColumn] = useState('col-2');
    useEffect(() => {
        setColumn('col-2');
        const submenu = container.current;
        const {center,bottom} = location;
        submenu.style.left = `${center}px`;
        submenu.style.top = `${bottom}px`;
        if(links.length === 3)
            setColumn('col-3');
        if(links.length > 3)
            setColumn('col-4');
    },[page,location,links])
    return (
        <aside className={`${isSubMenuOpen?'submenu show':'submenu'}`} ref={container}>
            <section>
                <h4>{page}</h4>
                <article className={`submenu-center ${column}`}>
                    {
                        links.map((link,index) => {
                            const {label,icon,url} = link;
                            return <li key={index}><a href={url}>{icon}{label}</a></li>
                        })
                    }
                </article>
            </section>
        </aside>
    );
}

export default SubMenu;