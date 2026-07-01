import React, { useState, useEffect } from "react";
import "./Portfolio.css";

import image9 from "../../../assets/image9.png";
import image10 from "../../../assets/image10.png";
import image11 from "../../../assets/image11.png";
import image12 from "../../../assets/image12.png";
import image13 from "../../../assets/image13.png";
import image14 from "../../../assets/image14.png";
import image15 from "../../../assets/image15.png";
import image16 from "../../../assets/image16.png";
import image17 from "../../../assets/image17.png";

const projects = [
  {
    id: 1,
    title: "Artel HQ, Tashkent",
    category: "office",
    image: image9,
  },
  {
    id: 2,
    title: "Mirabad Residence",
    category: "kitchen",
    image: image10,
  },
  {
    id: 3,
    title: "IT Park Office",
    category: "office",
    image: image11,
  },
  {
    id: 4,
    title: "Yunusobod Loft",
    category: "doors",
    image: image12,
  },
  {
    id: 5,
    title: "Chimgan Chalet",
    category: "kitchen",
    image: image13,
  },
  {
    id: 6,
    title: "Hilton Tashkent",
    category: "wardrobe",
    image: image14,
  },
  {
    id: 7,
    title: "Premium Office",
    category: "office",
    image: image15,
  },
  {
    id: 8,
    title: "Modern Kitchen",
    category: "kitchen",
    image: image16,
  },
  {
    id: 9,
    title: "Modern Kitchen",
    category: "kitchen",
    image: image17,
  },
];

const categories = [
  { key: "all", label: "all" },
  { key: "doors", label: "doors" },
  { key: "kitchen", label: "kitchen" },
  { key: "wardrobe", label: "wardrobe" },
  { key: "office", label: "office" },
];

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setIsAnimating(true);
    setVisibleProjects([]);

    const timer = setTimeout(() => {
      let result = projects;

      if (activeFilter !== "all") {
        result = projects.filter((p) => p.category === activeFilter);
      }

      setFilteredProjects(result);

      const showTimer = setTimeout(() => {
        setVisibleProjects(result.map((_, i) => i));
        setIsAnimating(false);
      }, 50);

      return () => clearTimeout(showTimer);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeFilter]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };

    if (selectedProject) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  const handleFilterClick = (category) => {
    if (category === activeFilter) return;
    setActiveFilter(category);
  };

  const handleViewClick = (project, e) => {
    e.stopPropagation();
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <div className="projects-page">
      <div className="projects-container">
        <header className="projects-header">
          <h1 className="projects-title">Amalga oshirilgan loyihalar</h1>
          <p className="projects-subtitle">
            Uylar, ofislar va restoranlarimizdan tanlangan ishlar.
          </p>
        </header>

        <div className="filter-container">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`filter-btn ${activeFilter === cat.key ? "active" : ""}`}
              onClick={() => handleFilterClick(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${visibleProjects.includes(index) && !isAnimating ? "card-visible" : "card-hidden"}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-image"
                  loading="lazy"
                />
                <div className="card-overlay">
                  <button
                    className="view-btn"
                    onClick={(e) => handleViewClick(project, e)}
                  >
                    Ko'rish
                  </button>
                </div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-results">
            <p>Ushbu kategoriya uchun loyihalar topilmadi</p>
          </div>
        )}
      </div>

      {selectedProject && (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
          <div className="modal-content">
            <button className="modal-close" onClick={handleCloseModal}>
              ✕
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="modal-image"
            />
            <div className="modal-info">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <span className="modal-category">{selectedProject.category}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;