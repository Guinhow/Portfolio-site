// import React from 'react';
// import './home.css'; 
// const Home = () => {
//   return (
//     <section className="home-container">
//       <div className="home-content">
//         <h1>Olá! 👋</h1>
//         <h2>Eu sou Vagner Cordeiro</h2>
//         <h3>Analista de Sistemas e Desenvolvedor Fullstack</h3>
//         <p>
//           Crio aplicações modernas e responsivas com foco em performance, usabilidade e integração entre frontend e backend.
//         </p>
//         {/* <div className="home-buttons">
//           <a href="/Projects" className="home-btn">Ver Projetos</a>
//           <a href="/Contact" className="home-btn">Contato</a>
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default Home;
import React from 'react';
import './home.css'; 

const Home = () => {
  return (
    <section className="home-container">
      <div className="home-content">
        <h1>Vagner Cordeiro</h1>
        <h2>Desenvolvedor Fullstack</h2>
        <h3>Especialista em Soluções Web Completas</h3>
        <p>
          Transformo ideias em aplicações robustas e escaláveis. Com expertise em tecnologias modernas 
          como React, Django e Spring Boot, desenvolvo soluções end-to-end que conectam experiências 
          de usuário excepcionais a arquiteturas backend sólidas e performáticas.
        </p>
        <div className="home-highlights">
          <span className="highlight">• APIs RESTful Otimizadas</span>
          <span className="highlight">• Interfaces Responsivas</span>
          <span className="highlight">• Arquitetura Escalável</span>
        </div>
        {/* <div className="home-buttons">
          <a href="/Projects" className="home-btn">Ver Projetos</a>
          <a href="/Contact" className="home-btn">Contato</a>
        </div> */}
      </div>
    </section>
  );
};

export default Home;