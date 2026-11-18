export default function Home() {
  return (
    <main id="top">
      {/* ============ HERO ============ */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__pitch" aria-hidden="true">
          <svg viewBox="0 0 1440 900" preserveAspectRatio="xMinYMid slice" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="-4" y="170" width="300" height="560"></rect>
            <rect x="-4" y="320" width="110" height="260"></rect>
            <circle cx="200" cy="450" r="4" fill="currentColor"></circle>
            <path d="M296 340a150 150 0 0 1 0 220"></path>
            <circle cx="1440" cy="450" r="190"></circle>
            <line x1="1440" y1="-10" x2="1440" y2="910"></line>
          </svg>
        </div>

        <div className="wrap hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Sportmanagement · Fußball · Europaweit</p>
            <h1 className="display hero__title" id="hero-title">
              <span className="line line--1">Catch</span>
              <span className="line line--2">Your</span>
              <span className="line line--3">Dreams.</span>
            </h1>
            <div className="hero__text">
              <p><strong>Für alle, die hoch hinaus wollen.</strong> Wir begleiten junge Fußballtalente auf dem Weg nach oben, mit Netzwerk, einem klaren Plan und jemandem an der Seite, der für sie verhandelt.</p>
              <div className="hero__actions">
                <img className="hero__arrow" src="/images/arrow.webp" alt="" width="219" height="199" />
                <a className="btn" href="/#kontakt">
                  Kontaktiere uns
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
                </a>
                <a className="btn btn--ghost" href="/#kader">Zum Kader</a>
              </div>
            </div>
          </div>

          <div className="hero__media">
            <img src="/images/osei.webp" alt="Ein Spieler im weißen Trikot mit der Nummer 99 zieht im Strafraum an einem grätschenden Gegenspieler vorbei" width="880" height="590" />
            <p className="hero__tag"><i aria-hidden="true"></i>Matchday</p>
          </div>
        </div>

        <div className="stats">
          <div className="wrap"><ul className="stats__list">
            <li className="stats__item"><span className="stats__num">12<sup>+</sup></span><span className="stats__label">Top-Athleten<br />in unserem Netzwerk</span></li>
            <li className="stats__item"><span className="stats__num">5</span><span className="stats__label">Jahre Erfahrung<br />als Spielerberater</span></li>
            <li className="stats__item"><span className="stats__num">EU</span><span className="stats__label">Im Einsatz für unsere<br />Spieler in ganz Europa</span></li>
          </ul></div>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          <ul className="marquee__group">
            <li>Karriereplanung</li><li>Vertragsverhandlung</li><li>Vereinswechsel</li><li>Coaching</li><li>Netzwerk</li><li>Persönliche Betreuung</li>
          </ul>
          <ul className="marquee__group">
            <li>Karriereplanung</li><li>Vertragsverhandlung</li><li>Vereinswechsel</li><li>Coaching</li><li>Netzwerk</li><li>Persönliche Betreuung</li>
          </ul>
        </div>
      </div>

      {/* ============ LEISTUNGEN ============ */}
      <section className="section" id="leistungen" aria-labelledby="leistungen-title">
        <div className="wrap">
          <div className="section__head reveal">
            <div>
              <p className="eyebrow">Was dich erwartet</p>
              <h2 className="display h2" id="leistungen-title">Mehr als 12 Top&#8209;Athleten. <em>Werde einer davon.</em></h2>
            </div>
            <p className="lede">Werde Teil unseres Netzwerks und mach dich bereit für Chancen, die du allein kaum bekommst. Das bekommst du bei CliffEleVen:</p>
          </div>

          <div className="offer">
            <div className="offer__media reveal">
              <img src="/images/foto2.webp" alt="Ein Spieler im blauen Trikot führt den Ball an einem Gegenspieler vorbei" width="888" height="920" loading="lazy" />
              <p className="offer__badge"><span>Fokus</span><strong>Deine Entwicklung</strong></p>
            </div>

            <ul className="offer__list">
              <li className="offer__item reveal">
                <span className="offer__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.5"></circle><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"></path><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.3c2.1.7 3.5 2.8 3.5 5.7"></path></svg>
                </span>
                <h3>Meetings mit Spielern</h3>
                <p>Du lernst andere Spieler aus unserem Netzwerk kennen, tauschst dich über Erfahrungen aus und wächst gemeinsam mit ihnen.</p>
              </li>
              <li className="offer__item reveal">
                <span className="offer__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="12" r="5"></circle><circle cx="12" cy="12" r="1.5"></circle></svg>
                </span>
                <h3>Coaching von unserem Team</h3>
                <p>Wir begleiten deine sportliche Entwicklung und geben dir ehrliches Feedback, auf dem Platz und daneben.</p>
              </li>
              <li className="offer__item reveal">
                <span className="offer__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6M10 21h4"></path><path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1.1 1.3 1.1 2.2h5c0-.9.5-1.7 1.1-2.2A6 6 0 0 0 12 3Z"></path></svg>
                </span>
                <h3>Tipps von Profis</h3>
                <p>Erfahrene Profis teilen mit dir, worauf es auf dem nächsten Level wirklich ankommt.</p>
              </li>
              <li className="offer__item reveal">
                <span className="offer__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z"></path><path d="M14 3v5h5M9 13h6M9 17h4"></path></svg>
                </span>
                <h3>Verträge &amp; Karriereschritte</h3>
                <p>Von der Vertragsverhandlung bis zum Vereinswechsel: Wir sorgen dafür, dass jeder Schritt zu dir und deinen Zielen passt.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============ KADER ============ */}
      <section className="section kader" id="kader" aria-labelledby="kader-title">
        <div className="wrap">
          <div className="section__head reveal">
            <div>
              <p className="eyebrow">Unser Kader</p>
              <h2 className="display h2" id="kader-title">Auf dem Platz <em>zu Hause.</em></h2>
            </div>
            <p className="lede">Unsere Spieler stehen jedes Wochenende auf dem Rasen und geben dort alles. Ein paar Eindrücke aus ihrem Alltag.</p>
          </div>

          <ul className="kader__grid" aria-label="Bilder unserer Spieler">
            <li><figure className="kader__card reveal"><div className="kader__frame"><img src="/images/foto2.webp" alt="Spieler im blauen Trikot im Zweikampf" width="888" height="920" loading="lazy" /></div><figcaption><b>Zweikampf</b></figcaption></figure></li>
            <li><figure className="kader__card reveal"><div className="kader__frame"><img src="/images/terry.webp" alt="Spieler im grünen Trikot vor vollen Rängen" width="690" height="933" loading="lazy" /></div><figcaption><b>Matchday</b></figcaption></figure></li>
            <li><figure className="kader__card reveal"><div className="kader__frame"><img src="/images/sanden.webp" alt="Spieler im schwarz-gelben Trikot am Ball" width="573" height="627" loading="lazy" /></div><figcaption><b>Am Ball</b></figcaption></figure></li>
            <li><figure className="kader__card reveal"><div className="kader__frame"><img src="/images/osei.webp" alt="Spieler mit der Nummer 99 im Strafraum" width="880" height="590" loading="lazy" style={{ objectPosition: "52% 30%" }} /></div><figcaption><b>Im Strafraum</b></figcaption></figure></li>
          </ul>
          <p className="kader__note" aria-hidden="true">Wischen für mehr →</p>
        </div>
      </section>

      {/* ============ ABLAUF ============ */}
      <section className="section" id="ablauf" aria-labelledby="ablauf-title">
        <div className="wrap">
          <div className="section__head reveal">
            <div>
              <p className="eyebrow">So startest du</p>
              <h2 className="display h2" id="ablauf-title">In drei Schritten <em>zu uns.</em></h2>
            </div>
            <p className="lede">Ohne Druck und ohne Verpflichtung. Am Anfang steht ein ehrliches Gespräch darüber, wo du stehst und wo du hinwillst.</p>
          </div>

          <ol className="steps">
            <li className="step reveal">
              <span className="step__num" aria-hidden="true">1</span>
              <h3>Anfrage senden</h3>
              <p>Schreib uns über das Formular ein paar Zeilen zu dir: Verein, Position, Ziele. Das ist völlig unverbindlich.</p>
            </li>
            <li className="step reveal">
              <span className="step__num" aria-hidden="true">2</span>
              <h3>Kennenlernen</h3>
              <p>Wir melden uns persönlich bei dir und lernen dich im Gespräch kennen, mit allen Fragen, die du hast.</p>
            </li>
            <li className="step reveal">
              <span className="step__num" aria-hidden="true">3</span>
              <h3>Gemeinsam loslegen</h3>
              <p>Passt es auf beiden Seiten, machen wir aus deinen Zielen einen konkreten Plan und setzen ihn Schritt für Schritt um.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section className="section" id="about" aria-labelledby="about-title">
        <div className="wrap about">
          <div className="about__media reveal">
            <img src="/images/cliff.webp" alt="Cliff mit einem seiner Spieler in der Innenstadt" width="670" height="903" loading="lazy" />
          </div>
          <div className="about__copy reveal">
            <p className="eyebrow">About me</p>
            <h2 className="display" id="about-title">Hi, ich bin <em>Cliff.</em></h2>
            <p><strong>Seit fünf Jahren lebe ich meinen Traum als selbstständiger Spielerberater.</strong> Mein Job führt mich quer durch Europa, zu Vereinen, Trainern und Spielen, immer auf der Suche nach der besten Chance für meine Spieler.</p>
            <p>Ob der nächste Karriereschritt, eine Vertragsverhandlung oder die gezielte Weiterentwicklung: Ich bin für meine Spieler da, wenn es darauf ankommt, und setze alles daran, dass sie ihr volles Potenzial ausschöpfen.</p>
            <blockquote className="about__quote">„Mein Ziel ist einfach: Jeder meiner Spieler soll seine sportlichen und persönlichen Ziele erreichen.“</blockquote>
            <p className="about__sign">Cliff Asare · Gründer von CliffEleVen</p>
          </div>
        </div>
      </section>

      {/* ============ KONTAKT ============ */}
      <section className="contact" id="kontakt" aria-labelledby="kontakt-title">
        <div className="wrap">
          <div className="contact__panel reveal">
            <div className="contact__intro">
              <p className="eyebrow">Kontakt</p>
              <h2 className="display" id="kontakt-title">Dein nächster Schritt <em>beginnt hier.</em></h2>
              <p className="lede">Erzähl uns kurz, wer du bist und wo du hinwillst. Wir melden uns persönlich bei dir.</p>
              <ul className="contact__points">
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"></path></svg>Unverbindlich und vertraulich</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"></path></svg>Persönliche Antwort</li>
                <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"></path></svg>Für Spieler aus ganz Europa</li>
              </ul>
            </div>

            <form className="form" data-contact-form="">
              <div className="form__row">
                <div className="field">
                  <label htmlFor="firstname">Vorname</label>
                  <input id="firstname" name="firstname" type="text" autoComplete="given-name" placeholder="Dein Vorname" required minLength={2} maxLength={40} />
                </div>
                <div className="field">
                  <label htmlFor="lastname">Nachname</label>
                  <input id="lastname" name="lastname" type="text" autoComplete="family-name" placeholder="Dein Nachname" required minLength={2} maxLength={40} />
                </div>
              </div>
              <div className="form__row">
                <div className="field">
                  <label htmlFor="email">E-Mail</label>
                  <input id="email" name="email" type="email" autoComplete="email" placeholder="name@beispiel.de" required maxLength={120} />
                </div>
                <div className="field">
                  <label htmlFor="telephoneNumber">Telefon <small>(optional)</small></label>
                  <input id="telephoneNumber" name="telephoneNumber" type="tel" autoComplete="tel" placeholder="+49 123 456789" maxLength={20} />
                </div>
              </div>
              <div className="field">
                <label htmlFor="message">Nachricht</label>
                <textarea id="message" name="message" placeholder="Verein, Position, Alter und was du dir von einem Berater wünschst …" maxLength={1000}></textarea>
              </div>
              <button className="btn" type="submit">
                <span data-label="">Anfrage senden</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
              </button>
              <p className="form__status" role="status" aria-live="polite" data-form-status=""></p>
              <p className="form__legal">Deine Angaben nutzen wir ausschließlich, um mit dir in Kontakt zu treten. Eine Weitergabe an Dritte oder eine Nutzung für andere Zwecke findet nicht statt. Mehr dazu in der <a href="/datenschutz">Datenschutzerklärung</a>.</p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
