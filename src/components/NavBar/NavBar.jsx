import React from 'react'
import './navbar.css'
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineLogout } from "react-icons/hi";
import { IoIosCalculator } from "react-icons/io";
import { IoCloudUploadOutline } from "react-icons/io5"
function NavBar() {
    return (
        <>
        <div className="navBar">
        <div className="nav-bar">
                <div className="nav-items">
                    <IoHomeOutline className='Home-Icon' />
                    <span>Home</span>
                </div>
                <div className="nav-items">
                    <IoCloudUploadOutline className='Home-Icon' />
                    <span>whether</span>
                </div>
                <div className="nav-items">
                    <IoIosCalculator className='Home-Icon' />
                    <span>Calculator</span>
                </div>
                <div className="nav-items">
                    <HiOutlineLogout className='Home-Icon' />
                    <span>Log Out</span>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default NavBar