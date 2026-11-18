export default function Header() {
  return (
    <header className="site-header" data-header="">
      <div className="wrap site-header__bar">
        <a className="wordmark" href="/" aria-label="CliffEleVen – zur Startseite">Cliff<span>Ele</span>Ven</a>
        <button className="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Menü öffnen" data-menu-toggle="">
          <span></span><span></span>
        </button>
        <nav className="nav" id="site-nav" aria-label="Hauptnavigation" data-menu="">
          <ul className="nav__links">
            <li><a href="/#leistungen">Leistungen</a></li>
            <li><a href="/#kader">Kader</a></li>
            <li><a href="/#ablauf">Ablauf</a></li>
            <li><a href="/#about">About</a></li>
          </ul>
          <a className="btn" href="/#kontakt">Kontakt</a>
        </nav>
      </div>
    </header>
  );
}
