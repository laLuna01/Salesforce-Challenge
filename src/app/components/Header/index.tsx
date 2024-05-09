"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./header.css";

let zoomCount = 0;
let zoom = 1;

const Header = () => {
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

  function carregarZoom() {
    const savedZoom = parseFloat(localStorage.getItem("zoom") || "1");
    const savedZoomCount = parseInt(localStorage.getItem("zoomCount") || "0");
    zoom = savedZoom;
    zoomCount = savedZoomCount;
  }

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

  window.addEventListener("load", () => {
    carregarZoom();
    aplicarZoom();
  });

  // função de mudar cores do site
  const cores = {
    padrao: {
      cor1: "#C4E8F0",
      cor2: "#9BA6BC",
      cor3: "#032D60",
      cor4: "#E9F1FD",
      cor5: "#CDDEF7",
      cor6: "#1B8FC0",
      cor7: "#0D4180",
      cor8: "#0176D3",
      cor9: "#00C3FF",
      cor10: "#111169",
      cor11: "#0869E7",
      cor12: "#20083F",
      cor13: "#0000FF",
      cor14: "#9CC3FF",
      cor15: "#EEEEEE"
    },
    altoContraste: {
      corFundo: "#000000",
      corTexto: "#ffffff",
    },
    coresInvertidas: {
      corFundo: "#ffcccc",
      corTexto: "#330000",
    },
  };

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
            src="/acessibilidade1.png"
            alt="icone de acessibilidade"
            width={26}
            height={26}
          />
          {isMenuOpen1 && (
            <div className="botoes-acessibilidade">
              <button className="cores">
                <Image src="/cores.svg" alt="cores" width={26} height={26} />
                Cores
              </button>
              <button className="tamanho" onClick={aumentar}>
                <Image src="/texto.svg" alt="texto" width={26} height={26} />
                Tamanho
              </button>
            </div>
          )}
        </button>
        <div className="itens-direita">
          <button className="icone-pesquisar">
            <Image src="/lupa1.png" alt="pesquisar" width={26} height={26} />
          </button>
          <button className="icone-login">
            <a href="./login">
              <Image src="/avatar1.png" alt="login" width={25} height={25} />
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
