import Image from "next/image";
import "./header.css"

const Header = () => {
    return (
        <>
            <header className="navbar">
                <div className="itens-esquerda">
                    <a href=".">
                        <Image className="logo-header" src="/logo.png" alt="logo salesforce" width={80} height={40}/>
                    </a>
                    <nav className="links-paginas">
                        <a className="link-pagina" href="">CRM</a>
                        <a className="link-pagina" href="">SuperPlataforma</a>
                        <a className="link-pagina" href="">Produtos</a>
                        <a className="link-pagina" href="">Suporte</a>
                        <a className="link-pagina" href="">Empresa</a>
                    </nav>
                </div>
                <button className="acessibilidade">
                    <Image src="/acessibilidade1.png" alt="icone de acessibilidade" width={26} height={26}/>
                    <p>Acessibilidade</p>
                </button>
                <div className="itens-direita">
                    <button className="icone-pesquisar">
                        <Image src="/lupa1.png" alt="pesquisar" width={26} height={26}/>
                    </button>
                    <button className="icone-login">
                        <Image src="/avatar1.png" alt="login" width={25} height={25}/>
                    </button>
                </div>
            </header>
        </>
    );
};

export default Header;