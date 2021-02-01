import React from 'react';
import "./style.css";
import honeyHomageLogoWhite from "../../images/honeyHomageLogoWhite.svg";
import LoginButtonAuthenticator from "../LoginButtonAuthenticator/LoginButtonAuthenticator"

const HeroCover = () => {
    return (
        <section className="heroCoverSection">
            <div className="heroCoverSectionContainer">
                <img src={honeyHomageLogoWhite} alt="honeyHomageLogoWhite" className="honeyHomageLogo" />
                <div className="text-center">
                    <h1 className="honeyHomageCoverTitle">Honey Homage</h1>
                </div>
                <div className="heroCoverButtons">
                    <LoginButtonAuthenticator />
                    <button className="shopButton">Shop</button>
                </div>
                <div className="socialMediaLinksContainer">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-pinterest"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
        </section>
    );
}

export default HeroCover;