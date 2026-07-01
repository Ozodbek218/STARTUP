import React, { useState, useEffect, useMemo, useRef } from "react";
import "./Catalog1.css";
import image1 from "../../../assets/image1.png";
import image2 from "../../../assets/image2.png";
import image3 from "../../../assets/image3.png";
import image4 from "../../../assets/image4.png";
import image5 from "../../../assets/image5.png";
import image6 from "../../../assets/image6.png";
import image7 from "../../../assets/image7.png";
import image8 from "../../../assets/image8.png";

const products = [
  {
    id: 1,
    category: "MAXSUS MEBEL",
    title: "Buyurtma Mebel",
    description: "Chizmalaringiz bo'yicha 14 kundan.",
    price: null,
    badge: "Buyurtma bo'yicha",
    badgeType: "order",
    img: image1,
    favorite: false,
  },
  {
    id: 2,
    category: "ICHKI ESHIKLAR",
    title: "Norwood Dub Eshik",
    description: "Tabiiy dub, yashirin ilgaklar, ovoz izolyatsiyasi.",
    price: "2 890 000",
    badge: "Omborda bor",
    badgeType: "stock",
    img: image2,
    favorite: true,
  },
  {
    id: 3,
    category: "OSHJONA MEBELI",
    title: "Lugano Orol Oshxona",
    description: "Yong'oq shpon, marmar orol.",
    price: "36 400 000",
    badge: "Buyurtma bo'yicha",
    badgeType: "order",
    img: image3,
    favorite: true,
  },
  {
    id: 4,
    category: "OSHJONA MEBELI",
    title: "Verona Oshxona",
    description: "Yasen qattiq yog'och + tosh ustki, Blum.",
    price: "28 900 000",
    badge: "Buyurtma bo'yicha",
    badgeType: "order",
    img: image4,
    favorite: false,
  },
  {
    id: 5,
    category: "ICHKI ESHIKLAR",
    title: "Murano Oq Dub",
    description: "Minimal profil, magnit qulf.",
    price: "3 450 000",
    badge: "Omborda bor",
    badgeType: "stock",
    img: image5,
    favorite: false,
  },
  {
    id: 6,
    category: "GARDEROBLAR",
    title: "Alto Garderob",
    description: "Shipgacha, LED yoritish, Hettich.",
    price: "11 900 000",
    badge: "Omborda bor",
    badgeType: "stock",
    img: image6,
    favorite: false,
  },
  {
    id: 7,
    category: "OFIS MEBELI",
    title: "Meridian Ofis",
    description: "Rahbar stoli, javonlar, devor panellari.",
    price: "17 200 000",
    badge: "Omborda bor",
    badgeType: "stock",
    img: image7,
    favorite: false,
  },
  {
    id: 8,
    category: "ICHKI ESHIKLAR",
    title: "Riviera Shpon",
    description: "Aşınmaya bardoshli lak, 16 rang.",
    price: "2 190 000",
    badge: "Omborda bor",
    badgeType: "stock",
    img: image8,
    favorite: false,
  },
];

const categories = [
  "Barchasi",
  "Ichki Eshiklar",
  "Oshxona Mebeli",
  "Garderoblar",
  "Ofis Mebeli",
  "Maxsus Mebel",
];

const sortOptions = [
  "Mashhur",
  "Narx: Arzondan Qimmatga",
  "Narx: Qimmatdan Arzonga",
  "Yangi",
];

const ITEMS_PER_PAGE = 8; 

function Catalog1() {
  const [activeFilter, setActiveFilter] = useState("Barchasi");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Mashhur");
  const [sortOpen, setSortOpen] = useState(false);
  const [favorites, setFavorites] = useState({ 2: true, 3: true });
  const [compareList, setCompareList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cartItems, setCartItems] = useState({});
  const [showOrderModal, setShowOrderModal] = useState(null);
  const [loadedCards, setLoadedCards] = useState([]);

  const sortWrapperRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadedCards(products.map((_, i) => i));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        sortWrapperRef.current &&
        !sortWrapperRef.current.contains(e.target)
      ) {
        setSortOpen(false);
      }
    };

    if (sortOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sortOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSortOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeFilter !== "Barchasi") {
      result = result.filter((p) => {
        const catMap = {
          "Ichki Eshiklar": "ICHKI ESHIKLAR",
          "Oshxona Mebeli": "OSHJONA MEBELI",
          Garderoblar: "GARDEROBLAR",
          "Ofis Mebeli": "OFIS MEBELI",
          "Maxsus Mebel": "MAXSUS MEBEL",
        };
        return p.category === catMap[activeFilter];
      });
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      );
    }

    if (sortBy === "Narx: Arzondan Qimmatga") {
      result.sort((a, b) => {
        const pa = a.price ? parseInt(a.price.replace(/\s/g, "")) : 0;
        const pb = b.price ? parseInt(b.price.replace(/\s/g, "")) : 0;
        return pa - pb;
      });
    } else if (sortBy === "Narx: Qimmatdan Arzonga") {
      result.sort((a, b) => {
        const pa = a.price ? parseInt(a.price.replace(/\s/g, "")) : 0;
        const pb = b.price ? parseInt(b.price.replace(/\s/g, "")) : 0;
        return pb - pa;
      });
    }

    return result;
  }, [activeFilter, searchQuery, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, searchQuery, sortBy]);

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleCompare = (id) => {
    setCompareList((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  const handleOrder = (product) => {
    setShowOrderModal(product);
    setCartItems((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1,
    }));
  };

  const closeModal = () => setShowOrderModal(null);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="catalog-page">
      <header className="catalog-header">
        <h1 className="catalog-title">Katalog</h1>
        <p className="catalog-subtitle">
          Ichki Eshiklar • Oshxonalar • Garderoblar • Ofis
        </p>
      </header>

      <div className="controls-bar">
        <div className="search-wrapper">
          <svg
            className="search-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Mahsulot, material..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filter-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
              onClick={() => setActiveFilter(cat)}
              type="button"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="sort-wrapper" ref={sortWrapperRef}>
          <button
            className="sort-btn"
            onClick={() => setSortOpen((prev) => !prev)}
            type="button"
            aria-haspopup="listbox"
            aria-expanded={sortOpen}
          >
            {sortBy}
            <svg
              className={`sort-arrow ${sortOpen ? "open" : ""}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

   
          <div className={`sort-dropdown ${sortOpen ? "sort-dropdown-open" : ""}`} role="listbox">
            {sortOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                role="option"
                aria-selected={sortBy === opt}
                className={`sort-option ${sortBy === opt ? "selected" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSortBy(opt);
                  setSortOpen(false);
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>

      {compareList.length > 0 && (
        <div className="compare-bar">
          <span>{compareList.length} ta mahsulot taqqoslash uchun tanlandi</span>
          <button className="compare-action-btn" type="button">
            Taqqoslash
          </button>
          <button
            className="compare-clear-btn"
            onClick={() => setCompareList([])}
            type="button"
          >
            Tozalash
          </button>
        </div>
      )}

      <div className="products-grid">
        {paginatedProducts.map((product, index) => (
          <div
            key={product.id}
            className={`product-card ${loadedCards.includes(index) ? "card-visible" : "card-hidden"}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="card-image-wrapper">
              <img
                src={product.img}
                alt={product.title}
                className="card-image"
                loading="lazy"
              />
              <div className="card-overlay">
                <span className={`card-badge badge-${product.badgeType}`}>
                  {product.badge}
                </span>
              </div>
              <div className="card-actions">
                <button
                  className={`action-btn favorite-btn ${favorites[product.id] ? "favorited" : ""}`}
                  onClick={() => toggleFavorite(product.id)}
                  title="Sevimlilarga qo'shish"
                  type="button"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill={favorites[product.id] ? "#c0392b" : "none"}
                    stroke={favorites[product.id] ? "#c0392b" : "currentColor"}
                    strokeWidth="2"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
                <button
                  className={`action-btn compare-btn ${compareList.includes(product.id) ? "compared" : ""}`}
                  onClick={() => toggleCompare(product.id)}
                  title="Taqqoslash"
                  type="button"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="14" height="14" rx="2" />
                    <rect x="7" y="7" width="14" height="14" rx="2" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="card-content">
              <span className="card-category">{product.category}</span>
              <h3 className="card-title">{product.title}</h3>
              <p className="card-description">{product.description}</p>

              <div className="card-footer">
                {product.price ? (
                  <span className="card-price">{product.price} so'm</span>
                ) : (
                  <span className="card-price-dash">—</span>
                )}
                <button
                  className="order-btn"
                  onClick={() => handleOrder(product)}
                  type="button"
                >
                  Buyurtma
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-results">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            width="64"
            height="64"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <p>Hech qanday mahsulot topilmadi</p>
        </div>
      )}

      {totalPages > 1 && (
        <div className="pagination">
          <button
            className={`page-btn ${currentPage === 1 ? "active" : ""}`}
            onClick={() => handlePageChange(1)}
            type="button"
          >
            1
          </button>
          {totalPages >= 2 && (
            <button
              className={`page-btn ${currentPage === 2 ? "active" : ""}`}
              onClick={() => handlePageChange(2)}
              type="button"
            >
              2
            </button>
          )}
          {totalPages >= 3 && (
            <button
              className={`page-btn ${currentPage === 3 ? "active" : ""}`}
              onClick={() => handlePageChange(3)}
              type="button"
            >
              3
            </button>
          )}
        </div>
      )}

      {showOrderModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} type="button">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                width="20"
                height="20"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
            <h2>Buyurtma Tasdiqlandi!</h2>
            <p className="modal-product">{showOrderModal.title}</p>
            {showOrderModal.price && (
              <p className="modal-price">{showOrderModal.price} so'm</p>
            )}
            <p className="modal-message">
              Menejerimiz tez orada siz bilan bog'lanadi.
            </p>
            <button className="modal-btn" onClick={closeModal} type="button">
              Yaxshi
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Catalog1;