import React from "react";
import logo from "../../../assets/header/logo.png";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { HeaderOption } from "../../Constant/constant";
import "./header.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  //   var navbar = document.querySelector('header ')

  // window.onscroll = function() {

  //   // pageYOffset or scrollY
  //   if (window.pageYOffset > 0) {
  //     navbar.classList.add('scrolled')
  //   } else {
  //     navbar.classList.remove('scrolled')
  //   }
  // }

  const [bgScroll, setBgScroll] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setBgScroll(window.pageYOffset > 100)
      );
    }
  }, []);

  return (
    <>
      <header className={`header ${bgScroll ? "scrolled" : ""}`}>
        <div className="header-logo">
          <img src={logo} alt="company-logo" />
        </div>
        <nav className="header-options">
          <ul className="header-options-link">
            <li>
              {HeaderOption.map((item)=>
                (
                  <a to={item.path}>{item.title}</a>
                )
              )}
            </li>
            <li>
              <a href="/">
                <HiOutlineMenuAlt1 size={30} />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
