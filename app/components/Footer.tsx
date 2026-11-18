export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p className="site-footer__big" aria-hidden="true">Catch your <span>dreams</span></p>
        <div className="site-footer__row">
          <a className="wordmark" href="/">Cliff<span>Ele</span>Ven</a>
          <nav aria-label="Rechtliches">
            <a href="/#kontakt">Kontakt</a>
            <a href="/impressum">Impressum</a>
            <a href="/datenschutz">Datenschutz</a>
          </nav>
          <p style={{ margin: 0 }}>© <span data-year="">{new Date().getFullYear()}</span> CliffEleVen. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
