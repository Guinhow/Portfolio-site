import React, { useState } from 'react';
import './projects.css';
import img01 from '../assets/app1.jpg'
import img02 from '../assets/lemacrame1.png'
import img03 from '../assets/printsystem01.jpeg'
import img04 from '../assets/printjavasystem.jpg'

const projetos = [
  {
    id: 1,
    nome: 'FreteFácil App',
    imagem: [img01],
    descricao: 'App de fretes com login, mapa e painel de solicitações.',
    detalhes: 'App completo com autenticação, cadastro, painel de usuário, criação e finalização de solicitações de corridas. Frontend em React e backend Django.',
    link: 'https://fretefacilapp.vercel.app',
    repo: 'https://github.com/Guinhow'
  },
  {
    id: 2,
    nome: 'Le Macramê',
    imagem: [img02],
    descricao: 'Loja online integrada ao WhatsApp.',
    detalhes: 'Website desenvolvido em React com catálogo de produtos, carrinho de compras e pedidos via API pelo WhatsApp.',
    link: 'https://lemacrame.vercel.app',
    repo: 'https://github.com/Guinhow'
  },
  {
    id: 3,
    nome: 'Sistema Alunos',
    imagem: [img03],
    descricao: 'Sistema de gestao de alunos para escolas.',
    detalhes: 'Aplicativo de gestão para escolas ou cursos. Completo com autenticação, dashboard e painel de usuário. Inclusão e exclusão de alunos, gera contratos e planos de pagamento. Quita parcelas e gera comprovantes em PDF. Feito com React Native e Spring boot.',
    link: '',
    repo: 'https://github.com/Guinhow/SistemaAlunos'
  },
  {
    id: 4,
    nome: 'Java System',
    imagem: [img04],
    descricao: 'Sistema web em Java.',
    detalhes: 'Sistema web para um laboratorio de analise de amostras desenvolvido com Spring Boot. Sistema conta com entrada, consulta e exclusão de amostras. Banco de dados configurado com MySQL',
    link: '',
    repo: 'https://github.com/Guinhow/JAVA-system'
  }
];

const Projects = () => {
  const [modalAberto, setModalAberto] = useState(null);

  const abrirModal = (id) => setModalAberto(id);
  const fecharModal = () => setModalAberto(null);

  return (
    <section className="projects-section">
      <div className="projects-grid">
        {projetos.map((projeto) => (
          <div key={projeto.id} className="project-card" onClick={() => abrirModal(projeto.id)}>
            <img src={projeto.imagem[0]} alt={projeto.nome} />
            <h3>{projeto.nome}</h3>
            <p>{projeto.descricao}</p>
          </div>
        ))}
      </div>

      {modalAberto && (
        <div className="modal-overlay" onClick={fecharModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{projetos[modalAberto - 1].nome}</h2>
            <img src={projetos[modalAberto - 1].imagem} alt="Screenshot" />
            <p>{projetos[modalAberto - 1].detalhes}</p>
            <div className="modal-buttons">
              <a href={projetos[modalAberto - 1].link} target="_blank" rel="noreferrer">🔗 Ver Projeto</a>
              <a href={projetos[modalAberto - 1].repo} target="_blank" rel="noreferrer">💻 Ver Código</a>
            </div>
            <button className="close-btn" onClick={fecharModal}>Fechar</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
