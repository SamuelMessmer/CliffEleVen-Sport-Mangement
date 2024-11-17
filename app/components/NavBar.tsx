"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import { IoPersonCircle } from "react-icons/io5";
import { FaBars, FaWindowClose, FaHome, FaList } from "react-icons/fa";

import { motion } from "framer-motion";
import { useContactFormState } from "../state/ContactForm";
import Contactform from "./Contactform";

const NavBar = () => {
  const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
  const [navbarToggle, setNavbarToggle] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const { showContactForm, setShowContactForm } = useContactFormState();

  const showMenu = () => {
    setDisplayMobileMenu(!displayMobileMenu);
    setShowContactForm(false);
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    } else {
      const handleScroll = () => {
        setNavbarToggle(window.scrollY > 100);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      // Überprüfe, ob der Klick außerhalb des Menü-Elements passiert ist
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setDisplayMobileMenu(false);
      }
    };
    // Füge den Event-Listener hinzu
    document.addEventListener("mousedown", handler);

    // Cleanup-Effekt: Entferne den Event-Listener beim Unmount
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []); // Leer lassen, damit es nur einmal ausgeführt wird

  return (
    <div className="sticky top-4 flex justify-center z-50">
      {/* Mobile Navbar */}
      <div ref={menuRef} className="block md:hidden">
        <div className="flex justify-between items-center backdrop-blur-xl bg-gray-700 bg-opacity-35 shadow-2xl py-3 px-8 rounded-full w-80">
          <Link href="/">
            <h1 className="text-xl font-extrabold hover:scale-105 duration-150">
              CliffEleven
            </h1>
          </Link>
          <button
            onClick={() => {
              showMenu();
            }}
          >
            {displayMobileMenu ? (
              <FaWindowClose className="h-8 w-8" />
            ) : (
              <FaBars className="h-8 w-8" />
            )}
          </button>
        </div>

        <div
          className={
            displayMobileMenu
              ? "bg-white absolute right-5 mt-5 p-8 rounded-xl animate-slideInFromTop slideInFromTop"
              : "hidden"
          }
        >
          <div className="flex flex-col gap-1">
            <button
              className="text-black text-sm flex gap-5 items-center py-2"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              <FaHome className="h-6 w-6 tex-black" />
              STARTSEITE
            </button>

            <button
              onClick={() => {
                window.scrollTo({
                  top: 1650,
                  behavior: "smooth",
                });
              }}
              className="text-black text-sm flex gap-5 items-center py-2"
            >
              <FaList className="h-6 w-6 text-black" />
              SPIELER
            </button>
            <button
              onClick={() => {
                window.scrollTo({
                  top: 2390,
                  behavior: "smooth",
                });
              }}
              className="text-black text-sm flex gap-5 items-center py-2"
            >
              <IoPersonCircle className="h-6 w-6 text-black" />
              ABOUT
            </button>
            <button
              onClick={() => {
                setShowContactForm(!showContactForm);
                setDisplayMobileMenu(false);
              }}
              className="border-2 border-blue-700 px-3 py-1 mt-2 shadow-lg font-extrabold rounded-md text-black"
            >
              Kontakt
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <div className="flex justify-center">
          <motion.div
            animate={{
              width: navbarToggle ? "65%" : "100%", // Breite der Navbar
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="flex justify-between items-center gap-56 backdrop-blur-xl bg-gray-700 bg-opacity-35 shadow-2xl py-3 px-8 rounded-full"
          >
            <div className={`flex gap-8 ${navbarToggle ? "block" : "hidden"}`}>
              <button
                className="hover:scale-105 duration-150 hover:border-b-2 border-blue-700 text-sm"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                STARTSEITE
              </button>
              <button
                onClick={() => {
                  window.scrollTo({
                    top: 7000,
                    behavior: "smooth",
                  });
                }}
                className="hover:scale-105 duration-150 hover:border-b-2 border-blue-700 text-sm"
              >
                KADER
              </button>
              <button
                onClick={() => {
                  window.scrollTo({
                    top: 6000,
                    behavior: "smooth",
                  });
                }}
                className="hover:scale-105 duration-150 hover:border-b-2 border-blue-700 text-sm"
              >
                ABOUT
              </button>
            </div>

            <div
              className={`${
                navbarToggle ? "block animate-appear appear" : "hidden"
              }`}
            >
              <button
                onClick={() => {
                  setShowContactForm(!showContactForm);
                  setDisplayMobileMenu(false);
                }}
                className="border-2 border-blue-700 px-3 py-1 font-bold rounded-md hover:scale-105 duration-150"
              >
                Kontakt
              </button>
            </div>

            <Link href="/ ">
              <h1
                className={`text-xl font-extrabold hover:scale-105 ${
                  navbarToggle && "opacity-0"
                }`}
              >
                CliffEleVen
              </h1>
            </Link>

            <div
              className={`flex gap-8 ${
                navbarToggle ? "hidden" : "block duration-500"
              }`}
            >
              <button
                className="hover:scale-105 duration-150 hover:border-b-2 border-blue-700 text-sm"
                onClick={() => {
                  window.scrollTo({
                    top: 1000,
                    behavior: "smooth",
                  });
                }}
              >
                STARTSEITE
              </button>
              <button
                onClick={() => {
                  window.scrollTo({
                    top: 1000,
                    behavior: "smooth",
                  });
                }}
                className="hover:scale-105 duration-150 hover:border-b-2 border-blue-700 text-sm"
              >
                KADER
              </button>
              <button
                onClick={() => {
                  window.scrollTo({
                    top: 1000,
                    behavior: "smooth",
                  });
                }}
                className="hover:scale-105 duration-150 hover:border-b-2 border-blue-700 text-sm"
              >
                ABOUT
              </button>
            </div>

            <div
              className={` ${
                navbarToggle ? "hidden" : "block animate-appear appear"
              }`}
            >
              <button
                onClick={() => {
                  setShowContactForm(!showContactForm);
                  setDisplayMobileMenu(false);
                }}
                className="border-2 border-blue-700 px-3 py-1 font-bold rounded-md hover:scale-105 duration-150"
              >
                Kontakt
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Form */}
      <section>
        <div className="z-50 centerElement">
          <Contactform />
        </div>
      </section>
    </div>
  );
};

export default NavBar;
