import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import cn from "classnames";
// Update image path here
import ReportEaseLogo from "../../assets/img/logo/logo.png"; // Adjust the path as needed
import $ from "jquery";
import { handleClickScroll } from "../../lib/helpers";

const HeaderOne: React.FC = () => {
  // sticky nav bar
  const [stickyClass, setStickyClass] = useState({
    fixed: "",
    header: "",
  });

  // arrow function to bind 'this' properly
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight < 245
        ? setStickyClass({ fixed: "", header: "" })
        : setStickyClass({ fixed: "active-height", header: "sticky-menu" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  // mobile menu
  useEffect(() => {
    // SubMenu Dropdown Toggle
    if ($(".menu-area li.menu-item-has-children ul").length) {
      $(".menu-area .navigation li.menu-item-has-children").append(
        '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
      );
    }

    // Mobile Nav Hide Show
    if ($(".mobile-menu").length) {
      let mobileMenuContent = $(".menu-area .main-menu").html();
      $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);

      // Dropdown Button
      $(".mobile-menu li.menu-item-has-children .dropdown-btn").on(
        "click",
        function (this: HTMLElement) {
          $(this).toggleClass("open");
          $(this).prev("ul").slideToggle(500);
        }
      );

      // Menu Toggle Btn
      $(".mobile-nav-toggler").on("click", function () {
        $("body").addClass("mobile-menu-visible");
      });

      // Menu Toggle Btn
      $(".menu-backdrop, .mobile-menu .close-btn").on("click", function () {
        $("body").removeClass("mobile-menu-visible");
      });
    }
  }, []);

  // active link switching
  const { hash, pathname } = useLocation();
  const isActiveLink = (id: string) => {
    return id === hash ? "active" : "";
  };

  return (
    <header id="header">
      <div id="header-fixed-height" className={cn(stickyClass.fixed)} />

      <div id="sticky-header" className={cn("menu-area", stickyClass.header)}>
        <div className={cn("container custom-container")}>
          <div className="row">
            <div className="col-12">
              <div className={"mobile-nav-toggler"}>
                <i className="fas fa-bars" />
              </div>

              <div className="menu-wrap">
                <nav className={"menu-nav"}>
                  <div className={cn("navbar-wrap main-menu d-none d-lg-flex")}>
                    <ul className={"navigation"}>
                      <li
                        className={cn(
                          hash === "" && "active",
                          "menu-item-has-children"
                        )}
                      >
                        <Link
                          to="#header"
                          className={"section-link"}
                          onClick={() => handleClickScroll("header")}
                        >
                          Home
                        </Link>
                      </li>
                      <li className={cn(hash === "#about" && "active")}>
                        <Link
                          to="#about"
                          className={"section-link"}
                          onClick={() => handleClickScroll("about")}
                        >
                          About us
                        </Link>
                      </li>
                      <li className={isActiveLink("#sales")}>
                        <Link
                          to="#sales"
                          className={"section-link"}
                          onClick={() => handleClickScroll("workflow")}
                        >
                          Flow
                        </Link>
                      </li>
                      <li className={isActiveLink("#roadmap")}>
                        <Link
                          to="#roadmap"
                          className={"section-link"}
                          onClick={() => handleClickScroll("roadmap")}
                        >
                          Roadmap
                        </Link>
                      </li>
                      
                      <li className={isActiveLink("#contact")}>
                        <Link
                          to="#contact"
                          className={"section-link"}
                          onClick={() => handleClickScroll("contact")}
                        >
                          Contact us
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className={cn("header-action", "d-none d-md-block")}>
                    <ul>
                      
                      <li className={"header-btn"}>
                        <Link to="http://localhost:5173/login" className="btn">
                          LOGIN
                        </Link>
                      </li>
                      <li className={"header-btn register-btn"}>
                        <Link to="#" className="btn">
                          REGISTER
                        </Link>
                        {/* Dropdown menu */}
                        <ul className="register-dropdown">
                          <li>
                            <Link to="http://localhost:5173/signup/instituteAdmin">Institute</Link>
                          </li>
                          <li>
                            <Link to="http://localhost:5173/signup/faculty">Faculty</Link>
                          </li>
                          <li>
                            <Link to="http://localhost:5173/signup/student">Student</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div className="logo" style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "-160px", marginLeft : "-100px", overflow: "hidden", height: "300px", width: "300px" }}>
                    <img 
                      src={ReportEaseLogo} 
                      alt="ReportEase Logo" 
                      style={{ height: "300px", width: "100%", objectFit: "contain", transition: "all 0.2s ease-in-out" }} 
                    />
                  </div>

              

              {/* Mobile Menu */}
              <div className={"mobile-menu"}>
                <nav className={"menu-box"}>
                  <div className={"close-btn"}>
                    <i className="fas fa-times"></i>
                  </div>
                  <div className={"nav-logo"}>
                    <Link to="/">
                      <img src={ReportEaseLogo} alt="BigTech Logo" title="" />
                    </Link>
                  </div>

                  <div className={"menu-outer"}>
                    {/* Menu Will Come Automatically Via Javascript */}
                  </div>

                  <div className={"social-links"}>
                    <ul className="clearfix">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div className={"menu-backdrop"} />
              {/* End Mobile Menu */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;