import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="home-container">
        <h1 className="home-title">Jyväskylän teekkariyhdistys</h1>
        <p className="home-highlight">
          Huom! Sivun teema on räikeä vapun kunniaksi. Iloista vappua!
        </p>
        <p className="home-paragraph">
          Tervetuloa Jyväskylän Teekkariyhdistykseen! Olemme osa Jyväskylän
          yliopiston opiskelijayhteisöä, joka tarjoaa tukea ja mahdollisuuksia
          kaikille teknilliselle alalle suuntautuville opiskelijoille.
        </p>
        <h2 className="home-subtitle">Tulevat tapahtumat</h2>
        <ul className="home-list">
          <li>29.4 klo 17:00-20:00 - Jytyn Vapu Ivetys</li>
        </ul>
      </div>
    </Layout>
  );
}