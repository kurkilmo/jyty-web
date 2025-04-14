import Layout from "../components/Layout";

const articles = [
  {
    id: 1,
    title: "Ensimmäinen artikkeli",
    content: "Tämä on ensimmäisen artikkelin sisältö.",
    image: "https://placehold.co/600x400", // Placeholder-kuva
  },
  {
    id: 2,
    title: "Toinen artikkeli",
    content: "Tämä on toisen artikkelin sisältö.",
    image: "https://placehold.co/600x400", // Placeholder-kuva
  },
  {
    id: 3,
    title: "Kolmas artikkeli",
    content: "Tämä on kolmannen artikkelin sisältö.",
    image: "https://placehold.co/600x400", // Placeholder-kuva
  },
];

export default function Vappu() {
  return (
    <Layout>
      <div>
        <h1>Artikkelit</h1>
        <div>
          {articles.map((article) => (
            <div key={article.id} style={{ marginBottom: "20px" }}>
              <h2>{article.title}</h2>
              <img
                src={article.image}
                alt={article.title}
                style={{ width: "100%", maxWidth: "600px", height: "auto" }}
              />
              <p>{article.content}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}