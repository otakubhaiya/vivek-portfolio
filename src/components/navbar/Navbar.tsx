"use client";
// Navbar.js
import React, { useState } from "react";
import { Link } from "react-scroll";
// import { usePathname } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import "@components/navbar/style.scss"; // Import the CSS file for styling

const Navbar = () => {
  // const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar z-10">
      <div className="navbar-container">
        <div className="logo">MyLogo</div>
        <div
          className={`menu-icon ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <span
            className={`close-btn ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            +
          </span>
          <li className="nav-item">
            <Link
              to="home-section"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
            >
              home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="services-section"
              spy={true}
              spyThrottle={500}
              smooth={true}
              duration={500}
              activeClass="active"
            >
              services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="project-section"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
              activeClass="active"
            >
              projects
            </Link>
          </li>
          <li className="nav-item">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <a>reviews/clients🔻</a>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link
                    to="reviews"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    activeClass="active"
                  >
                    reviews
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    to="clients"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    activeClass="active"
                  >
                    clients
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
