"use client"
import React, { useState } from 'react';
import Image from "next/image";
import "./header.css";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className="navbar">
                <div className="itens-esquerda">
                    <a href=".">
                        <Image className="logo-header" src="/logo.png" alt="logo salesforce" width={80} height={40}/>
                    </a>
                    <nav className="links-paginas">
                        <a className="link-pagina" href="./crm">CRM</a>
                        <a className="link-pagina" href="https://salesforcecustomer360.herokuapp.com/quiz/1/">SuperPlataforma</a>
                        <a className="link-pagina" href="./produtos">Produtos</a>
                        <a className="link-pagina" href="./suporte">Suporte</a>
                        <a className="link-pagina" href="./empresa">Empresa</a>
                    </nav>
                </div>
                <button className="acessibilidade">
                    <Image src="/acessibilidade1.png" alt="icone de acessibilidade" width={26} height={26}/>
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
                    <div id="menu-dropdown">
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