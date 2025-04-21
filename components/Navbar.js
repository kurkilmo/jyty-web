import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => setHoveredLink(link);
  const handleMouseLeave = () => setHoveredLink(null);

  return (
    <header>
      <div className="logo-container">
        <div className="logo">
          <Link href="/">
            <img src="logo.png" alt="Jyty Logo" />
          </Link>
        </div>
        <Link href="/" className="logo-text desktop-only">
          Jyväskylän Teekkariyhdistys
        </Link>
      </div>
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <Link
              href="/vappulehti"
              className="nav-link"
              onMouseEnter={() => handleMouseEnter("vappulehti")}
              onMouseLeave={handleMouseLeave}
              style={{
                color: hoveredLink === "vappulehti" ? "#ff4500" : undefined,
              }}
            >
              Vappulehti
            </Link>
          </li>
          <li className="nav-item">
            <Link
              href="/hallitus"
              className="nav-link"
              onMouseEnter={() => handleMouseEnter("hallitus")}
              onMouseLeave={handleMouseLeave}
              style={{
                color: hoveredLink === "hallitus" ? "#ff4500" : undefined,
              }}
            >
              Hallitus
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}