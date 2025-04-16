import Layout from "../components/Layout";

const articles = [
  {
    id: 1,
    title: "Rento ruusu",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo justo a nunc efficitur vehicula in non sem. Vestibulum lorem libero, convallis ac condimentum id, lobortis nec nisl. Maecenas erat urna, elementum in erat non, sagittis auctor dolor. Sed sit amet est et turpis posuere pellentesque quis sed purus. Proin elementum faucibus dignissim. Aliquam molestie faucibus ante, eu cursus lectus cursus et. Nam a viverra leo, in posuere dui. Aenean enim mauris, scelerisque sit amet magna vel, fringilla blandit lorem. Cras ac quam at lacus imperdiet faucibus sed at dui. Vivamus quam lorem, eleifend ac ex et, euismod feugiat massa.",
    image: "rentoruusu.JPG", // Placeholder-kuva
  },
  {
    id: 2,
    title: "Perustamiskokous",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo justo a nunc efficitur vehicula in non sem. Vestibulum lorem libero, convallis ac condimentum id, lobortis nec nisl. Maecenas erat urna, elementum in erat non, sagittis auctor dolor. Sed sit amet est et turpis posuere pellentesque quis sed purus. Proin elementum faucibus dignissim. Aliquam molestie faucibus ante, eu cursus lectus cursus et. Nam a viverra leo, in posuere dui. Aenean enim mauris, scelerisque sit amet magna vel, fringilla blandit lorem. Cras ac quam at lacus imperdiet faucibus sed at dui. Vivamus quam lorem, eleifend ac ex et, euismod feugiat massa.",
    image: "perustamis.jpg", // Testikuva
  },
  {
    id: 3,
    title: "joo joku artikkeli",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc commodo justo a nunc efficitur vehicula in non sem. Vestibulum lorem libero, convallis ac condimentum id, lobortis nec nisl. Maecenas erat urna, elementum in erat non, sagittis auctor dolor. Sed sit amet est et turpis posuere pellentesque quis sed purus. Proin elementum faucibus dignissim. Aliquam molestie faucibus ante, eu cursus lectus cursus et. Nam a viverra leo, in posuere dui. Aenean enim mauris, scelerisque sit amet magna vel, fringilla blandit lorem. Cras ac quam at lacus imperdiet faucibus sed at dui. Vivamus quam lorem, eleifend ac ex et, euismod feugiat massa.",
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