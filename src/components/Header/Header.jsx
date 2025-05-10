import './Header.scss'
import Logo from '../Logo'
import { FaRegCircleUser } from "react-icons/fa6";
import { RiShoppingBagLine } from "react-icons/ri";
import { LuMenu } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { useRef } from 'react'

export default function Header() {
    const searchIconRef = useRef(null)

    const handleFocus = () => {
        searchIconRef.current.classList.add("hidden")
    }

    const handleBlur = () => {
        searchIconRef.current.classList.remove("hidden")
    }

    return (
        <header className="header">
            <nav className="header__nav">
                <div className="header__logo-container">
                    <Logo className="header__logo" width="1.5rem" height="1.25rem" />
                    <h1 className="header__heading">lululemon</h1>
                </div>
                <div className="header__nav-options">
                    <FaRegCircleUser className="header__user-icon" size={22} />
                    <RiShoppingBagLine size={24} />
                    <LuMenu size={24} />
                </div>
            </nav>
            <div className="header__search-container">
                <div className="header__search-icon-wrapper" ref={searchIconRef}>
                    <IoIosSearch className="header__search-icon" size={18} />
                    <span className="header__search-icon-text">Search</span>
                </div>
                <input onFocus={handleFocus} onBlur={handleBlur} className="header__search" type="text"/>
            </div>
        </header>
    )
}