import React, { useState } from 'react';
import './projects.css';

import img01 from '../assets/app1.jpg'
import img20 from '../assets/app2.jpg'
import img21 from '../assets/fretefacil02.jpeg'
import img22 from '../assets/fretefacil03.jpeg'

import img02 from '../assets/lemacrame1.png'
import img17 from '../assets/lemacrame2.jpg'
import img18 from '../assets/lemacrame3.jpg'
import img19 from '../assets/lemacrame4.jpg'

import img03 from '../assets/printsystem01.jpeg'
import img11 from '../assets/cadastroalunos.jpg'
import img12 from '../assets/sistemaalunoslogin.jpeg'
import img13 from '../assets/loginalunos.jpg'
import img14 from '../assets/sistemaalunosnav.jpeg'
import img15 from '../assets/drawernav.jpg'

import img04 from '../assets/printjavasystem.jpg'
import img16 from '../assets/javasystemamostra.jpg'

import img05 from '../assets/PrintDashboard.jpg'
import img06 from '../assets/PrintCadastroTurma.jpg'
import img07 from '../assets/alunomodel.jpg'
import img08 from '../assets/PrintCadastroAluno.jpg'
import img09 from '../assets/pagamentocontroller.jpg'
import img10 from '../assets/PrintPagamentos2.jpg'

import img23 from '../assets/routeotp1.jpeg'
import img24 from '../assets/routeotp2.jpeg'
import img25 from '../assets/routeotp3.jpeg'
import img26 from '../assets/routeotp4.jpeg'
import img27 from '../assets/routeotp5.jpeg'
import img28 from '../assets/routeotp6.jpeg'
import img29 from '../assets/routeotp7.jpeg'
import img30 from '../assets/routeotp8.jpeg'

const projetos = [
  {
    id: 1,
    nome: 'FreteFácil App',
    imagens: [
      { screenshot: img01, codigo: img20 },
      { screenshot: img21, codigo: img22 }
    ],
    descricao: 'App de fretes com login, mapa e painel de solicitações feito com React, Django e MySQL.',
    detalhes: 'App completo com autenticação, cadastro, painel de usuário, criação e finalização de solicitações de corridas. Frontend em React e backend Django.',
    link: 'https://fretefacilapp.vercel.app',
    repo: 'https://github.com/Guinhow'
  },
  {
    id: 2,
    nome: 'Le Macramê',
    imagens: [
      { screenshot: img02, codigo: img17 },
      { screenshot: img18, codigo: img19 }
    ],
    descricao: 'Loja online integrada ao WhatsApp feita com React.',
    detalhes: 'Website desenvolvido em React com catálogo de produtos, carrinho de compras e pedidos via API pelo WhatsApp.',
    link: 'https://lemacrame.vercel.app',
    repo: 'https://github.com/Guinhow'
  },
  {
    id: 3,
    nome: 'Sistema Alunos',
    imagens: [      
      { screenshot: img12, codigo: img13 },
      { screenshot: img14, codigo: img15 },
      { screenshot: img03, codigo: img11 }
    ],
    descricao: 'App de gestao de alunos para escolas feito com React Native, Spring Boot e Expo Go.',
    detalhes: 'Aplicativo de gestão para escolas ou cursos. Completo com autenticação, dashboard e painel de usuário. Inclusão e exclusão de alunos, gera contratos e planos de pagamento. Quita parcelas e gera comprovantes em PDF. Feito com React Native e Spring boot.',
    link: '',
    repo: 'https://github.com/Guinhow/SistemaAlunos'
  },
    {
    id: 4,
    nome: 'Sistema Web Alunos',
    imagens: [
      { screenshot: img05, codigo: img06 },
      { screenshot: img07, codigo: img08 },
      { screenshot: img09, codigo: img10 }
    ],
    descricao: 'Sistema web para escolas e cursos feito com React e Spring Boot.',
    detalhes: 'Sistema web para um escolas e cursos desenvolvido com React e Spring Boot. Sistema conta com entrada, consulta e exclusão de alunos e turmas. Geração de contratos, planos de pagamento e comprovantes de pagamento. Banco de dados configurado com MySQL',
    link: '',
    repo: 'https://github.com/Guinhow/SistemawebAlunos'
  },
      {
    id: 5,
    nome: 'Otimizador de Rotas',
    imagens: [
      { screenshot: img30, codigo: img29 },
      { screenshot: img28, codigo: img27 },
      { screenshot: img26, codigo: img25 },
      { screenshot: img24, codigo: img23 },
    ],
    descricao: 'App para otimização de rotas de entregas feito com React Native e Expo Go.',
    detalhes: 'Aplicativo desenvolvido para facilitar a vida de entregadores. Scanner de endereços com camera, armazenamento dos endereços em lista, geocodificação e otimização da rota com as paradas e direcionamento para Google Maps.',
    link: '',
    repo: 'https://github.com/Guinhow/routeOpt'
  },
    {
    id: 6,
    nome: 'Java System',
    imagens: [
      { screenshot: img04, codigo: img16 },
    ],
    descricao: 'Sistema web para laboratório de análise de amostras feito com Spring Boot.',
    detalhes: 'Sistema web para um laboratorio de analise de amostras desenvolvido com Spring Boot. Sistema conta com entrada, consulta e exclusão de amostras. Banco de dados configurado com MySQL',
    link: '',
    repo: 'https://github.com/Guinhow/JAVA-system'
  }
];


const Projects = () => {
  const [modalAberto, setModalAberto] = useState(null);
  const [imagemAmpliada, setImagemAmpliada] = useState(null);
  const [indiceAtual, setIndiceAtual] = useState(0);

  const abrirModal = (id) => {
    setModalAberto(id);
    setIndiceAtual(0);
  };

  const fecharModal = () => {
    setModalAberto(null);
    setImagemAmpliada(null);
  };

  const imagens = modalAberto ? projetos[modalAberto - 1].imagens : [];

  const anterior = () => {
    setIndiceAtual((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
  };

  const proximo = () => {
    setIndiceAtual((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="projects-section">
      <div className="projects-grid">
        {projetos.map((projeto) => (
          <div key={projeto.id} className="project-card" onClick={() => abrirModal(projeto.id)}>
            <img src={projeto.imagens[0].screenshot} alt={projeto.nome} />
            <h3>{projeto.nome}</h3>
            <p>{projeto.descricao}</p>
          </div>
        ))}
      </div>

      {modalAberto && (
        <div className="modal-overlay" onClick={fecharModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{projetos[modalAberto - 1].nome}</h2>
            <p>{projetos[modalAberto - 1].detalhes}</p>

            <div className="carousel-wrapper">
              <button className="nav-button nav-left" onClick={anterior}>‹</button>

              <div className="carousel-images">
                <img
                  src={imagens[indiceAtual].screenshot}
                  alt="screenshot"
                  onClick={() => setImagemAmpliada(imagens[indiceAtual].screenshot)}
                />
                <img
                  src={imagens[indiceAtual].codigo}
                  alt="codigo"
                  onClick={() => setImagemAmpliada(imagens[indiceAtual].codigo)}
                />
              </div>

              <button className="nav-button nav-right" onClick={proximo}>›</button>
            </div>

            <div className="modal-buttons">
              {projetos[modalAberto - 1].link && (
                <a href={projetos[modalAberto - 1].link} target="_blank" rel="noreferrer">🔗 Ver Projeto</a>
              )}
              <a href={projetos[modalAberto - 1].repo} target="_blank" rel="noreferrer">💻 Ver Código</a>
            </div>

            <button className="close-btn" onClick={fecharModal}>Fechar</button>
          </div>
        </div>
      )}

      {imagemAmpliada && (
        <div className="zoom-overlay" onClick={() => setImagemAmpliada(null)}>
          <img src={imagemAmpliada} alt="ampliada" className="zoomed-img" />
        </div>
      )}
    </section>
  );
};

export default Projects;

// const Projects = () => {
//   const [modalAberto, setModalAberto] = useState(null);

//   const abrirModal = (id) => setModalAberto(id);
//   const fecharModal = () => setModalAberto(null);

//   return (
//     <section className="projects-section">
//       <div className="projects-grid">
//         {projetos.map((projeto) => (
//           <div key={projeto.id} className="project-card" onClick={() => abrirModal(projeto.id)}>
//             <img src={projeto.imagens[0].screenshot} alt={projeto.nome} />
//             <h3>{projeto.nome}</h3>
//             <p>{projeto.descricao}</p>
//           </div>
//         ))}
//       </div>

//       {modalAberto && (
//         <div className="modal-overlay" onClick={fecharModal}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <h2>{projetos[modalAberto - 1].nome}</h2>
//             <p>{projetos[modalAberto - 1].detalhes}</p>

//             {projetos[modalAberto - 1].imagens.map((item, index) => (
//               <div
//                 key={index}
//                 style={{
//                   display: 'flex',
//                   gap: '20px',
//                   margin: '30px 0',
//                   flexWrap: 'wrap',
//                   justifyContent: 'center'
//                 }}
//               >
//                 <img src={item.screenshot} alt={`screenshot-${index}`} style={{ maxWidth: '45%' }} />
//                 <img src={item.codigo} alt={`codigo-${index}`} style={{ maxWidth: '45%' }} />
//               </div>
//             ))}

//             <div className="modal-buttons">
//               <a href={projetos[modalAberto - 1].link} target="_blank" rel="noreferrer">🔗 Ver Projeto</a>
//               <a href={projetos[modalAberto - 1].repo} target="_blank" rel="noreferrer">💻 Ver Código</a>
//             </div>

//             <button className="close-btn" onClick={fecharModal}>Fechar</button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Projects;
