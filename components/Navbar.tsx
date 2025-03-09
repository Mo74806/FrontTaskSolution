"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!theme) {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(systemPrefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) setShowNavbar(false);
      else setShowNavbar(true);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 z-50 flex items-center justify-between w-full bg-bgLight dark:bg-bgDark py-4 px-6 md:px-[100px] shadow-lg transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center gap-x-[12px]">
        <Image src="/images/logo.png" alt="logo" width={51} height={44} />
        <p className="text-[#143aa2] text-[28px] font-semibold">ProcureDC</p>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-x-[20px] text-[18px] text-[#4F4F4F] dark:text-textDark font-regular">
        <li>
          <button
            onClick={() => scrollToSection("solutions")}
            className="cursor-pointer"
          >
            Solutions
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("features")}
            className="cursor-pointer"
          >
            Features
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("pricing")}
            className="cursor-pointer"
          >
            Pricing
          </button>
        </li>
        <li>
          <button
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer"
          >
            Contact
          </button>
        </li>
      </ul>

      {/* Right Section */}
      <ul className="hidden md:flex gap-x-[20px] items-center text-[16px] font-regular">
        <li className="text-primary dark:text-textDark">Sign In</li>
        <li>
          <Button className="bg-[#143aa2] cursor-pointer text-white hover:border hover:border-[#143aa2] hover:text-[#143aa2]   hover:dark:text-white hover:dark:border-white hover:bg-transparent transition-all duration-300">
            Request a Demo
          </Button>
        </li>
        <li>
          <Button
            variant="default"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="cursor-pointer text-white dark:text-gray-700"
          >
            {mounted && theme === "dark" ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </Button>
        </li>
      </ul>

      {/* Mobile Menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTitle className="sr-only text-white">Navigation</SheetTitle>

        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="md:hidden inline-flex"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="bg-bgLight dark:bg-bgDark px-3 w-[250px]"
        >
          <div className="flex items-center mt-[22px] gap-x-[12px]">
            <Image src="/images/logo.png" alt="logo" width={40} height={40} />
            <p className="text-primary dark:text-white text-[22px] font-semibold">
              ProcureDC
            </p>
          </div>
          <div className="flex flex-col items-start gap-6 mt-6">
            <ul className="flex flex-col gap-4 text-[#4F4F4F] dark:text-textDark">
              <li>
                <button
                  onClick={() => scrollToSection("solutions")}
                  className="cursor-pointer"
                >
                  Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("features")}
                  className="cursor-pointer"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="cursor-pointer"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
            <ul className="flex flex-col gap-4 text-[16px] font-regular">
              <li className="text-primary dark:text-textDark">Sign In</li>
              <li>
                <Button className="bg-[#143aa2] cursor-pointer text-white hover:border hover:border-[#143aa2] hover:text-[#143aa2]   hover:dark:text-white hover:dark:border-white hover:bg-transparent transition-all duration-300">
                  {" "}
                  Request a Demo
                </Button>
              </li>
              <li>
                <Button
                  variant="default"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="cursor-pointer text-white dark:text-gray-700 w-full"
                >
                  {mounted && theme === "dark" ? (
                    <Sun size={20} className="mx-auto" />
                  ) : (
                    <Moon size={20} className="mx-auto" />
                  )}
                </Button>
              </li>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
