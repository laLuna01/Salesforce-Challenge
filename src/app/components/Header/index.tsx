"use client"
import React, { useState } from 'react';
import Image from "next/image";
import "./header.css";

let zoomCount = 0;

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [isMenuOpen1, setIsMenuOpen1] = useState(false);

    const toggleMenu1 = () => {
        setIsMenuOpen1(!isMenuOpen1);
    };

    const zoomIncrement = 0.2; // Incremento de zoom desejado em porcentagem
    // Função para aumentar o zoom
    function aumentar() {
        if (zoomCount < 4) {
            zoomCount++;
            const currentZoom = parseFloat((document.body.style as any).zoom) || 1; // Type assertion para any para evitar erros de TypeScript
            const newZoom = currentZoom + zoomIncrement;
            (document.body.style as any).zoom = `${newZoom}`; // Type assertion para any para evitar erros de TypeScript
        }
        if (zoomCount === 4) {
            zoomCount = 0;
            (document.body.style as any).zoom = "1"; // Type assertion para any para evitar erros de TypeScript
        }
    }

    return (
        <>
            <header className="navbar">
                <div className="itens-esquerda">
                    <a href=".">
                        <Image className="logo-header" src="/logo.png" alt="logo salesforce" width={80} height={40}/>
                    </a>
                    <nav className="links-paginas">
                        <a id='text' className="link-pagina" href="./crm">CRM</a>
                        <a id='text' className="link-pagina" href="https://salesforcecustomer360.herokuapp.com/quiz/1/">SuperPlataforma</a>
                        <a id='text' className="link-pagina" href="./produtos">Produtos</a>
                        <a id='text' className="link-pagina" href="./suporte">Suporte</a>
                        <a id='text' className="link-pagina" href="./empresa">Empresa</a>
                    </nav>
                </div>
                <button className="acessibilidade" onClick={toggleMenu1}>
                    <Image src="/acessibilidade1.png" alt="icone de acessibilidade" width={26} height={26}/>
                    {isMenuOpen1 && (
                    <div className="botoes-acessibilidade">
                        <button className='cores'>
                            <Image src="/cores.svg" alt="cores" width={26} height={26}/>
                            Cores
                        </button>
                        <button className='tamanho' onClick={aumentar}>
                            <Image src="/texto.svg" alt="texto" width={26} height={26}/>
                            Tamanho
                        </button>
                    </div>
                    )}
                </button>
                <div className="itens-direita">
                    <button className="icone-pesquisar">
                        <Image src="/lupa1.png" alt="pesquisar" width={26} height={26}/>
                    </button>
                    <button className="icone-login">
                        <a href="./login">
                            <Image src="/avatar1.png" alt="login" width={25} height={25}/>
                        </a>
                    </button>
                    <button className="menu-hamburger" onClick={toggleMenu}></button>
                    {isMenuOpen && (
                    <div className="menu-dropdown">
                        <nav className="links-paginas-dropdown">
                            <a className="link-pagina" href="./crm">CRM</a>
                            <a className="link-pagina" href="https://salesforcecustomer360.herokuapp.com/quiz/1/">SuperPlataforma</a>
                            <a className="link-pagina" href="./produtos">Produtos</a>
                            <a className="link-pagina" href="./suporte">Suporte</a>
                            <a className="link-pagina" href="./empresa">Empresa</a>
                        </nav>
                        <button className="login-dropdown">
                            <a href="./login">
                                <Image src="/avatar1.png" alt="login" width={25} height={25}/>
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