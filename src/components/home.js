import React from 'react';
import './home.css'; 
const Home = () => {
  return (
    <section className="home-container">
      <div className="home-content">
        <h1>Olá! 👋</h1>
        <h2>Eu sou Vagner Cordeiro</h2>
        <h3>Analista de Sistemas e Desenvolvedor Fullstack</h3>
        <p>
          Crio aplicações modernas e responsivas com foco em performance, usabilidade e integração entre frontend e backend.
        </p>
        {/* <div className="home-buttons">
          <a href="/Projects" className="home-btn">Ver Projetos</a>
          <a href="/Contact" className="home-btn">Contato</a>
        </div> */}
      </div>
    </section>
  );
};

export default Home;
