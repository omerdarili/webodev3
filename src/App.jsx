import "./App.css";
import React from "react";

function Arama({ aramaMetni, onSearch }) {
  const handleChange = (event) => onSearch(event);
  return (
    <div>
      <label htmlFor="arama">Ara: </label>
      <input
        id="arama"
        type="text"
        onChange={handleChange}
        value={aramaMetni}
      />
    </div>
  );
}

function Yazi({ id, url, baslik, yazar, yorum_sayisi, puan }) {
  return (
    <li key={id}>
      <span>
        <a href={url}>{baslik}</a>,
      </span>
      <span>
        <b>Yazar:</b> {yazar},{" "}
      </span>
      <span>
        <b>Yorum Sayısı:</b> {yorum_sayisi},{" "}
      </span>
      <span>
        <b>Puan:</b> {puan}
      </span>
    </li>
  );
}

// Bileşenlerin baş harfi büyük!
function Liste(props) {
  return (
    <ul>
      {props.yazilar.map(function (yazi) {
        return <Yazi key={yazi.id} {...yazi} />;
      })}{" "}
    </ul>
  );
}

function App() {
  const [aramaMetni, setAramaMetni] = React.useState(
    localStorage.getItem("aranan") || "React"
  );

  React.useEffect(() => {
    localStorage.setItem("aranan", aramaMetni);
  }, [aramaMetni]);

  const yaziListesi = [
    {
      baslik: "React Öğreniyorum",
      url: "www.sdu.edu.tr",
      yazar: "Sinan Yüksel",
      yorum_sayisi: 3,
      puan: 4,
      id: 0,
    },

    {
      baslik: "Web Teknolojileri ve Programlama",
      url: "wwww.google.com.tr",
      yazar: "Asım Yüksel",
      yorum_sayisi: 2,
      puan: 5,
      id: 1,
    },

    {
      baslik: "Kinyas ve Kayra",
      url: "https://www.dr.com.tr/kitap/kinyas-ve-kayra/edebiyat/roman/turkiye-roman/urunno=0000000131986",
      yazar: "Hakan Günday",
      yorum_sayisi: 14,
      puan: 4,
      id: 2,
    },
  
    {
      baslik: "Hamlet",
      url: "https://www.dr.com.tr/kitap/kinyas-ve-kayra/edebiyat/roman/turkiye-roman/urunno=0000000131986",
      yazar: "William Shakespeare",
      yorum_sayisi: 215,
      puan: 5,
      id: 3,
    },

    {
      baslik: "Uğultulu Tepeler",
      url: "https://www.dr.com.tr/Kitap/Ugultulu-Tepeler/Emily-Bronte/Edebiyat/Roman/Dunya-Klasik/urunno=0001788080001",
      yazar: "Emily Bronte",
      yorum_sayisi: 9,
      puan: 5,
      id: 4,
    },
  ];

  const arananYazilar = yaziListesi.filter(
    (item) =>
      item.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
      item.yazar.toLowerCase().includes(aramaMetni.toLowerCase())
  );

  // 1. aşama callback handler fonksiyonunu yazdık
  const handleSearch = (event) => setAramaMetni(event.target.value);

  return (
    <>
      <h1>Yazılar</h1>
      <Arama aramaMetni={aramaMetni} onSearch={handleSearch} />
      <p>
        <strong>{aramaMetni + " aranıyor.."}</strong>
      </p>
      <hr/>
 
        <Liste yazilar={arananYazilar} />
    
    </>
  );
}
export default App;