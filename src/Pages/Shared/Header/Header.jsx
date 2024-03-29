
import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/img.png'
import { useEffect, useState } from "react";

const Header = () => {
    const [headerColor, setHeaderColor] = useState("")
    const links = <>
        <li><NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black bg-transparent uppercase" : "uppercase"}>Home</NavLink></li>
        <li><NavLink to="/about" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black bg-transparent uppercase" : "uppercase"}>About Us</NavLink></li>
        <li><NavLink to="/business" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black bg-transparent uppercase" : "uppercase"}>Our Businesses</NavLink></li>
        <li><NavLink to="/stan" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black bg-transparent uppercase" : "uppercase"}> Sustainability</NavLink></li>
        <li><NavLink to="/stan" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black bg-transparent uppercase" : "uppercase"}> Csr</NavLink></li>
        <li><NavLink to="/stan" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-black bg-transparent uppercase" : "uppercase"}> Career</NavLink></li>
    </>


    const listenScrollEvent = () => {
        window.scrollY > 10
            ? setHeaderColor('#fff')
            : setHeaderColor("")
    }
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent)
    })
    return (
        <div className={`navbar ${!headerColor ? 'bg-white opacity-60': 'bg-white'}  fixed top-0 z-50`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to='/'><a className="normal-case flex gap-2 text-xl lg:text-3xl font-medium text-black"><img src={logo} alt="" className="h-16" /></a></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Header;