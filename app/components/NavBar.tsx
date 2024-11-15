"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import { IoPersonCircle } from "react-icons/io5";
import { FaBars, FaWindowClose, FaHome, FaList } from "react-icons/fa";

import { motion } from "framer-motion";

const NavBar = () => {
  const [display, setDisplay] = useState(false);
  const [NavWidth, setNavWidth] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const [showContact, setShowContact] = useState(false);

  const showMenu = () => {
    setDisplay(!display);
    setShowContact(false);
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    } else {
      const handleScroll = () => {
        setNavWidth(window.scrollY > 100);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      // Überprüfe, ob der Klick außerhalb des Menü-Elements passiert ist
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setDisplay(false);
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
            {display ? (
              <FaWindowClose className="h-8 w-8" />
            ) : (
              <FaBars className="h-8 w-8" />
            )}
          </button>
        </div>

        <div
          className={
            display
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
                setShowContact(!showContact);
                setDisplay(false);
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
              width: NavWidth ? "65%" : "100%", // Breite der Navbar
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
            }}
            className="flex justify-between items-center gap-56 backdrop-blur-xl bg-gray-700 bg-opacity-35 shadow-2xl py-3 px-8 rounded-full"
          >
            <div className={`flex gap-8 ${NavWidth ? "block" : "hidden"}`}>
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

            <div className={`${NavWidth ? "block animate-slideInLeft slideInLeft" : "hidden"}`}>
              <button
                onClick={() => {
                  setShowContact(!showContact);
                  setDisplay(false);
                }}
                className="border-2 border-blue-700 px-3 py-1 font-bold rounded-md hover:scale-105 duration-150"
              >
                Kontakt
              </button>
            </div>

            <motion.h1
              initial={{ opacity: 1, scale: 1 }}
              animate={{
                opacity: NavWidth ? 0 : 1, // Langsam ausblenden
                scale: NavWidth ? 0 : 1, // Verkleinern
              }}
              transition={{
                duration: 0,
              }}
              className="text-xl font-extrabold hover:scale-105 duration-150"
            >
              <Link href="/">CliffEleven</Link>
            </motion.h1>

            <div
              className={`flex gap-8 ${
                NavWidth ? "hidden" : "block duration-500"
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

            <div className={` ${NavWidth ? "hidden" : "block animate-slideInLeft slideInLeft"}`}>
              <button
                onClick={() => {
                  setShowContact(!showContact);
                  setDisplay(false);
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
          {showContact && (
            <div className="bg-[#1E2228] shadow-xl rounded-xl animate-slideInLeft slideInLeft w-80 sm:w-[700px]">
              <form>
                <div className="flex flex-col justify-start px-8 py-4 text-white">
                  <div className="flex gap-10 justify-between items-center mb-7 sm:mb-14">
                    <h1 className="font-extrabold text-4xl sm:text-5xl">
                      Schreiben Sie uns:
                    </h1>
                    <button
                      onClick={() => {
                        setShowContact(false);
                      }}
                    >
                      <FaWindowClose className="h-8 w-8 text-[#3550FF]" />
                    </button>
                  </div>

                  <div className="flex flex-col justify-start sm:py-8 sm:px-20 sm:text-white">
                    <div className="flex flex-col justify-start sm:flex-row sm:justify-between sm:text-white">
                      <div className="flex flex-col justify-start sm:text-white">
                        <label className="font-semibold mb-2">Vorname:</label>
                        <input
                          type="text"
                          className="text-black border-[#3550FF] border-2 rounded-full px-4 py-1 mb-6"
                          required
                        />
                      </div>
                      <div className="flex flex-col justify-start sm:text-white">
                        <label className="font-semibold mb-2">Nachname:</label>
                        <input
                          type="text"
                          className="text-black border-[#3550FF] border-2 rounded-full px-4 py-1 mb-6"
                          required
                        />
                      </div>
                    </div>

                    <label className="font-semibold mb-2">E-Mail:</label>
                    <input
                      type="email"
                      className="text-black border-[#3550FF] border-2 rounded-full px-4 py-1 mb-6"
                      required
                    />
                    <label className="font-semibold mb-2">
                      Telefon
                      <span className="font-normal text-[#3550FF]">
                        (optional)
                      </span>
                      :
                    </label>
                    <input
                      type="number"
                      className="text-black border-[#3550FF] border-2 rounded-full px-4 py-1 mb-6"
                    />
                    <label className="hidden sm:block font-semibold mb-2">
                      Nachricht:
                    </label>
                    <textarea
                      className="hidden sm:block text-black border-[#3550FF] border-2 rounded-xl px-4 py-1 mb-6 h-[110px]"
                      required
                    />
                    <input
                      type="submit"
                      value={"Senden (unverbindlich)"}
                      className="text-white border-[#3550FF] border-2 rounded-xl px-4 py-1 font-extrabold"
                    />
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default NavBar;
