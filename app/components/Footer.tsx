import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p className="site-footer__big" aria-hidden="true">Catch your <span>dreams</span></p>
        <div className="site-footer__row">
          <Link className="wordmark" href="/">Cliff<span>Ele</span>Ven</Link>
          <nav aria-label="Rechtliches">
            <Link href="/#kontakt">Kontakt</Link>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </nav>
          <p style={{ margin: 0 }}>© <span data-year="">{new Date().getFullYear()}</span> CliffEleVen. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
