"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./header.css";

let zoomCount = 0;
let zoom = 1;
let corCount = 0;
let cor = 1;

const Header = () => {
  const [carregado, setCarregado] = useState(false);
  
  // menu hamburguer
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // menu acessibilidade
  const [isMenuOpen1, setIsMenuOpen1] = useState(false);

  const toggleMenu1 = () => {
    setIsMenuOpen1(!isMenuOpen1);
  };

  // função de mudar tamanho do site
  const zoomIncrement = 0.2;

  useEffect(() => {
    function carregarZoom() {
      const savedZoom = parseFloat(localStorage.getItem("zoom") || "1");
      const savedZoomCount = parseInt(localStorage.getItem("zoomCount") || "0");
      zoom = savedZoom;
      zoomCount = savedZoomCount;
    }
    carregarZoom();
    aplicarZoom();
  }, []);

  function salvarZoom() {
    localStorage.setItem("zoom", `${zoom}`);
    localStorage.setItem("zoomCount", `${zoomCount}`);
  }

  function aplicarZoom() {
    (document.body.style as any).zoom = `${zoom}`;
  }

  function aumentar() {
    if (zoomCount < 3) {
      zoomCount++;
      zoom += zoomIncrement;
    }
    if (zoomCount === 3) {
      zoomCount = 0;
      zoom = 1;
    }
    salvarZoom();
    aplicarZoom();
  }

  // função de mudar cores do site
  const cores: any = {
    1: {
      "--cor1": "#C4E8F0",
      "--cor2": "#9BA6BC",
      "--cor3": "#032D60",
      "--cor4": "#E9F1FD",
      "--cor5": "#CDDEF7",
      "--cor6": "#1B8FC0",
      "--cor7": "#0D4180",
      "--cor8": "#0176D3",
      "--cor9": "#00C3FF",
      "--cor10": "#111169",
      "--cor11": "#0869E7",
      "--cor12": "#20083F",
      "--cor13": "#0000FF",
      "--cor14": "#9CC3FF",
      "--cor15": "#f7f7f7",
      "--cor16": "#000000",
    },
    2: {
      "--cor1": "#000000",
      "--cor2": "#ffffff",
      "--cor3": "#4fb5f8",
      "--cor4": "#000a36",
      "--cor5": "#003950",
      "--cor6": "#1460c5",
      "--cor7": "#82b3ee",
      "--cor8": "#01a9d3",
      "--cor9": "#606668",
      "--cor10": "#7070ff",
      "--cor11": "#00dada",
      "--cor12": "#ab7de7",
      "--cor13": "#0483fa",
      "--cor14": "#030a16",
      "--cor15": "#000000",
      "--cor16": "#ffffff",
    },
    3: {
      "--cor1": "#1e1e1e",
      "--cor2": "#4d2e13",
      "--cor3": "#ff5c0e",
      "--cor4": "#3d1a06",
      "--cor5": "#b3726f",
      "--cor6": "#d52a03",
      "--cor7": "#d15a47",
      "--cor8": "#d38901",
      "--cor9": "#606668",
      "--cor10": "#c17400",
      "--cor11": "#da5000",
      "--cor12": "#c55b00",
      "--cor13": "#c38700",
      "--cor14": "#675b4a",
      "--cor15": "#2f2f2f",
      "--cor16": "#ffffff",
    },
    4: {
      "--cor1": "#D4D4D4",
      "--cor2": "#A0A0A0",
      "--cor3": "#3B3B3B",
      "--cor4": "#FAFAFA",
      "--cor5": "#DCDCDC",
      "--cor6": "#6b6b6b",
      "--cor7": "#5E5E5E",
      "--cor8": "#616161",
      "--cor9": "#A9A9A9",
      "--cor10": "#474747",
      "--cor11": "#757575",
      "--cor12": "#3F3F3F",
      "--cor13": "#5d5d5d",
      "--cor14": "#979797",
      "--cor15": "#f7f7f7",
      "--cor16": "#000000",
    },
  };

  function salvarCor() {
    localStorage.setItem("cor", `${cor}`);
    localStorage.setItem("corCount", `${corCount}`);
  }

  function aplicarCor() {
    const themeName = cor;
    const root = document.documentElement;
    const theme = cores[themeName];

    // Atualiza as variáveis do :root
    for (const [key, value] of Object.entries(theme)) {
      root.style.setProperty(key, String(value));
    }

    var styleElement = document.getElementById('meu-estilo');
    var additionalCss: string = '';
    if (corCount < 4) {
      // Verifica se o elemento existe
      if (styleElement !== null) {
        if (corCount === 0) {
          var additionalCss = `
                main {
                  display: flex;
                }
            `;
        }
        if (corCount === 1) {
          var additionalCss = `
                .icone {
                  filter: invert(100%);
                }
                img {
                  filter: saturate(120%) brightness(120%);
                }
                .contato-input {
                  border: 1px solid white;
                }
                .page {
                  background-image: url("./background1.jpg");
                }
                .form {
                  background-color: #040713d1;
                }
                .checkbox-item {
                  color: white;
                }
                .links-projeto > a {
                  filter: invert(100%);
                }
                .links-projeto > a :first-child {
                  filter: invert(100%);
                }
                .links-projeto > a {
                  filter: invert(100%);
                }
                .figma :last-child {
                  filter: invert(100%);
                }
            `;
        } 
        if (corCount === 2) {
          var additionalCss = `
                .logo-header, .logo-footer, .icone, .imagem-funcionalidade {
                  filter: invert(100%);
                }
                .card-aluno-bottom > a {
                  filter: invert(100%);
                }
                .links-projeto > a {
                  filter: invert(100%);
                }
                .links-projeto > a :first-child {
                  filter: invert(100%);
                }
                .form {
                  background-color: #04071378;
                }
                .checkbox-item > label {
                  filter: invert(100%);
                }
                .page {
                  background-image: url("./background2.jpg");
                }
            `;
        }
        if (corCount === 3) {
          var additionalCss = `
                html {
                  filter: grayscale(100%);
                }
            `;
        }
        styleElement.textContent = additionalCss;
      } else {
        styleElement = document.createElement("style");
        styleElement.setAttribute('id', 'meu-estilo');
        document.head.appendChild(styleElement);
      }
    } else {
      var elementoParaExcluir = document.getElementById('meu-estilo');
      if (elementoParaExcluir) {
          elementoParaExcluir.remove();
      }
    }
  }

  function mudarCor() {
    if (corCount < 4) {
      corCount++;
      cor++;
    }
    if (corCount === 4) {
      corCount = 0;
      cor = 1;
    }
    salvarCor();
    aplicarCor();
  }

  useEffect(() => {
    function carregarCor() {
      const savedCor = parseInt(localStorage.getItem("cor") || "1");
      const savedCorCount = parseInt(localStorage.getItem("corCount") || "0");
      cor = savedCor;
      corCount = savedCorCount;
    }
    carregarCor();
    aplicarCor();
    setCarregado(true)
  }, [aplicarCor]);


  return (
    <>
      <header className="navbar">
        <div className="itens-esquerda">
          <a href=".">
            <Image
              className="logo-header"
              src="/logo.png"
              alt="logo salesforce"
              width={80}
              height={40}
            />
          </a>
          <nav className="links-paginas">
            <a id="text" className="link-pagina" href="./crm">
              CRM
            </a>
            <a
              id="text"
              className="link-pagina"
              href="https://salesforcecustomer360.herokuapp.com/quiz/1/"
            >
              SuperPlataforma
            </a>
            <a id="text" className="link-pagina" href="./produtos">
              Produtos
            </a>
            <a id="text" className="link-pagina" href="./suporte">
              Suporte
            </a>
            <a id="text" className="link-pagina" href="./empresa">
              Empresa
            </a>
          </nav>
        </div>
        <button className="acessibilidade" onClick={toggleMenu1}>
          <Image
            className="icone"
            src="/acessibilidade1.png"
            alt="icone de acessibilidade"
            width={26}
            height={26}
          />
          {isMenuOpen1 && (
            <div className="botoes-acessibilidade">
              <button className="cores" onClick={mudarCor}>
                <Image
                  className="icone"
                  src="/cores.svg"
                  alt="cores"
                  width={26}
                  height={26}
                />
                Cores
              </button>
              <button id="tamanho" onClick={aumentar}>
                <Image
                  className="icone"
                  src="/texto.svg"
                  alt="texto"
                  width={26}
                  height={26}
                />
                Tamanho
              </button>
            </div>
          )}
        </button>
        <div className="itens-direita">
          <button className="icone-pesquisar">
            <Image
              className="icone"
              src="/lupa1.png"
              alt="pesquisar"
              width={26}
              height={26}
            />
          </button>
          <button className="icone-login">
            <a href="./login">
              <Image
                className="icone"
                src="/avatar1.png"
                alt="login"
                width={25}
                height={25}
              />
            </a>
          </button>
          <button className="menu-hamburger" onClick={toggleMenu}></button>
          {isMenuOpen && (
            <div className="menu-dropdown">
              <nav className="links-paginas-dropdown">
                <a className="link-pagina" href="./crm">
                  CRM
                </a>
                <a
                  className="link-pagina"
                  href="https://salesforcecustomer360.herokuapp.com/quiz/1/"
                >
                  SuperPlataforma
                </a>
                <a className="link-pagina" href="./produtos">
                  Produtos
                </a>
                <a className="link-pagina" href="./suporte">
                  Suporte
                </a>
                <a className="link-pagina" href="./empresa">
                  Empresa
                </a>
              </nav>
              <button className="login-dropdown">
                <a href="./login">
                  <Image
                    className="icone"
                    src="/avatar1.png"
                    alt="login"
                    width={25}
                    height={25}
                  />
                  <p>Login</p>
                </a>
              </button>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
