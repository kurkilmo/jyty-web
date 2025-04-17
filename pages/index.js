import Layout from "../components/Layout";

export default function Home() {
    return (
      <Layout>
        <div style={containerStyle}>
          <h1 style={{ fontSize: "3em", marginBottom: "20px" }}>Jyväskylän teekkariyhdistys</h1>
          <p style={{ fontSize: "1.2em", fontStyle: "italic", color: "#ff0000", marginBottom: "20px" }}>
            Huom! Sivun teema on räikeä vapun kunniaksi. Iloista vappua!
          </p>
          <p style={{ fontSize: "1.5em", lineHeight: "1.8" }}>
            Tervetuloa Jyväskylän Teekkariyhdistykseen! Olemme osa Jyväskylän
            yliopiston opiskelijayhteisöä, joka tarjoaa tukea ja mahdollisuuksia
            kaikille teknilliselle alalle suuntautuville opiskelijoille.
          </p>
          <h2 style={{ fontSize: "2em", marginTop: "40px", marginBottom: "20px" }}>Tulevat tapahtumat</h2>
          <ul style={{ fontSize: "1.5em", lineHeight: "1.8", listStyleType: "circle", paddingLeft: "20px" }}>
            <li>29.4 klo 17:00-20:00 - Jytyn Vapu Ivetys</li>
          </ul>
        </div>
      </Layout>
    );
}

const containerStyle = {
    maxWidth: "600px",
    margin: "0 auto 0 50px",
    padding: "20px",
};