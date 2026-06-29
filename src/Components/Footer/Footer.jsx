import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h2>ELITE DOOR</h2>
          <p>
            Premium eshik va mebel ishlab
            <br />
            chiqarish. Toshkent.
          </p>

          <div className="socials">
            <a href="#">T</a>
            <a href="#">W</a>
            <a href="#">I</a>
          </div>
        </div>

        <div className="footer-col">
          <h3>Tezkor havolalar</h3>

          <a href="#">Mahsulotlar</a>
          <a href="#">Portfolio</a>
          <a href="#">Kompaniya</a>
          <a href="#">Aloqa</a>
        </div>

        <div className="footer-col">
          <h3>Katalog</h3>

          <a href="#">Interior Doors</a>
          <a href="#">Kitchen Furniture</a>
          <a href="#">Wardrobes</a>
          <a href="#">Office sets</a>
        </div>

        <div className="footer-col">
          <h3>Kontaktlar</h3>

          <a href="tel:+998781504545">+998 78 150-45-45</a>
          <a href="mailto:hello@elitedoor.uz">
            hello@elitedoor.uz
          </a>
          <p>Tashkent, Chilanzar</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Elite Door · Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
};

export default Footer;