import React,{useState,useContext} from 'react';
import sublinks from './data';

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [isSideBarOpen,setIsSideBarOpen] = useState(false);
    const [isSubMenuOpen,setIsSubMenuOpen] = useState(false);
    const [page,setPage] = useState({page: '',links: []});
    const [location,setLocation] = useState({});

    const openSideBar = () => {
        setIsSideBarOpen(true);
    }
    const closeSideBar = () => {
        setIsSideBarOpen(false);
    }
    const openSubMenu = (text,coordinates) => {
        const page = sublinks.find((link) => link.page === text)
        setPage(page);
        console.log(page.page);
        setLocation(coordinates);
        setIsSubMenuOpen(true);
    }
    const closeSubMenu = () => {
        setIsSubMenuOpen(false);
    }
    return <AppContext.Provider value={{
        isSideBarOpen,
        isSubMenuOpen,
        openSideBar,
        closeSideBar,
        openSubMenu,
        closeSubMenu,
        page,
        location,
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}