import React from 'react';
import './style.css';
import honeyHomageLogoCarrot from "../../images/honeyHomageLogoCarrot.svg";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../logout-button";
import LoginButton from "../login-button";
import AuthNav from "../auth-nav";

const Navbar = () => {
    return (
        <nav className="honeyHomageNavBar">
            <section>
                <div className="navLogoContainer">
                    <a href="/">
                    <img src={honeyHomageLogoCarrot} alt="honeyHomageNavLogo" className="honeyHomageNavLogo" />
                    </a>
                </div>
                <div className="navLinkContainer">
                        <a href="#">Our Story</a>
                        <p>|</p>
                        <a href="#">Honey Store</a>
                        <p>|</p>
                        <a href="#">Contact Us</a>
                </div>
                <div className="navUserContainer">
                        <a href="#"><i class="fas fa-user-circle"></i></a>
                        <a href="#"><i class="fas fa-shopping-cart"></i></a>
                </div>
                <AuthNav />
            </section>
        </nav>
    );
}

export default Navbar;