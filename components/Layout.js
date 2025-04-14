import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div style={layoutStyle}>
      <header style={headerStyle}>
        <div style={logoStyle}>
          <Link href="/">
            <img
              src="https://placehold.co/150"
              alt="Jyty Logo"
              style={{ height: "50px", cursor: "pointer" }}
            />
          </Link>
        </div>
        <nav style={navStyle}>
          <ul style={navListStyle}>
            <li style={navItemStyle}>
              <Link href="/vappu">Vappulehti</Link>
            </li>
            <li style={navItemStyle}>
              <Link href="/hallitus">Hallitus</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main style={mainStyle}>{children}</main>
      <footer style={footerStyle}>
        <div style={footerContentStyle}>
          <p>© 2025 Jyväskylän teekkariyhdistys. Kaikki oikeudet pidätetään.</p>
          <div style={socialLinksStyle}></div>
        </div>
      </footer>
    </div>
  );
}

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
};

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
};

const navItemStyle = {
  marginLeft: "20px",
};

const mainStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  padding: "20px",
};

const footerStyle = {
  padding: "20px",
  textAlign: "center",
  height: "60px",
  flexShrink: 0,
};

const footerContentStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
};

const socialLinksStyle = {
  display: "flex",
  gap: "15px",
};