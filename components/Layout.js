import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div style={layoutStyle}>
      <Navbar />
      <main style={mainStyle}>{children}</main>
      <Footer />
    </div>
  );
}

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
};

const mainStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
  padding: "20px",
};