import React from 'react';
import './App.css';
import logo from './assets/code.png';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa'; // İkonlar

function App() {
  return (
    <div className="cv-container">
      <header className="cv-header">
        <div className="profile-container">
          <img
            src={logo} 
            alt="Profil Fotoğrafı"
            className="profile-img"
          />
          <div className="profile-details">
            <h1 className="name">Soykan Salim</h1>
            <p className="role">Yazılım Geliştirici</p>
            <div className="contact-info">
              <p>📞 05303991154</p>
              <p>📧 soykan.salim@kun.edu.tr</p>
            </div>
          </div>
        </div>
      </header>

      <main className="cv-main">
        <section className="cv-section">
          <h2>Eğitim Bilgileri</h2>
          <p><strong>Üniversite:</strong> Kapadokya Üniversitesi</p>
          <p><strong>Bölüm:</strong> Bilgisayar Programcılığı</p>
          <p><strong>Mezuniyet Yılı:</strong> 2025</p>
        </section>

        <section className="cv-section">
          <h2>İş Deneyimi</h2>
          <div className="experience">
            <h3>Dursun Bilgi İşlem</h3>
            <p><strong>Çalışma Süresi:</strong> 2019 - 2020</p>
            <p>Teknikerlik</p>
          </div>
        </section>

        <section className="cv-section">
          <h2>Yetenekler</h2>
          <ul>
            <li>React.js, Node.js</li>
            <li>JavaScript, TypeScript</li>
            <li>HTML, CSS, SASS</li>
            <li>C#, Python, PHP</li>
          </ul>
        </section>

        <section className="cv-section">
          <h2>Hobiler ve İlgi Alanları</h2>
          <ul>
            <li>Yazılım geliştirme ve açık kaynak projeler</li>
            <li>Bilgisayar Oyunu</li>
            <li>Yayıncılık</li>
            <li>Spor Yapmak</li>
            <li>Doğa Yürüyüşü</li>
          </ul>
        </section>
      </main>

      <footer className="cv-footer">
        <h3>Sosyal Medya</h3>
        <div className="social-icons">
          <a href="#" target="_self" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin size={30} />
          </a>
          <a href="#" target="_self" rel="noopener noreferrer" className="social-icon">
            <FaTwitter size={30} />
          </a>
          <a href="#" target="_self" rel="noopener noreferrer" className="social-icon">
            <FaGithub size={30} />
          </a>
          <a href="#" target="_self" rel="noopener noreferrer" className="social-icon">
            <FaInstagram size={30} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
