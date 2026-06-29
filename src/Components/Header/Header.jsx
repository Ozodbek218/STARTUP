import "./Header.css";
import { Heart, ShoppingCart, Menu, Moon } from "lucide-react";

const Header = () => {
  return (
    <header className="navbar">
      <div className="logo-section">
        <div className="logo-box">H</div>

        <div>
          <h2>ELITE DOOR</h2>
        </div>
      </div>

      <nav className="nav-links">
        <a href="#" className="active">
          Bosh sahifa
        </a>
        <a href="#">Mahsulotlar</a>
        <a href="#">Portfolio</a>
        <a href="#">Kompaniya</a>
        <a href="#">Aloqa</a>
      </nav>

      <div className="right-section">
        <div className="lang-switch">
          <button className="selected">UZ</button>
          <button>RU</button>
          <button>EN</button>
        </div>

        <div className="icon-btn">
          <Moon size={20} />
        </div>

        <div className="icon-btn">
          <Menu size={20} />
        </div>

        <div className="icon-btn">
          <Heart size={20} />
        </div>

        <div className="icon-btn">
          <ShoppingCart size={20} />
        </div>

        <div className="divider"></div>

        <button className="login-btn">Kirish</button>
      </div>
    </header>
  );
};

export default Header;