import { useState, useEffect } from "react";
import "./Catalog3.css";

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
    name: "Zamonaviy Katalog",
    desc: "Tabiiy eman, yashirin petlya, ovoz...",
    price: "2 890 000 so'm",
    img: img8,
    liked: true,
    fullDesc: "Yuqori sifatli tabiiy eman yog'ochidan tayyorlangan. Yashirin petlyalar va ovoz izolyatsiyasi mavjud. Zamonaviy dizayn va mustahkamlik.",
    material: "Tabiiy eman",
    dimensions: "80x200x4 cm",
    warranty: "24 oy",
  },
  {
    id: 2,
    name: "Sifatli Kiyim ilg'ich",
    desc: "Kul massivi + tosh stol usti, Blum.",
    price: "28 900 000 so'm",
    img: img2,
    liked: false,
    fullDesc: "Kul massividan tayyorlangan, marmar stol usti bilan. Blum mexanizmlari o'rnatilgan. Oshxona uchun ideal yechim.",
    material: "Kul massivi + marmar",
    dimensions: "240x120x90 cm",
    warranty: "36 oy",
  },
  {
    id: 3,
    name: "Arzon sandiq",
    desc: "Shiftgacha, LED yoritish, Hettich.",
    price: "11 900 000 so'm",
    img: img9,
    liked: false,
    fullDesc: "Shiftgacha bo'lgan garderob. LED yoritish tizimi va Hettich mexanizmlari. Keng ichki joy.",
    material: "MDF + shpon",
    dimensions: "270x180x60 cm",
    warranty: "24 oy",
  },
  {
    id: 4,
    name: "Milano Yotoqxona",
    desc: "Yong'oq qoplama, mermer orol.",
    price: "36 400 000 so'm",
    img: img4,
    liked: true,
    fullDesc: "Yong'oq shpon bilan qoplangan, marmar orol bilan. Zamonaviy oshxona uchun ajoyib tanlov.",
    material: "Yong'oq shpon + marmar",
    dimensions: "300x200x90 cm",
    warranty: "48 oy",
  },
  {
    id: 5,
    name: "Milano Yotoqxona",
    desc: "Eman massivi, yumshoq boshlik.",
    price: "18 500 000 so'm",
    img: img5,
    liked: false,
    fullDesc: "Eman massividan tayyorlangan yotoqxona to'plami. Yumshoq boshlik va zamonaviy dizayn.",
    material: "Eman massivi",
    dimensions: "200x220x120 cm",
    warranty: "36 oy",
  },
  {
    id: 6,
    name: "Roma Mehmonxona",
    desc: "Kulrang mato, eman oyoqlar.",
    price: "14 200 000 so'm",
    img: img6,
    liked: false,
    fullDesc: "Kulrang matodan tayyorlangan, eman oyoqlar bilan. Qulay va chiroyli mehmonxona mebeli.",
    material: "Mato + eman",
    dimensions: "220x90x85 cm",
    warranty: "24 oy",
  },
  {
    id: 7,
    name: "Firenze Stol",
    desc: "Tabiiy eman, 6 kishilik.",
    price: "9 800 000 so'm",
    img: img7,
    liked: true,
    fullDesc: "Tabiiy emandan yasalgan ovqatlanish stoli. 6 kishilik, mustahkam va chiroyli.",
    material: "Tabiiy eman",
    dimensions: "180x90x75 cm",
    warranty: "24 oy",
  },
  {
    id: 8,
    name: "Napoli Stul",
    desc: "Velvet qoplama, oltin oyoqlar.",
    price: "1 450 000 so'm",
    img: img1,
    liked: false,
    fullDesc: "Velvet matodan tayyorlangan, oltin rangli oyoqlar bilan. Zamonaviy va qulay stul.",
    material: "Velvet + metall",
    dimensions: "50x55x85 cm",
    warranty: "12 oy",
  },
  {
    id: 9,
    name: "Torino Komod",
    desc: "Yong'oq, 6 tortmali, Blum.",
    price: "7 600 000 so'm",
    img: img3,
    liked: false,
    fullDesc: "Yong'oqdan yasalgan, 6 tortmali komod. Blum mexanizmlari bilan jihozlangan.",
    material: "Yong'oq massivi",
    dimensions: "120x50x80 cm",
    warranty: "24 oy",
  },
  {
    id: 10,
    name: "Genova Kitob javoni",
    desc: "Eman, LED yoritish, shiftgacha.",
    price: "12 300 000 so'm",
    img: img10,
    liked: false,
    fullDesc: "Emandan yasalgan, shiftgacha bo'lgan kitob javoni. LED yoritish tizimi mavjud.",
    material: "Eman shpon",
    dimensions: "270x120x35 cm",
    warranty: "24 oy",
  },
  {
    id: 11,
    name: "Bologna TV zonasi",
    desc: "Kulrang MDF, eman aksent.",
    price: "16 700 000 so'm",
    img: img11,
    liked: true,
    fullDesc: "Kulrang MDF va eman aksentlar bilan. Zamonaviy TV zonasi uchun ideal.",
    material: "MDF + eman",
    dimensions: "240x50x180 cm",
    warranty: "24 oy",
  },
  {
    id: 12,
    name: "Palermo Kabinet",
    desc: "Yong'oq massivi, charm detallar.",
    price: "22 100 000 so'm",
    img: img12,
    liked: false,
    fullDesc: "Yong'oq massividan yasalgan kabinet. Charm detallar bilan bezatilgan, klassik dizayn.",
    material: "Yong'oq + charm",
    dimensions: "200x60x200 cm",
    warranty: "36 oy",
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
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  // ESC tugmasi bilan modalni yopish
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSelectedProduct(null);
      }
    };

    if (selectedProduct) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [selectedProduct]);

  const goNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const toggleLike = (id) => {
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const openDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeDetails = () => {
    setSelectedProduct(null);
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
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill={likedItems[product.id] ? "#e74c3c" : "none"}
                    >
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
                    <button
                      className="details-btn"
                      onClick={() => openDetails(product)}
                    >
                      Batafsil
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

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

      <div className="indicators">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>

      {/* MODAL - Rasm tepada, ma'lumotlar pastda */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={closeDetails}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeDetails} aria-label="Yopish">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* RASM TEPADA */}
            <div className="modal-image-wrapper">
              <img
                src={selectedProduct.img}
                alt={selectedProduct.name}
                className="modal-image"
              />
            </div>

            {/* MA'LUMOTLAR PASTDA */}
            <div className="modal-info">
              <h3 className="modal-title">{selectedProduct.name}</h3>
              <p className="modal-price">{selectedProduct.price}</p>

              <div className="modal-description">
                <h4>Tavsif:</h4>
                <p>{selectedProduct.fullDesc}</p>
              </div>

              <div className="modal-specs">
                <div className="spec-item">
                  <span className="spec-label">Material:</span>
                  <span className="spec-value">{selectedProduct.material}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">O'lchamlari:</span>
                  <span className="spec-value">{selectedProduct.dimensions}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Kafolat:</span>
                  <span className="spec-value">{selectedProduct.warranty}</span>
                </div>
              </div>

              <div className="modal-actions">
                <button className="btn-order">Buyurtma berish</button>
                <button className="btn-consult">Maslahat olish</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Catalog3;