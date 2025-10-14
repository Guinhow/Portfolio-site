import React, { useState } from 'react';
import './landing.css';

import adv01 from '../pagesimg/adv01.png'
import adv02 from '../pagesimg/adv02.png'
import advvideo from '../pagesvideo/advvideo.mp4'

import arch01 from '../pagesimg/arch01.png'
import arch02 from '../pagesimg/arch02.png'
import arch03 from '../pagesimg/arch03.png'
import archvideo from '../pagesvideo/archvideo.mp4'

import barber01 from '../pagesimg/barber01.png'
import barber02 from '../pagesimg/barber02.png'
import barber03 from '../pagesimg/barber03.png'
import barber04 from '../pagesimg/barber04.png'
import barbervideo from '../pagesvideo/barbervideo.mp4'

import dentist01 from '../pagesimg/dentist01.png'
import dentist02 from '../pagesimg/dentist02.png'
import dentist03 from '../pagesimg/dentist03.png'
import dentistvideo from '../pagesvideo/dentistvideo.mp4'

import gym01 from '../pagesimg/gym01.png'
import gym02 from '../pagesimg/gym02.png'
import gym03 from '../pagesimg/gym03.png'
import gym04 from '../pagesimg/gym04.png'
import gymvideo from '../pagesvideo/gymvideo.mp4'

import pet01 from '../pagesimg/pet01.png'
import pet02 from '../pagesimg/pet02.png'
import pet03 from '../pagesimg/pet03.png'
import petvideo from '../pagesvideo/petvideo.mp4'

import tech01 from '../pagesimg/tech01.png'
import tech02 from '../pagesimg/tech02.png'
import tech03 from '../pagesimg/tech03.png'
import techvideo from '../pagesvideo/techvideo.mp4'

import transp01 from '../pagesimg/transp01.png'
import transp02 from '../pagesimg/transp02.png'
import transp03 from '../pagesimg/transp03.png'
import transpvideo from '../pagesvideo/transpvideo.mp4'

import turism01 from '../pagesimg/turism01.png'
import turism02 from '../pagesimg/turism02.png'
import turism03 from '../pagesimg/turism03.png'
import turism04 from '../pagesimg/turism04.png'
import turism05 from '../pagesimg/turism05.png'
import turismvideo from '../pagesvideo/turismvideo.mp4'

const pages = [
    {
    id: 1,
    nome: 'Advocacia',
    imagens: [
      { screenshot: adv01, codigo: adv02 },
    ],
    video: advvideo,
    detalhes: 'Landing page para um escritório de Advocacia. Site criado com react, react-icons e framer motion.',
    link: '',
    repo: ''
  },
      {
    id: 2,
    nome: 'Arquitetura',
    imagens: [
      { screenshot: arch01, codigo: arch02 },
      { screenshot: arch03 },
    ],
    video: archvideo,
    detalhes: 'Landing page para um escritório de Arquitetura. Site criado com react, react-icons e framer motion.',
    link: '',
    repo: ''
  },
  {
    id: 3,
    nome: 'Barbearia',
    imagens: [
      { screenshot: barber01, codigo: barber02 },
      { screenshot: barber03, codigo: barber04 }
    ],
    video: barbervideo,
    detalhes: 'Landing page para uma Barbearia. Site criado com react, react-icons e framer motion.',
    link: '',
    repo: ''
  },
  {
    id: 4,
    nome: 'Dentista',
    imagens: [
      { screenshot: dentist01, codigo: dentist02 },
      { screenshot: dentist03,}
    ],
    video: dentistvideo,
    detalhes: 'Landing page para um Consultório Dentista. Site criado com react, react-icons e framer motion.',
    link: '',
    repo: ''
  },
  {
    id: 5,
    nome: 'Academia',
    imagens: [      
      { screenshot: gym01, codigo: gym02 },
      { screenshot: gym03, codigo: gym04 },
    ],
    video: gymvideo,
    detalhes: 'Landing page para uma Academia. Site criado com react, react-icons e framer motion.',
    link: '',
    repo: ''
  },
     {
    id: 6,
    nome: 'PetShop',
    imagens: [      
      { screenshot: pet01, codigo: pet02 },
      { screenshot: pet03, },
    ],
    video: petvideo,
    detalhes: 'Landing page para um PetShop. Site criado com react, react-icons e framer motion.',
    link: '',
    repo: ''
  },
    {
    id: 7,
    nome: 'Tecnologia',
    imagens: [      
      { screenshot: tech01, codigo: tech02 },
      { screenshot: tech03,},
    ],
    video: techvideo,
    detalhes: 'Landing page para uma empresa de Tecnologia. Site criado com react, react-icons e framer motion.',
    link: '',
    repo: ''
  },
    {
    id: 8,
    nome: 'Transporte',
    imagens: [      
      { screenshot: transp01, codigo: transp02 },
      { screenshot: transp03, },
    ],
    video: transpvideo,
    detalhes: 'Landing page para uma empresa de Transporte. Site criado com react, react-icons e framer motion.',
    link: '',
    repo: ''
  },
      {
    id: 9,
    nome: 'Turismo',
    imagens: [      
      { screenshot: turism01, codigo: turism02 },
      { screenshot: turism03, codigo: turism04 },
      { screenshot: turism05 },
    ],
    video: turismvideo,
    detalhes: 'Landing page para uma empresa de Turismo. Site criado com react, react-icons e framer motion.',
    link: '',
    repo: ''
  },
];


const Landing = () => {
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

  const imagens = modalAberto ? pages[modalAberto - 1].imagens : [];

  const anterior = () => {
    setIndiceAtual((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
  };

  const proximo = () => {
    setIndiceAtual((prev) => (prev === imagens.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="projects-section">
      <div className="projects-grid">
        {pages.map((projeto) => (
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
            <h2>{pages[modalAberto - 1].nome}</h2>
            <p>{pages[modalAberto - 1].detalhes}</p>

            {/* 🎥 Exibe o vídeo se existir */}
            {pages[modalAberto - 1].video && (
                <div className="video-container">
                <video 
                    src={pages[modalAberto - 1].video} 
                    controls 
                    className="project-video"
                />
                </div>
            )}

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

export default Landing;
