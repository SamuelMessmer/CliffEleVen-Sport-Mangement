import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header" data-header="">
      <div className="wrap site-header__bar">
        <Link className="wordmark" href="/" aria-label="CliffEleVen – zur Startseite">Cliff<span>Ele</span>Ven</Link>
        <button className="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Menü öffnen" data-menu-toggle="">
          <span></span><span></span>
        </button>
        <nav className="nav" id="site-nav" aria-label="Hauptnavigation" data-menu="">
          <ul className="nav__links">
            <li><Link href="/#leistungen">Leistungen</Link></li>
            <li><Link href="/#kader">Kader</Link></li>
            <li><Link href="/#ablauf">Ablauf</Link></li>
            <li><Link href="/#about">About</Link></li>
          </ul>
          <Link className="btn" href="/#kontakt">Kontakt</Link>
        </nav>
      </div>
    </header>
  );
}
