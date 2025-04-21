import Layout from "../components/Layout";

const articles = [
  {
    id: 1,
    title: "Rento ruusu",
    content: `
      <p>Kaikki alkoi rennosta Ruususta!</p>
      <p>Se ilta Kuokkalasssa oli juuri sellainen kuin pitääkin: aivan liian hämärä, jopa hieman myrskyinen, ja liian paljon straffia mukissa. Näin ainakin me sen muistamme. Siellä pienessä saunallisessa yksiössä teekkarihenkiset vanhukset kokoontuivat miettimään Jyväskylän teekkarien tulevaisuutta. Uudet teknilliset alat näkyivät jo horisontissa, eikä varmuutta kuka vie teekkari sanomaa eteenpäin. Näin kolme vähemmän uljasta sanansaattajaa päätyivät pohtimaan tulevaa rennon RUUSUN & saunan äärellä. Tästä JYTY sai alkunsa.</p>
      <p>Kortit pyörivät, lasit tyhjenivät ja vähitellen boolin inspiroimana alkoi syntyä ideoita. Niistä suurin tai ainakin sillä hetkellä kirkkaimmalta tuntunut ajatus oli vappulehdestä. Sellaisesta, joka ei olisi pelkkä kasa kömpelöjä vitsejä ja jollain Paintilla tehtyjä sarjakuvia (vaikka niitäkin tulisi). Lehden piti jytistä. Sen piti olla sellainen, josta mummokin ilahtuisi. Yhteinen motivaatio oli tuottaa kehnoa journalismia ja syventyä teekkarien salaisuuksien kammioon. Myöhemmin ajatus kuitenkin syveni </p>
      <p>Ensin tuli nimi, sitten kolme vanhusta, jotka vannottiin vastuuhenkilöiksi ennen kuin he ehtivät kunnolla tajuta mistä on kyse. Sitten tapahtui Telegram-ryhmän, hemmo piirsi kannen, ja joku kolmas keksi yhdistykselle virallisen nimen aikana, jolloin virallisuus oli hyvin suhteellinen käsite.</p>
      <p>Vaikka tarina alkoi hämyisestä Kuokkalasta ja kädenlämpöisestä boolista, se elää yhä jokaisessa huonossa ideassa, joka muuttuu legendaksi.</p>
    `,
    image: "rentoruusu.JPG",
    author: "Eemil Hukkanen ja Kasper Pelkonen",
  },
  {
    id: 2,
    title: "Perustamiskokous",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat consectetur mi non pulvinar. Cras elementum arcu a erat dictum elementum at sit amet dui. Nam quis molestie elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam nec justo id mi tristique euismod. Donec ac viverra lectus, eget faucibus lorem. Donec gravida ornare ligula, a eleifend purus. Aliquam sed cursus tortor, sed facilisis nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      <p>Proin auctor elementum bibendum. Mauris dapibus neque at nibh lacinia finibus nec sit amet felis. Proin quis turpis purus. Proin aliquet libero mi, a scelerisque ipsum hendrerit eget. Vestibulum vel scelerisque tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam aliquam viverra viverra. Donec luctus maximus ipsum, at maximus enim interdum et. Fusce et nulla tincidunt, scelerisque odio vitae, varius arcu. Praesent porta semper ipsum vitae eleifend. Donec sit amet gravida dui. Sed non mauris blandit, laoreet massa vel, feugiat velit. Phasellus lacus massa, blandit quis augue in, luctus molestie neque. Maecenas quis viverra libero, condimentum volutpat magna.</p>
      <p>Phasellus ante metus, commodo at neque vel, elementum rutrum lectus. Duis venenatis tellus tortor. Curabitur scelerisque ultricies lacus sit amet venenatis. Sed odio eros, vulputate eget ante ac, malesuada venenatis arcu. In eleifend sagittis nisi, vel ornare est dignissim nec. Nunc non dui sed odio ultrices dignissim ut quis sapien. Fusce tincidunt porttitor ipsum a luctus. Suspendisse eget arcu vitae ex venenatis feugiat. Vivamus sagittis, mauris in auctor vulputate, tortor augue facilisis ipsum, rutrum vulputate augue neque ac justo. Nulla est nunc, imperdiet et mauris at, facilisis ultricies velit. Morbi turpis mauris, efficitur sed tincidunt sed, faucibus laoreet tortor. Vivamus egestas lectus libero, viverra ultrices purus accumsan sed. Nullam justo velit, congue in libero in, pellentesque accumsan felis.</p>
    `,
    image: "perustamis.jpg",
    author: "En muista joku",
  },
  {
    id: 3,
    title: "joo joku artikkeli",
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat consectetur mi non pulvinar. Cras elementum arcu a erat dictum elementum at sit amet dui. Nam quis molestie elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam nec justo id mi tristique euismod. Donec ac viverra lectus, eget faucibus lorem. Donec gravida ornare ligula, a eleifend purus. Aliquam sed cursus tortor, sed facilisis nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      <p>Proin auctor elementum bibendum. Mauris dapibus neque at nibh lacinia finibus nec sit amet felis. Proin quis turpis purus. Proin aliquet libero mi, a scelerisque ipsum hendrerit eget. Vestibulum vel scelerisque tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam aliquam viverra viverra. Donec luctus maximus ipsum, at maximus enim interdum et. Fusce et nulla tincidunt, scelerisque odio vitae, varius arcu. Praesent porta semper ipsum vitae eleifend. Donec sit amet gravida dui. Sed non mauris blandit, laoreet massa vel, feugiat velit. Phasellus lacus massa, blandit quis augue in, luctus molestie neque. Maecenas quis viverra libero, condimentum volutpat magna.</p>
      <p>Phasellus ante metus, commodo at neque vel, elementum rutrum lectus. Duis venenatis tellus tortor. Curabitur scelerisque ultricies lacus sit amet venenatis. Sed odio eros, vulputate eget ante ac, malesuada venenatis arcu. In eleifend sagittis nisi, vel ornare est dignissim nec. Nunc non dui sed odio ultrices dignissim ut quis sapien. Fusce tincidunt porttitor ipsum a luctus. Suspendisse eget arcu vitae ex venenatis feugiat. Vivamus sagittis, mauris in auctor vulputate, tortor augue facilisis ipsum, rutrum vulputate augue neque ac justo. Nulla est nunc, imperdiet et mauris at, facilisis ultricies velit. Morbi turpis mauris, efficitur sed tincidunt sed, faucibus laoreet tortor. Vivamus egestas lectus libero, viverra ultrices purus accumsan sed. Nullam justo velit, congue in libero in, pellentesque accumsan felis.</p>
    `,
    image: "https://placehold.co/600x400",
    author: "Kissa",
  },
];

export default function Vappu() {
  return (
    <Layout>
      <div className="container">
        <h1 className="vappu-title">Jyty Vapu_leho</h1>
        <div>
          {articles.map((article) => (
            <div key={article.id} className="article-container">
              <h2 className="article-title">{article.title}</h2>
              <figure className="article-figure">
                <img src={article.image} alt={article.title} className="article-image" />
                <figcaption className="article-caption">{`Kuva: ${article.title}`}</figcaption>
              </figure>
              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: article.content }}
              ></div>
              <p className="article-author">{`Kirjoittanut: ${article.author}`}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}