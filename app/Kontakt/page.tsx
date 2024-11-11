"use client";
import Link from "next/link";
import React from "react";
import { FaWindowClose } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="mx-3 mt-10">
      <div className="bg-[#1E2228] shadow-xl rounded-xl animate-slideInLeft slideInLeft">
        <form>
          <div className="flex flex-col justify-start p-8 text-white ">
            <div className="flex gap-10 justify-between items-center mb-7">
              <h1 className="font-extrabold text-4xl">Schreiben Sie uns:</h1>

              <Link href="/">
                <button>
                  <FaWindowClose className="h-8 w-8 text-[#3550FF]" />
                </button>
              </Link>
            </div>

            <label className="font-semibold mb-2">Vorname:</label>
            <input
              type="text"
              className="text-black border-[#3550FF] border-2 rounded-full px-4 py-1 mb-6"
              required
            />
            <label className="font-semibold mb-2">Vorname:</label>
            <input
              type="text"
              className="text-black border-[#3550FF] border-2 rounded-full px-4 py-1 mb-6"
              required
            />
            <label className="font-semibold mb-2">E-Mail:</label>
            <input
              type="email"
              className="text-black border-[#3550FF] border-2 rounded-full px-4 py-1 mb-6"
              required
            />
            <label className="font-semibold mb-2">
              Telefon
              <span className="font-normal text-[#3550FF]">(optional)</span>:
            </label>
            <input
              type="number"
              className="text-black border-[#3550FF] border-2 rounded-full px-4 py-1 mb-6"
            />
            <label className="font-semibold mb-2">Nachricht:</label>
            <textarea
              className="text-black border-[#3550FF] border-2 rounded-xl px-4 py-1 mb-6 h-[110px]"
              required
            />
            <input
              type="submit"
              value={"Nachricht Senden"}
              className="text-white border-[#3550FF] border-2 rounded-xl px-4 py-1 font-extrabold"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
