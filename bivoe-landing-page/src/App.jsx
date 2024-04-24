import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';
import fl from './assets/fl.png';
import mixing from './assets/mixing.png';
import waves from './assets/waves.png';
import omnisphere from './assets/omnisphere.jpg';
import fabfilter from './assets/fabfilter.png';
import payment from './assets/payment.png'
import discord from './assets/discord.png'
import instagram from './assets/instagram.png'
import email from './assets/apple.png'
import hat from './assets/hat.png'
import circuit from './assets/circuit.png'
import github from './assets/github.png'

function App() {
  const [isVisibleAbout, setIsVisibleAbout] = useState(false);
  const [isVisibleSoftwares, setIsVisibleSoftwares] = useState(false);
  const [isVisiblePlugins, setIsVisiblePlugins] = useState(false);
  const [isVisiblePlaylist, setIsVisiblePlaylist] = useState(false);
  const [isVisibleOrçamento, setIsVisibleOrçamento] = useState(false);

  const fadeIn = useSpring({
    opacity: isVisibleAbout ? 1 : 0,
    transform: isVisibleAbout ? 'translateY(0)' : 'translateY(50px)',
  });

  const fadeInSoftwares = useSpring({
    opacity: isVisibleSoftwares ? 1 : 0,
    transform: isVisibleSoftwares ? 'translateY(0)' : 'translateY(50px)',
  });

  const fadeInPlugins = useSpring({
    opacity: isVisiblePlugins ? 1 : 0,
    transform: isVisiblePlugins ? 'translateY(0)' : 'translateY(50px)',
  });

  const fadeInPlaylist = useSpring({
    opacity: isVisiblePlaylist ? 1 : 0,
    transform: isVisiblePlaylist ? 'translateY(0)' : 'translateY(50px)',
  });

  const fadeInOrçamento = useSpring({
    opacity: isVisibleOrçamento ? 1 : 0,
    transform: isVisibleOrçamento ? 'translateY(0)' : 'translateY(50px)',
  });

  useEffect(() => {
    const handleScroll = () => {
      const aboutElement = document.querySelector('.about');
      const softwaresElement = document.querySelector('.softwares');
      const pluginsElement = document.querySelector('.plugins');
      const playlistElement = document.querySelector('.playlist');
      const orçamentoElement = document.querySelector('.orçamento');

      const aboutPosition = aboutElement.getBoundingClientRect().top;
      const softwaresPosition = softwaresElement.getBoundingClientRect().top;
      const pluginsPosition = pluginsElement.getBoundingClientRect().top;
      const playlistPosition = playlistElement.getBoundingClientRect().top;
      const orçamentoPosition = orçamentoElement.getBoundingClientRect().top;

      const screenPosition = window.innerHeight / 1.2;

      setIsVisibleAbout(aboutPosition < screenPosition);
      setIsVisibleSoftwares(softwaresPosition < screenPosition);
      setIsVisiblePlugins(pluginsPosition < screenPosition);
      setIsVisiblePlaylist(playlistPosition < screenPosition);
      setIsVisibleOrçamento(orçamentoPosition < screenPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header>
        <div className="txt">
          <h2>bivoe_</h2>
          <p>Deixe o mago fazer a magia.</p>
        </div>
      </header>
      <section className="about">
        <animated.img src={hat} alt="about" style={fadeIn} />
        <h4>Sobre o mago</h4>
        <animated.p style={fadeIn}>Com uma trajetória de 4 anos na indústria da produção musical, adquiri a expertise necessária para oferecer uma qualidade incomparável aos seus projetos, tudo isso a um preço acessível. Estou aqui para elevar o seu trabalho a um novo patamar</animated.p>
      </section>
      <div className="link"><img src={circuit} alt="circuito" /></div>
      <section className='softwares'>
        <animated.img src={fl} alt="fl" style={fadeInSoftwares} />
        <h4>Softwares</h4>
        <animated.p style={fadeInSoftwares}>Trabalho utilizando o Fl Studio, um dos softwares de produção musical e estação de trabalho de áudio digital (Digital Audio Workstation - DAW) mais em alta no mercado.</animated.p>
      </section>
      <div id='two'><img src={circuit} alt="circuito" /></div>
      <section className="plugins">
        <animated.img src={mixing} alt="mixing" style={fadeInPlugins} />
        <h4>Plug-ins</h4>
        <animated.p style={fadeInPlugins}>Utilizo os melhores plugins disponíveis para mixagem, masterização e criação de beats, garantindo resultados de alta qualidade em todas as etapas do processo de produção musical. Entre esses plugins estão marcas renomadas como Waves, FabFilter, Keyscape, Omnisphere e uma variedade de outros recursos selecionados cuidadosamente. Essas ferramentas oferecem uma ampla gama de efeitos, instrumentos virtuais e processadores de áudio que me permitem aprimorar cada aspecto das minhas produções, desde a criação de batidas até o toque final de masterização, resultando em um som profissional e envolvente.</animated.p>
      </section>
      <div id='two'><img src={circuit} alt="circuito" /></div>
      <div className="plugin-logo">
        <a href="https://www.waves.com"><img src={waves} alt="waves icon" /></a>
        <a href="https://www.fabfilter.com/"><img src={fabfilter} alt="fab icon" /></a>
        <a href="https://www.spectrasonics.net/products/omnisphere/"><img src={omnisphere} alt="omnisphere" /></a>
      </div>
      <section>
        <div className="playlist">
          <animated.h4 style={fadeInPlaylist}>Algumas referências</animated.h4>
          <animated.iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1813151031&color=%23040404&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></animated.iframe>
          <div className="soundcloud-info">
            <a href="https://soundcloud.com/user-679009085" title="newrld box!" target="_blank">newrld box!</a> · <a href="https://soundcloud.com/user-679009085/sets/prod-bivoe" title="prod.bivoe" target="_blank">prod.bivoe</a>
          </div>
        </div>
      </section>
      <section className='orçamento'>
        <animated.img src={payment} alt="payment" style={fadeInOrçamento} />
        <h2>Orçamento</h2>
        <animated.p style={fadeInOrçamento}>Se interessou? Me acione para um orçamento personalizado! :D</animated.p>
        <div className="contact-links">
          <a href=""><img src={email} alt="mail" /></a>
          <a href=""><img src={discord} alt="discord" /></a>
          <a href=""><img src={instagram} alt="ig" /></a>
        </div>
      </section>
      <footer>
        <h4>prod.bivoe 2024</h4>
        <div className="flink">
          <a href="https://github.com/abreujay"><img src={github} alt="Github" /></a>
          <a href="https://www.instagram.com/prod.bivoe/"><img src={instagram} alt="Instagram" /></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
