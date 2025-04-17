import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => setHoveredLink(link);
  const handleMouseLeave = () => setHoveredLink(null);

  return (
    <header style={headerStyle}>
      <div style={logoContainerStyle}>
        <div style={logoStyle}>
          <Link href="/">
            <img
              src="logo.svg"
              alt="Jyty Logo"
              style={{ height: "50px", cursor: "pointer", borderRadius: "50%", backgroundColor: "#0070f3", padding: "10px" }}
            />
          </Link>
        </div>
        <Link href="/" style={logoTextStyle}>
          Jyväskylän Teekkariyhdistys
        </Link>
      </div>
      <nav style={navStyle}>
        <ul style={navListStyle}>
          <li style={navItemStyle}>
            <Link
              href="/vappulehti"
              style={{
                ...linkStyle,
                color: hoveredLink === "vappulehti" ? linkHoverStyle.color : linkStyle.color,
              }}
              onMouseEnter={() => handleMouseEnter("vappulehti")}
              onMouseLeave={handleMouseLeave}
            >
              Vappulehti
            </Link>
          </li>
          <li style={navItemStyle}>
            <Link
              href="/hallitus"
              style={{
                ...linkStyle,
                color: hoveredLink === "hallitus" ? linkHoverStyle.color : linkStyle.color,
              }}
              onMouseEnter={() => handleMouseEnter("hallitus")}
              onMouseLeave={handleMouseLeave}
            >
              Hallitus
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  height: "60px",
  flexShrink: 0,
};

const logoContainerStyle = {
  display: "flex",
  alignItems: "center",
};

const logoStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const logoTextStyle = {
  marginLeft: "10px",
  fontSize: "1.5em",
  fontWeight: "bold",
  color: "#0070f3",
  textDecoration: "none",
  cursor: "pointer",
};

const navStyle = {
  display: "flex",
  alignItems: "center",
};

const navListStyle = {
  display: "flex",
  listStyle: "none",
  margin: 0,
  padding: 0,
  flexWrap: "wrap",
};

const navItemStyle = {
  marginLeft: "20px",
};

const linkStyle = {
  textDecoration: "none",
  color: "#0070f3",
  fontSize: "1.2em",
  fontWeight: "bold",
  transition: "color 0.3s ease",
};

const linkHoverStyle = {
  color: "#ff4500",
};