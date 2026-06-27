import "./Elite4.css";

const features = [
  {
    id: 1,
    title: "Yuqori sifatli materiallar",
    desc: "Faqat quritilgan massiv yog'och, MDF va premium furnituralardan foydalanamiz. .",
  },
  {
    id: 2,
    title: "Professional jamoa",
    desc: "15 yildan ortiq tajribaga ega ustalar va dizaynerlar har bir buyurtmani individual yondashuv asosida ishlab chiqadi.",
  },
  {
    id: 3,
    title: "Tez ishlab chiqarish",
    desc: "Loyihangiz tasdiqlangandan so'ng ishlab chiqarish boshlanadi va buyurtmalar belgilangan muddatda topshiriladi.",
  },
  {
    id: 4,
    title: "5 yillik kafolat",
    desc: "Barcha eshik va mebel mahsulotlariga rasmiy kafolat beriladi hamda servis xizmati mavjud.",
  },
];

function Elite4() {
  return (
    <section className="elite4">

      <div className="elite4-container">

        <div className="elite4-top">

          <h2>Nima uchun Elite Door?</h2>

          <p>
            Elite Door kompaniyasi 15 yillik tajriba, zamonaviy texnologiyalar
            va professional ustalar jamoasi bilan premium interyer eshiklari,
            oshxona mebellari, shkaflar hamda buyurtma asosidagi mebel
            mahsulotlarini ishlab chiqaradi. Har bir loyiha sifat,
            ishonchlilik va zamonaviy dizayn asosida yaratiladi.
          </p>

        </div>

        <div className="elite4-grid">

          {features.map((item) => (

            <div className="elite4-card" key={item.id}>

              <div className="elite4-icon">

                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2L21 12L12 22L3 12L12 2Z"
                    fill="#9B6A3D"
                  />
                </svg>

              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Elite4;