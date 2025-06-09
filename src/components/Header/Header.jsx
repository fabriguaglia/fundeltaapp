import { useEffect, useState } from "react";
import { Link } from "react-router";
import Logo from "./logofundelta.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`d-flex justify-content-between align-items-center px-4 py-3 fixed-top w-100 transition`}
      style={{
        backgroundColor: scrolled ? "#000000" : "transparent",
        transition: "background-color 0.3s ease",
        zIndex: 1000,
      }}
    >
      <a href="/" className="icon" rel="noreferrer">
        <img className="greensock-icon" src={Logo} width="200" alt="Logo" />
      </a>
      <ul className="d-flex gap-4 list-unstyled mb-0">
        <li>
          <Link className="text-white text-decoration-none fonttext" to="/contacto">Contacto</Link>
        </li>
      </ul>
    </header>
  );
}