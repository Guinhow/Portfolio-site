import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-wrapper">

      {/* Formação */}
      <section className="about-section">
        <h2>🎓 Formação Acadêmica</h2>
        <p>
          Sou formado em <strong>Análise e Desenvolvimento de Sistemas</strong> pela Universidade Estácio de Sá.
          Durante a graduação, desenvolvi diversos projetos com foco em aplicações web e mobile.
        </p>
      </section>

      {/* Trajetória e projetos */}
      <section className="about-section">
        <h2>🚀 Minha Jornada</h2>
        <p>
          Ao longo da minha formação, mergulhei em projetos práticos fullstack, criando APIs, autenticação de usuários, layouts responsivos e dashboards administrativos.
          Trabalhei com React, Django, Spring Boot e React Native para construir soluções completas do backend ao frontend.
        </p>
      </section>

      {/* Hard Skills */}
      <section className="about-section">
        <h2>🧠 Habilidades Técnicas</h2>
        <ul>
          <li>🔹 Integração com APIs RESTful</li>
          <li>🔹 Desenvolvimento com React e React Native</li>
          <li>🔹 Backend com Django (Python) e Spring Boot (Java)</li>
          <li>🔹 Banco de dados com MySQL</li>
          <li>🔹 Autenticação JWT, controle de sessões</li>
          <li>🔹 Layouts responsivos com HTML, CSS e JavaScript</li>
        </ul>
      </section>

    </div>
  );
};

export default About;
