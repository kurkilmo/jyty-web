import Layout from "../components/Layout";

const members = [
  {
    id: 1,
    name: "Juho Järvi",
    title: "Puheenjohtaja",
    image: "https://placehold.co/150", // Placeholder-kuva
  },
  {
    id: 2,
    name: "Eemil Hukkanen",
    title: "Varapuheenjohtaja",
    image: "https://placehold.co/150", // Placeholder-kuva
  },
  {
    id: 3,
    name: "Ilmo Kurki",
    title: "Sihteeri",
    image: "https://placehold.co/150", // Placeholder-kuva
  },
  {
    id: 4,
    name: "Nuutti Rantanen",
    title: "Rahastonhoitaja",
    image: "https://placehold.co/150", // Placeholder-kuva
  },
  {
    id: 5,
    name: "Kasper Pelkonen",
    title: "Kiltavastaava",
    image: "https://placehold.co/150", // Placeholder-kuva
  },
  {
    name: "Lassi Laitinen",
    title: "Teekkarikulttuurivastaava",
    image: "https://placehold.co/150", // Placeholder-kuva
  },
  {
    name: "Atte Heikkinen",
    title: "Viestintävastaava",
    image: "https://placehold.co/150", // Placeholder-kuva
  },
  {
    name: "Juho Kallijärvi",
    title: "Mediavastaava",
    image: "https://placehold.co/150", // Placeholder-kuva
  },
  {
    name: "Theodore Veistos",
    title: "Somevastaava",
    image: "https://placehold.co/150", // Placeholder-kuva
  },
];

export default function Hallitus() {
  return (
    <Layout>
      <div>
        <h1>Hallitus</h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {members.map((member) => (
            <div
              key={member.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                textAlign: "center",
                width: "200px",
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                style={{ borderRadius: "50%", width: "100px", height: "100px" }}
              />
              <h2 style={{ fontSize: "1.2em" }}>{member.name}</h2>
              <p style={{ fontStyle: "italic" }}>{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}