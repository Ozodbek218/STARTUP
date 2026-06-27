import "./Craft2.css";
import door from "../../../assets/Craft2.png";

function Craft2() {
  return (
    <section className="craft2">

      <div className="craft2-container">

        {/* LEFT */}

        <div className="craft2-left">
          <img src={door} alt="Elite Door" />
        </div>

        {/* RIGHT */}

        <div className="craft2-right">

          <h2>
            San'at darajasidagi
            <br />
            duradgorlik
          </h2>

          <p>
            Elite Door — bu mebel emas, bu 15 yillik tajriba,
            italyan furnituralari va har bir donni qadrlaydigan
            ustalar jamoasi. Biz Toshkentda interyer eshiklari,
            oshxona mebellari va ofis to'plamlarini buyurtma
            asosida ishlab chiqaramiz.
          </p>

          <div className="stats">

            <div className="card">
              <h3>15</h3>
              <span>Yillik tajriba</span>
            </div>

            <div className="card">
              <h3>1,240</h3>
              <span>Tugallangan loyihalar</span>
            </div>

            <div className="card">
              <h3>5</h3>
              <span>Yillik kafolat</span>
            </div>

            <div className="card">
              <h3>970</h3>
              <span>Mamnun mijozlar</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Craft2;