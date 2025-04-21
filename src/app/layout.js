import './globals.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export const metadata = {
  title: "JYTY"
};


export default function Layout({ children }) {
  return (
    <html lang="fi">
      <body>
        <div className="layout">
          <div className="layout-navbar-footer">
            <Navbar />
          </div>
          <main className="layout-main">{children}</main>
          <div className="layout-navbar-footer">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}