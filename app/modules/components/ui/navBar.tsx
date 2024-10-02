"use client";
import React, { useState, useEffect } from "react";
import { Navbar, NavbarBrand, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Turn as Hamburger } from "hamburger-react";

interface AppProps {
  menuItems: string[];
}

const NavBar: React.FC<AppProps> = ({ menuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={`fixed top-0 left-0 w-full transition-colors duration-1000 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Left side - Logo */}
      <NavbarContent className="gap-4" justify="start">
        <NavbarBrand>
          <img
            src="/path/to/logo.png"
            alt="Logo"
            className={`transition-transform duration-1000 ${
              isScrolled ? "h-8" : "h-12"
            }`}
          />
        </NavbarBrand>
      </NavbarContent>

      {/* Center - Visible on small screens */}
     

      {/* Center - Hidden on small screens */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
       
        <NavbarItem>
          <a href="#" className="text-gray-500 hover:text-gray-700 transition">
            Portfolio
          </a>
        </NavbarItem>
        <NavbarItem isActive>
          <a href="#" className="text-gray-500 hover:text-gray-700 transition" aria-current="page">
            About
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href="#" className="text-gray-500 hover:text-gray-700 transition">
            Book
          </a>
        </NavbarItem>
         <NavbarItem>
          <a href="#" className="text-gray-500 hover:text-gray-700 transition">
            Contact
          </a>
        </NavbarItem>
      </NavbarContent>

      {/* Right side - Visible on all screens */}
      <NavbarContent justify="end">
        
        <NavbarItem>
          <a
            href="#"
            className="bg-white text-black px-4 py-2 rounded hover:bg-yellow-600 transition"
          >
            Buy My Book
          </a>
        </NavbarItem>

        {/* Hamburger Menu on Small Screens */}
        <NavbarItem className="sm:hidden">
          <Hamburger toggled={isMenuOpen} toggle={setIsMenuOpen} />
        </NavbarItem>
      </NavbarContent>

      {/* Collapsible Menu */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <a
              href="#"
              className="w-full text-gray-500 hover:text-gray-700 transition"
            >
              {item}
            </a>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;