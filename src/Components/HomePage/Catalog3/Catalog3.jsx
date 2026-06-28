import { useState, useEffect } from "react";
import "./Catalog3.css";

// ✅ Tuzatish 1: .png kengaytmasi qo'shildi
import img1 from "../../../assets/img1.png";
import img2 from "../../../assets/img2.png";
import img3 from "../../../assets/img3.png";
import img4 from "../../../assets/img4.png";
import img5 from "../../../assets/img5.png";
import img6 from "../../../assets/img6.png";
import img7 from "../../../assets/img7.png";
import img8 from "../../../assets/img8.png";
import img9 from "../../../assets/img9.png";
import img10 from "../../../assets/img10.png";
import img11 from "../../../assets/img11.png";
import img12 from "../../../assets/img12.png";

const products = [
  {
    id: 1,
    name: "Norwood Eman eshigi",
    desc: "Tabiiy eman, yashirin petlya, ovoz...",
    price: "2 890 000 so'm",
    img: img8,
    liked: true,
  },
  {
    id: 2,
    name: "Verona Oshxonasi",
    desc: "Kul massivi + tosh stol usti, Blum.",
    price: "28 900 000 so'm",
    img: img2,
    liked: false,
  },
  {
    id: 3,
    name: "Napoli Stul",
    desc: "Shiftgacha, LED yoritish, Hettich.",
    price: "11 900 000 so'm",
    img: img9,
    liked: false,
  },
  {
    id: 4,
    name: "Lugano Orol",
    desc: "Yong'oq qoplama, mermer orol.",
    price: "36 400 000 so'm",
    img: img4,
    liked: true,
  },
  {
    id: 5,
    name: "Milano Yotoqxona",
    desc: "Eman massivi, yumshoq boshlik.",
    price: "18 500 000 so'm",
    img: img5,
    liked: false,
  },
  {
    id: 6,
    name: "Roma Mehmonxona",
    desc: "Kulrang mato, eman oyoqlar.",
    price: "14 200 000 so'm",
    img: img6,
    liked: false,
  },
  {
    id: 7,
    name: "Firenze Stol",
    desc: "Tabiiy eman, 6 kishilik.",
    price: "9 800 000 so'm",
    img: img7,
    liked: true,
  },
  {
    id: 8,
    name: "Napoli Stul",
    desc: "Velvet qoplama, oltin oyoqlar.",
    price: "1 450 000 so'm",
    img: img1,
    liked: false,
  },
  {
    id: 9,
    name: "Torino Komod",
    desc: "Yong'oq, 6 tortmali, Blum.",
    price: "7 600 000 so'm",
    img: img3,
    liked: false,
  },
  {
    id: 10,
    name: "Genova Kitob javoni",
    desc: "Eman, LED yoritish, shiftgacha.",
    price: "12 300 000 so'm",
    img: img10,
    liked: false,
  },
  {
    id: 11,
    name: "Bologna TV zonasi",
    desc: "Kulrang MDF, eman aksent.",
    price: "16 700 000 so'm",
    img: img11,
    liked: true,
  },
  {
    id: 12,
    name: "Palermo Kabinet",
    desc: "Yong'oq massivi, charm detallar.",
    price: "22 100 000 so'm",
    img: img12,
    liked: false,
  },
];

const getVisibleCount = () => {
  if (window.innerWidth <= 480) return 1;
  if (window.innerWidth <= 768) return 2;
  if (window.innerWidth <= 1024) return 3;
  return 4;
};

function Catalog3() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  
  const [likedItems, setLikedItems] = useState(
    products.reduce((acc, p) => ({ ...acc, [p.id]: p.liked }), {})
  );

  const maxIndex = Math.max(0, products.length - visibleCount);

  useEffect(() => {
    const handleResize = () => {
      const newVisible = getVisibleCount();
      setVisibleCount(newVisible);
      
      const newMax = Math.max(0, products.length - newVisible);
      setCurrentIndex((prev) => Math.min(prev, newMax));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0)); 
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex)); 
  };

  const toggleLike = (id) => {
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const translatePercentage = (currentIndex * 100) / visibleCount;

  return (
    <section className="catalog">
      <div className="catalog-header">
        <h2 className="catalog-title">Katalog</h2>
        <a href="#" className="view-all">
          Ko'rish <span className="arrow">→</span>
        </a>
      </div>

      <div className="carousel-wrapper">
        <button
          className="nav-btn prev-btn"
          onClick={goPrev}
          aria-label="Oldingi"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Ko'rinadigan qism (viewport) */}
        <div className="carousel-viewport">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${translatePercentage}%)`,
            }}
          >
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <div className="card-image">
                  <img src={product.img} alt={product.name} />
                  <button
                    className={`like-btn ${likedItems[product.id] ? "active" : ""}`}
                    onClick={() => toggleLike(product.id)}
                    aria-label="Sevimlilarga qo'shish"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={likedItems[product.id] ? "#e74c3c" : "none"}>
                      <path
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                        stroke={likedItems[product.id] ? "#e74c3c" : "#333"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                <div className="card-body">
                  <h3 className="card-title">{product.name}</h3>
                  <p className="card-desc">{product.desc}</p>
                  <div className="card-footer">
                    <span className="card-price">{product.price}</span>
                    <button className="details-btn">Batafsil</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* O'ng tugma */}
        <button
          className="nav-btn next-btn"
          onClick={goNext}
          aria-label="Keyingi"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Indikator nuqtalar */}
      <div className="indicators">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </section>
  );
}

export default Catalog3;