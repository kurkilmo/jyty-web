import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div style={layoutStyle}>
      <div style={navbarFooterStyle}>
        <Navbar />
      </div>
      <main style={mainStyle}>{children}</main>
      <div style={navbarFooterStyle}>
        <Footer />
      </div>
    </div>
  );
}

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  backgroundColor: "rgb(242,210,73)",
};

const mainStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flex: 1,
  padding: "20px",
};

const navbarFooterStyle = {
  backgroundColor: "rgb(230,65,157)",
};
