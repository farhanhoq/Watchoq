import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css"

const Nav = () => {

    const [navbar, setNavbar] = useState(false)


    const changeBg = () => {
        if (window.scrollY >= 10) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
        }

        window.addEventListener("scroll", changeBg)

    return (
        <nav
            className={
            navbar
            ? "navbar active flex justify-between w-full mx-auto fixed z-50 md:px-16"
            : "navbar flex justify-between w-full mx-auto fixed z-[999] md:px-16"
        }>
            <div className="navbar">
            <div className="navbar-start">
            <a className="btn btn-ghost normal-case text-5xl">WatchOQ</a>
            </div>
            
            </div>
        </nav>
    )
};

export default Nav;