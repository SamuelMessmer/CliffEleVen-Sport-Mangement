"use client";
import CustomCarousel from "./components/CustomCarousel";
import Image from "next/image";
import FlyIn from "./components/FlyIn";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Link from "next/link";
import FlyInSmall from "./components/FlyInSmall";

export default function Home() {
  const textRef = useRef(null);
  const textInView = useInView(textRef);

  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef);

  useEffect(() => {
    console.log(`${textInView ? "is inView" : "is not inView"}`);
  });

  useEffect(() => {
    console.log(
      `${aboutInView ? "is inView(About ME)" : "is not inView(About ME)"}`
    );
  });

  return (
    <div className="overflow-hidden sm:overflow-visible sm:-mt-[60px]">
      {/* Hero Section */}
      <section>
        <div className="sm:flex items-center">
          <div className="mt-28 mr-10 xl:mx-14">
            <div className="flex flex-col mx-2 sm:mx-10">
              <div className="tracking-tightest -mb-8">
                <FlyIn text={"CATCH"} />
              </div>
              <div className="tracking-tightest text-[#3550FF] self-end sm:self-center -mb-8">
                {" "}
                <FlyIn text={"YOUR"} />
              </div>
              <div className="tracking-tightest self-center sm:self-end">
                {" "}
                <FlyIn text={"DREAMS"} />
              </div>
            </div>

            <div className="flex flex-col gap-5 mt-12 mx-6">
              <div className="flex ">
                <p className="wide-text">-</p>
                <p className="wide-text">Für alle, die hoch hinaus wollen</p>
              </div>
              <div className="flex ">
                <p className="wide-text">-</p>
                <p className="wide-text">
                  Wir begleiten Talente zum Erfolg und machen Ihre Träume wahr
                </p>
              </div>
            </div>

            <div className="flex justify-end mx-5">
              <Image
                src={"/images/arrow.png"}
                alt="Pfeil bild"
                height={150}
                width={150}
              />
              <div className="self-end bg-[#3550FF] px-4 py-2 shadow-2xl inner-shadow  font-extrabold rounded-md  text-white">
                <Link href="/Kontakt">
                  <button>KONTAKTIERE UNS</button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="
            w-full
            h-screen

            p-24
            relative
            overflow-hidden
            hidden 
            sm:block
            z-10
						
            bg-[url('/images/osei.png')]
            bg-cover
            bg-no-repeat
            bg-center

            before:content-['']
            before:absolute
            before:inset-0
            before:block
            before:bg-gradient-to-r
            before:from-[#0F0F0F]
            before:to-transparent
            before:opacity-100
            before:z-[-5]"
          ></div>
        </div>
      </section>

      {/* Werbung */}
      <section>
        <div className="mt-24 mb-32">
          <div className="flex flex-col mx-6 sm:justify-center sm:items-center sm:mx-14 xl:mx-32">
            <div className="flex flex-col sm:w-[600px] sm:self-start sm:ml-64">
              <h1 className="tracking-tightest block sm:hidden">Für Top</h1>
              <h1 className="tracking-tightest text-[#3550FF] self-end  block sm:hidden">
                Athleten
              </h1>

              <h1 className="tracking-tightest self-start hidden sm:block">
                Mehr als
              </h1>
              <h1 className="tracking-tightest text-[#3550FF] self-end  hidden sm:block">
                12 top Athleten
              </h1>
            </div>

            <div className="sm:flex sm:items-center sm:justify-center sm:mx-20 sm:gap-14">
              <div className="mt-10 mx-8">
                <Image
                  src={"/images/osei.png"}
                  alt="Spieler Bild"
                  height={1920}
                  width={1080}
                  className="rounded-md object-cover h-96 sm:h-[550px] sm:w-[700p]"
                />
              </div>
              <div className="flex flex-col gap-5 mt-12 mx-6">
                <p className="wide-text sm:wide-text-large">
                  Werde Teil unseres Netzwerks, und mach dich bereit für
                  einzigartige Chancen!
                </p>
                <div ref={textRef} className="flex flex-col gap-4 ml-4 text-xl">
                  <div className="flex text-[#3550FF]">
                    <p className="wide-text sm:wide-text-large">-</p>
                    <div className="wide-text sm:wide-text-large">
                      {textInView && (
                        <FlyInSmall text={"Meetings mit Spielern"} />
                      )}
                    </div>
                  </div>
                  <div className="flex text-[#3550FF]">
                    <p className="wide-text sm:wide-text-large">-</p>
                    <div className="wide-text block sm:hidden sm:wide-text-large">
                      {textInView && (
                        <FlyInSmall text={"Coaching von unserem    Team"} />
                      )}
                    </div>
                    <div className="wide-text hidden sm:block sm:wide-text-large">
                      {textInView && (
                        <FlyInSmall text={"Coaching von unserem Team"} />
                      )}
                    </div>
                  </div>
                  <div className="flex items-center text-[#3550FF]">
                    <p className="wide-text sm:wide-text-large">-</p>
                    <div className="wide-text sm:wide-text-large">
                      {textInView && <FlyInSmall text={"Tipps von Profis"} />}
                    </div>
                  </div>
                </div>

                <div className="hidden sm:flex sm:flex-col sm:w-[450px] sm:self-start sm:mt-24">
                  <h1 className="tracking-tightest self-center mr-14">
                    Werde{" "}
                  </h1>
                  <h1 className="tracking-tightest self-end -mr-20">
                    einer davon
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bilder Carousel */}
      <section>
        <div className="block sm:hidden mt-24 sm:mt-40 z-10">
          <CustomCarousel />
        </div>
      </section>

      {/* Bilder Desktop */}
      <section className="hidden sm:block overflow-visible">
        <div className="flex items-center justify-center">
          <div className="flex flex-col justify-center items-center w-[550px]">
            <div className="sticky top-32 mb-[300px] self-start">
              <img src="/images/terry.png" className="w-[250px] h-[350px]" />
            </div>

            <div className="sticky top-32 mb-[300px] self-end">
              <img src="/images/osei.png" className="w-[250px] h-[250px]" />
            </div>

            <div className="sticky top-[60vh] mb-[300px] self-start">
              <img src="/images/foto2.png" className="w-[250px] h-[250px]" />
            </div>

            <div className="sticky top-[48vh] mb-[300px] self-end">
              <img src="/images/sanden.png" className="w-[250px] h-[350px]" />
            </div>

            <div className="sticky top-[48vh] mb-[300px] self-end h-40"></div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section>
        <div className="mt-24 sm:-mt-[200px]">
          <div className="sm:flex sm:justify-center sm:items-center sm:mx-20">
            <div className="hidden sm:block mt-10 mx-8">
              <Image
                src={"/images/cliff.png"}
                alt="Spieler Bild"
                height={1920}
                width={1080}
                className="rounded-md object-cover w-[700px]"
              />
            </div>

            <div className="sm:w-3/4 sm:mx-14">
              <div ref={aboutRef} className="flex flex-col max-w-[400px] mx-10">
                <h1 className="tracking-tightest">
                  {aboutInView && <FlyIn text={"ABOUT"} />}
                </h1>
                <h1 className="text-6xl font-extrabold text-[#3550FF] self-end -mt-12">
                  {aboutInView && <FlyIn text={"ME"} />}
                </h1>
              </div>

              <div className="block sm:hidden mt-10 mx-8">
                <Image
                  src={"/images/cliff.png"}
                  alt="Spieler Bild"
                  height={1920}
                  width={1080}
                  className="rounded-md object-cover h-96"
                />
              </div>

              <div className="flex flex-col mt-12 mx-6">
                <h1 className="text-[#3550FF] text-2xl font-extrabold">
                  Hi! Ich bin Cliff,
                </h1>
                <p className="text-xl">
                  und seit fünf Jahren lebe ich meinen Traum als selbstständiger
                  Fußballmanager. Mein Job bringt mich quer durch Europa, immer
                  auf der Suche nach den besten Möglichkeiten für meine Spieler.
                  Mein Ziel? Ganz einfach: Ich möchte jedem meiner Klienten
                  dabei helfen, seine persönlichen und sportlichen Ziele zu
                  erreichen. Ob Karriereschritte,Vertragsverhandlungen oder
                  gezielte Weiterentwicklung – ich bin für meine Spieler da und
                  setze alles daran, dass sie ihr volles Potenzial ausschöpfen
                  und ihre Träume verwirklichen können.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
