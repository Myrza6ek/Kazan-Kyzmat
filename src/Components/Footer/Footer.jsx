import React from "react";
import "./Footer.css";
import insta from "../Footer/mediaF/media/insta.png";
import ball from "../Footer/mediaF/media/ball.png";
import twitter from "../Footer/mediaF/media/twitter.png";
import ytb from "../Footer/mediaF/media/ytb.png";
import googleplay from "../Footer/mediaF/media/googleplay.png";
import storewhite from "../Footer/mediaF/media/storewhite.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-container__info">
          <div className="footer-container__info_cmpny">
            <h4>Company</h4>
            <a className="footer-container__info_cmpny_link" href="">
              About us
            </a>
            <a className="footer-container__info_cmpny_link" href="">
              Blog
            </a>

            <a className="footer-container__info_cmpny_link" href="">
              Contact Us
            </a>
          </div>
          <div className="footer-container__info_cmpny">
            <h4>Support</h4>
            <a className="footer-container__info_cmpny_link" href="">
              Help Center
            </a>

            <a className="footer-container__info_cmpny_link" href="">
              Community
            </a>
          </div>
          <div className="footer-container__info_cmpny">
            <h4>Legal</h4>
            <a className="footer-container__info_cmpny_link" href="">
              Coocies Policy
            </a>
            <a className="footer-container__info_cmpny_link" href="">
              Privacy Policy
            </a>
          </div>
          <div className="footer-container__info_apps">
            <h4>Install App</h4>

            <div className="playdark">
              <a href="https://play.google.com/store/games?hl=ru">
                <img src={googleplay} alt="google play" />
              </a>
            </div>
            <div className="appdark">
              <a href="https://www.apple.com/ru/app-store/">
                <img src={storewhite} alt="app store" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr width="90%" size="1" color="#ffffff" />
      <div className="footer-container__info_contacts">
        <div className="footer-cotainer__info_contacts-2">
          <p className="footer-container__info_contacts__year">
            © 2020 - All rights reserved
          </p>
        </div>

        <div className="logos-icon">
          <div>
            <img src={insta} alt="instagram" />
          </div>
          <div>
            <img src={ball} alt="ball" />
          </div>
          <div>
            <img src={twitter} alt="twitter" />
          </div>
          <div>
            <img src={ytb} alt="youtube" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
