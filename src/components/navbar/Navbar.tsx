"use client";
// Navbar.js
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import "@components/navbar/style.scss"; // Import the CSS file for styling

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
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
            <Link className={pathname === "/" ? "active" : ""} href="/">
              home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={pathname === "/services" ? "active" : ""}
              href="services"
            >
              services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={pathname === "/projects" ? "active" : ""}
              href="projects"
            >
              projects
            </Link>
          </li>
          <li className="nav-item">
            <DropdownMenu>
              <DropdownMenuTrigger>reviews/clients🔻</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link
                    className={pathname === "/reviews" ? "active" : ""}
                    href="reviews"
                  >
                    reviews
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    className={pathname === "/clients" ? "active" : ""}
                    href="clients"
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
