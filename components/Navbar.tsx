import { useCallback, useState } from "react";
import MobileMenu from "./MobileMenu";
import NabvarItem from "./NabvarItem";
import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";
import AccountMenu from "./AccountMenu";

const Navbar=()=>{
    const [showMobileMenu, setShowMobileMenu]=useState(false);

    const toggleMobileMenu=useCallback(()=>{
        setShowMobileMenu((currentValue)=>!currentValue);
    },[showMobileMenu]);

    return(
        <nav>
            <div className="w-full fixed z-40">
                <div className="
                px-4
                md:px-16
                py-6
                flex
                flex-row
                items-center
                transition
                duration-500
                bg-zinc-900
                bg-opacity-80
                ">
                    <img className="h-4 lg:h-7" src="images/logo.png" alt="logo"/>
                    <div className="
                    flex-row
                    ml-8
                    gap-7
                    hidden
                    lg:flex
                    ">
                        <NabvarItem label="Home"/>
                        <NabvarItem label="Series"/>
                        <NabvarItem label="Films"/>
                        <NabvarItem label="New and Popular"/>
                        <NabvarItem label="My List"/>
                        <NabvarItem label="Browes by languages"/>
                    </div>
                    <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-4 cursor-pointer relative">
                        <p className="text-white text-sm">Brows</p>
                        <BsChevronDown className="text-white transition"/>
                        <MobileMenu visible={showMobileMenu} />
                    </div>
                    <div className="flex flex-row ml-auto gap-7 items-center">
                        <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsSearch />
                        </div>
                        <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsBell />
                        </div>
                        <div className="flex flex-row items-center gap-2 cursor-pointer relative">
                            <div className="w-6 h-6 lg:w-6 lg:h-6 rounded-md overflow-hidden ">
                                <img src="/images/default-blue.png" alt="profile"/>
                            </div>
                                <BsChevronDown className="text-white transition"/>
                                <AccountMenu />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;