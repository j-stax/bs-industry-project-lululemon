import './Footer.scss'
import { IoIosArrowDown } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__dropdown">
                MY ACCOUNT
                <IoIosArrowDown />
            </div>
            <div className="footer__dropdown">
                HELP
                <IoIosArrowDown />
            </div>
            <div className="footer__dropdown">
                ABOUT US
                <IoIosArrowDown />
            </div>
            <div className="footer__dropdown footer__dropdown--last">
                CONTACT US
                <IoIosArrowDown />
            </div>
            <Link className="footer__link footer__link--dashboard" to="/dashboard">MY DASHBOARD</Link>
            <p className="footer__link">EMAIL SIGN UP</p>
            <p className="footer__link">CAREERS</p>
            <p className="footer__link">LULULEMON X FANATICS</p>
            <p className="footer__link">SUSTAINABILITY</p>
            <p className="footer__link">SOCIAL IMPACT</p>
            <p className="footer__link">DIVERSITY AND INCLUSION</p>
            <p className="footer__link">LULULEMON APPS</p>
            <p className="footer__link">GIFT CARDS</p>
            <p className="footer__link">STORE LOCATOR</p>
            <div className="footer__socials">
                <FaTwitter size={18} />
                <FaPinterestP size={18} />
                <FaYoutube size={18} />
                <FaFacebookF size={18} />
                <FaInstagram size={18} />
            </div>
            <div className="footer__legal">
                <p className="footer__legal-item">Privacy Policy</p>
                <p className="footer__legal-item">Terms of Use</p>
                <p className="footer__legal-item footer__legal-item--copyright">
                    &copy; lululemon athletica 1818 Cornwall Ave, Vancouver BC V6J 1C7
                </p>
            </div>
        </footer>
    )
}