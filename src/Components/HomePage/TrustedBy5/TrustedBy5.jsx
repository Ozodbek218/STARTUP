import React from 'react';
import './TrustedBy.css';

const TrustedBy5= () => {
  const companies = [
    'Akfa',
    'Artel',
    'Hilton Tashkent',
    'IT Park',
    'Chorsu',
    'Grand Mir'
  ];

  return (
    <section className="trusted-section">
      <div className="trusted-container">
        <div className="trusted-content">
          <span className="trusted-label">Bizga ishonishgan:</span>
          <div className="companies-list">
            {companies.map((company, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="separator">•</span>}
                <span className="company-name">{company}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
        
        <button className="measurement-btn">
          Bepul o'lchov
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M3 8H13M13 8L9 4M13 8L9 12" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default TrustedBy5;