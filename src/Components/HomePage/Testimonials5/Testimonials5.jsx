import React from 'react';
import './Testimonials5.css';

const testimonials = [
  {
    id: 1,
    initials: 'DK',
    name: 'Dilnoza Karimova',
    rating: 5,
    text: 'Eshiklar ajoyib bo\'ldi! O\'rnatuvchilar juda toza ishlashdi.',
    position: 'Toshkent'
  },
  {
    id: 2,
    initials: 'AV',
    name: 'Artem Volkov',
    rating: 5,
    text: 'Oshxona xuddi renderdagi kabi chiqdi. Juda mamnunman!',
    position: 'Samarqand'
  },
  {
    id: 3,
    initials: 'JR',
    name: 'Jasur R.',
    rating: 4,
    text: 'A\'lo sifat, yetkazib berish biroz kechikdi.',
    position: 'Buxoro'
  },
  {
    id: 4,
    initials: 'SM',
    name: 'Sardor Mirziyoyev',
    rating: 5,
    text: 'Ajoyib xizmat va chiroyli ish. Tavsiya qilaman!',
    position: 'Namangan'
  },
  {
    id: 5,
    initials: 'AK',
    name: 'Aziza Kamolova',
    rating: 5,
    text: 'Uyimiz uchun eng yaxshi sarmoya. Hamma narsa a\'lo darajada!',
    position: 'Andijon'
  },
  {
    id: 6,
    initials: 'BF',
    name: 'Bobur Fayziyev',
    rating: 5,
    text: 'Professional jamoa. Natijadan juda xursandman!',
    position: 'Farg\'ona'
  }
];

const Testimonials5 = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-wrapper">
        <h2 className="testimonials-title">Mijozlarimiz Fikrlari</h2>
        <p className="testimonials-subtitle">Bizning xizmatlarimiz haqida mijozlarimizning samimiy fikrlari</p>
        
        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="testimonial-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="card-decoration"></div>
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  {testimonial.initials}
                </div>
                <div className="testimonial-info">
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <span className="testimonial-position">{testimonial.position}</span>
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={`star ${i < testimonial.rating ? 'active' : ''}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="testimonial-content">
                <span className="quote-icon">"</span>
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
              <div className="card-footer">
                <div className="verified-badge">✓ Tasdiqlangan mijoz</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials5;