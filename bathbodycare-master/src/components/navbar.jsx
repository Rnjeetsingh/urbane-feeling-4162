import "../css/navbar.css"
import 'font-awesome/css/font-awesome.min.css';
import {Link} from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import { useContext, useState, useEffect } from "react";

function Navbar(){
    const {isAuth, Logout,cartCount} = useContext(AuthContext)
    const link = [
        {path: "/new&now", text:"New and Now"},
        {path: "/bodycare", text:"Body Care"},
        {path: "/handsSoap", text:"Hands Soap"},
        {path: "/home_fragrance", text:"Home Fragrance"},
        {path: "/gifts", text:"Gifts"},
        {path: "/top_offers", text:"Top Offers"},
        {path: "/getinspired", text:"Get Inspired"},
    ]

    return (
    <header>
        <div className="navBox1">
            <div className="navCompo">
                <Link to="/">
                    <img src="https://www.bathandbodyworks.in/on/demandware.static/Sites-BathAndBodyWorks-Site/-/default/dw6cad6a5a/images/no_drop_logo-01.png" alt="" />
                </Link>
                <div className="navIcon">
                <input type="text" placeholder="Search by fragrance or product..." />
                    {
                        !isAuth 
                        ? <Link to="/login" ><i className="fa fa-user-circle"></i></Link> 
                        : <Link to="/profile" className="loggedIn"> 
                            <i className="fa fa-user-circle"></i>
                            <div className="profilePopup">
                                <Link to="/myinfo">My Account</Link>
                                <Link to="/myorder">My Order</Link>
                                <Link onClick={Logout}>Logout</Link>
                            </div>
                          </Link>
                    }
                    <Link to="/mycart">
                        <i className="fa fa-shopping-bag">{cartCount}</i>
                    </Link>
                </div>
            </div>

        </div>

        <div className="navBox2">
            {link.map((ele) => (
                <Link key={ele.path} to={ele.path}>{ele.text}</Link>
            ))}
        </div>
    </header>
    )
}

export default Navbar