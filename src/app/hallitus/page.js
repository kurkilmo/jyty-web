const members = [
  {
    name: "Juho Järvi",
    title: "Puheenjohtaja",
    image: "https://placehold.co/150",
  },
  {
    name: "Eemil Hukkanen",
    title: "Varapuheenjohtaja",
    image: "https://placehold.co/150",
  },
  {
    name: "Ilmo Kurki",
    title: "Sihteeri",
    image: "https://placehold.co/150",
  },
  {
    name: "Nuutti Rantanen",
    title: "Rahastonhoitaja",
    image: "https://placehold.co/150",
  },
  {
    name: "Kasper Pelkonen",
    title: "Kiltavastaava",
    image: "https://placehold.co/150",
  },
  {
    name: "Lassi Laitinen",
    title: "Teekkarikulttuurivastaava",
    image: "https://placehold.co/150",
  },
  {
    name: "Atte Heikkinen",
    title: "Viestintävastaava",
    image: "https://placehold.co/150",
  },
  {
    name: "Juho Kallijärvi",
    title: "Mediavastaava",
    image: "https://placehold.co/150",
  },
  {
    name: "Theodore Veistos",
    title: "Somevastaava",
    image: "https://placehold.co/150",
  },
];

export default function Hallitus() {
  return (
    <div>
      <h1 className="hallitus-title">Hallitus</h1>
      <div className="hallitus-container">
        {members.map((member) => (
          <div key={member.name} className="hallitus-card">
            <img src={member.image} alt={member.name} />
            <h2>{member.name}</h2>
            <p>{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function generateMetadata() {
  return {
      title: "Hallitus"
  }
}