import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { useContactFormState } from "../state/ContactForm";
import Link from "next/link";

const Contactform = () => {
  const { showContactForm, setShowContactForm } = useContactFormState();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [message, setMessage] = useState("");

  //Für besser user experience
  const [Loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const emailData = {
      firstname,
      lastname,
      email,
      telephoneNumber,
      message,
    };

    const response = await fetch("/api/emails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emailData),
    });

    const responseToAdmin = await fetch("/api/emails/toadmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emailData),
    });

    if (!response.ok && !responseToAdmin.ok) {
      console.log("Fehler beim senden der E-Mail");
      setError(true);
    } else {
      console.log("E-Mail wurde gesendet!");
      setLoading(false);
      setSuccess(true);
      location.reload();
    }
  };
  return (
    <div>
      {showContactForm && (
        <div className="bg-[#1E2228] shadow-xl rounded-xl animate-slideInLeft slideInLeft w-80 sm:w-[700px]">
          <form onSubmit={handleSubmit} method="POST" action={""}>
            <div className="flex flex-col justify-start px-8 py-4 text-white">
              <div className="flex gap-10 justify-between items-center mb-7 sm:mb-14">
                <h1 className="font-extrabold text-4xl sm:text-5xl">
                  Schreiben Sie uns:
                </h1>
                <button
                  onClick={() => {
                    setShowContactForm(false);
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
                      placeholder="Dein Vorname"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      required
                      className="text-black border-[#3550FF] border-2 rounded-full px-4 py-1 mb-6"
                    />
                  </div>
                  <div className="flex flex-col justify-start sm:text-white">
                    <label className="font-semibold mb-2">Nachname:</label>
                    <input
                      type="text"
                      placeholder="Dein Nachname"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      required
                      className="text-black border-[#3550FF] border-2 rounded-full px-4 py-1 mb-6"
                    />
                  </div>
                </div>

                <label className="font-semibold mb-2">E-Mail:</label>
                <input
                  type="email"
                  placeholder="beispiel@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="text-black border-[#3550FF] border-2 rounded-full px-4 py-1 mb-6"
                />
                <label className="font-semibold mb-2">
                  Telefon
                  <span className="font-normal text-[#3550FF]">(optional)</span>
                  :
                </label>
                <input
                  type="tel"
                  placeholder="+49 123 46789..."
                  value={telephoneNumber}
                  onChange={(e) => setTelephoneNumber(e.target.value)}
                  className="text-black border-[#3550FF] border-2 rounded-full px-4 py-1 mb-6"
                />
                <label className="hidden h-sm:block font-semibold mb-2">
                  Nachricht:
                </label>
                <textarea
                  placeholder="Ich möchte einen Manager, weil ..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="hidden h-sm:block text-black border-[#3550FF] border-2 rounded-xl px-4 py-1 mb-6 h-[110px]"
                />
                <button
                  type="submit"
                  className="text-white border-[#3550FF] border-2 rounded-xl px-4 py-1 font-extrabold"
                >
                  Senden(unverbindlich)
                </button>
              </div>
              <div className="self-center font-bold text-lg">
                {Loading && <p>wird gesendet ...</p>}
                {success && (
                  <p style={{ color: "green" }}>Senden erfolgreich!</p>
                )}
                {error && (
                  <div>
                    <p style={{ color: "red" }}>Senden Fehlgeschlagen :(</p>
                    <Link
                      href={"/"}
                      onClick={() => {
                        setLoading(false);
                        setError(false);
                      }}
                    >
                      erneut versuchen
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contactform;
