// import React from 'react';
// import './about.css';

// const About = () => {
//   return (
//     <div className="about-wrapper">


//       {/* Formação */}
//       <section className="about-section">
//         <h2>🎓 Formação Acadêmica</h2>
//         <p>
//           Sou formado em <strong>Análise e Desenvolvimento de Sistemas</strong> pela Universidade Estácio de Sá.
//           Durante a graduação, desenvolvi diversos projetos com foco em aplicações web e mobile.
//         </p>
//       </section>

//       {/* Trajetória e projetos */}
//       <section className="about-section">
//         <h2>🚀 Minha Jornada</h2>
//         <p>
//           Ao longo da minha formação, mergulhei em projetos práticos fullstack, criando APIs, autenticação de usuários, layouts responsivos e dashboards administrativos.
//           Trabalhei com React, Django, Spring Boot e React Native para construir soluções completas do backend ao frontend.
//         </p>
//       </section>

//       {/* Hard Skills */}
//       <section className="about-section">
//         <h2>🧠 Habilidades Técnicas</h2>
//         <ul>
//           <li>🔹 Integração com APIs RESTful</li>
//           <li>🔹 Desenvolvimento com React e React Native</li>
//           <li>🔹 Backend com Django (Python) e Spring Boot (Java)</li>
//           <li>🔹 Banco de dados com MySQL</li>
//           <li>🔹 Autenticação JWT, controle de sessões</li>
//           <li>🔹 Layouts responsivos com HTML, CSS e JavaScript</li>
//         </ul>
//       </section>

//     </div>
//   );
// };

// export default About;

import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about-wrapper">

      {/* Perfil Profissional */}
      <section className="about-section">
        <h2>💼 Perfil Profissional</h2>
        <p>
          Desenvolvedor Fullstack formado em <strong>Análise e Desenvolvimento de Sistemas </strong>  
          pela Universidade Estácio de Sá. Especializado na criação de aplicações web e mobile de alta 
          performance, com foco em arquiteturas escaláveis e experiência do usuário otimizada.
        </p>
      </section>

      {/* Experiência e Resultados */}
      <section className="about-section">
        <h2>🎯 Experiência & Resultados</h2>
        <p>
          Possuo experiência comprovada no desenvolvimento de soluções fullstack completas, desde a 
          concepção da arquitetura backend até a implementação de interfaces intuitivas. Já entreguei 
          projetos envolvendo sistemas de autenticação robustos, dashboards administrativos avançados 
          e aplicações mobile nativas, sempre priorizando código limpo, segurança e performance.
        </p>
      </section>

      {/* Stack Tecnológica */}
      <section className="about-section">
        <h2>⚡ Stack Tecnológica</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Frontend & Mobile</h4>
            <ul>
              <li>React.js para aplicações web modernas</li>
              <li>React Native para desenvolvimento mobile</li>
              <li>HTML5, CSS3 e JavaScript ES6+</li>
              <li>Design responsivo e UX otimizada</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h4>Backend & Infraestrutura</h4>
            <ul>
              <li>Django (Python) para APIs robustas</li>
              <li>Spring Boot (Java) para sistemas enterprise</li>
              <li>MySQL para gerenciamento de dados</li>
              <li>Autenticação JWT e controle de sessões</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h4>Integração & APIs</h4>
            <ul>
              <li>Desenvolvimento e consumo de APIs RESTful</li>
              <li>Integração de sistemas terceiros</li>
              <li>Otimização de consultas e performance</li>
              <li>Arquitetura de microsserviços</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Diferencial */}
      <section className="about-section">
        <h2>🌟 Meu Diferencial</h2>
        <p>
          Combino conhecimento técnico sólido com visão estratégica de negócio. Não apenas codifico, 
          mas penso em soluções que agreguem valor real aos usuários finais e aos objetivos empresariais. 
          Mantenho-me sempre atualizado com as melhores práticas da indústria e tendências tecnológicas.
        </p>
      </section>

    </div>
  );
};

export default About;