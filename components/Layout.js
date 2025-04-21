import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <div className="layout-navbar-footer">
        <Navbar />
      </div>
      <main className="layout-main">{children}</main>
      <div className="layout-navbar-footer">
        <Footer />
      </div>
    </div>
  );
}
