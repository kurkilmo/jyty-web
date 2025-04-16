import Link from 'next/link';

export default function Navbar() {
    return (
        <header style={headerStyle}>
        <div style={logoStyle}>
          <Link href="/">
            <img
              src="logo.svg"
              alt="Jyty Logo"
              style={{ height: "50px", cursor: "pointer" }}
            />
          </Link>
        </div>
        <nav style={navStyle}>
          <ul style={navListStyle}>
            <li style={navItemStyle}>
              <Link href="/vappulehti">Vappulehti</Link>
            </li>
            <li style={navItemStyle}>
              <Link href="/hallitus">Hallitus</Link>
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

const logoStyle = {
  display: "flex",
  alignItems: "center",
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