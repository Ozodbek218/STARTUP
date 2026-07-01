import "./Premium1.css";
import hero from "../../../assets/hero.png";
import { useNavigate } from "react-router-dom";

function Premium1() {
  const navigate = useNavigate();

  return (
    <section className="premium">
      <div className="container">
        {/* LEFT */}

        <div className="left">
          <span className="topText">ELITE DOOR • 2009 YILDAN</span>

          <h1>
            O'zbek
            <br />
            hunarmandchiligidan
            <br />
            ilhomlangan
            <br />
            premium mebel
          </h1>

          <p>
            Tabiiy eman, yong'oq va kul daraxtidan qo'lda yasalgan interyer
            eshiklari va mebellar. Toshkentdagi ustaxonamizda yaratiladi.
          </p>

          <div className="buttons">
            <button className="darkBtn" onClick={() => navigate("/catalog")}>
              Katalogni ko'rish
            </button>
            <button className="lightBtn" onClick={() => navigate("/catalog1")}>
              Loyihangizni muhokama qilamiz
            </button>
          </div>

          <div className="numbers">
            <div className="item">
              <h2>15</h2>
              <span>Yillik tajriba</span>
            </div>

            <div className="item">
              <h2>1.2k+</h2>
              <span>Tugallangan loyihalar</span>
            </div>

            <div className="item">
              <h2>5</h2>
              <span>Yillik kafolat</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div className="right">
          <div className="imageCard">
            <img src={hero} alt="Premium Door" />

            <div className="bottomCard">
              <div>
                <span className="featured">FEATURED</span>
                <h3>Norwood Oak Door</h3>
              </div>

              <button>Order</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Premium1;
