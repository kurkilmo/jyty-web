export default function () {
    return (
        <footer style={footerStyle}>
        <div style={footerContentStyle}>
          <p>© 2025 Jyväskylän teekkariyhdistys. Kaikki oikeudet pidätetään.</p>
          <div style={socialLinksStyle}></div>
        </div>
      </footer>
    )
}

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