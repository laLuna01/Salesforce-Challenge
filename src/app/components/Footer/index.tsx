import Image from "next/image";
import "./footer.css"

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-column" id="footer-1">
                    <Image className="logo-footer" src="/logo.png" alt="logo salesforce" width={90} height={70}/>
                    <div className="redes-sociais">
                        <a href="https://www.facebook.com/SalesforceBrasil/" target="_blank">
                            <Image className="icone" src="/facebook1.png" alt="facebook" width={20} height={20}/>
                        </a>
                        <a href="https://www.instagram.com/salesforcebrasil/" target="_blank">
                            <Image className="icone" src="/instagram1.png" alt="instagram" width={20} height={20}/>
                        </a>
                        <a href="https://br.linkedin.com/company/salesforce" target="_blank">
                            <Image className="icone" src="/linkedin1.png" alt="linkedin" width={20} height={20}/>
                        </a>
                        <a href="https://twitter.com/salesforce_br" target="_blank">
                            <Image className="icone" src="/twitter.png" alt="twitter" width={20} height={20}/>
                        </a>
                        <a href="https://www.youtube.com/c/SalesforceBrasil" target="_blank">
                            <Image className="icone" src="/youtube1.png" alt="youtube" width={20} height={20}/>
                        </a>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <p>Conheça a Salesforce</p>
                        <a href="">Exemplo de link 1</a>
                        <a href="">Exemplo de link 2</a>
                        <a href="">Exemplo de link 3</a>
                        <a href="">Exemplo de link 4</a>
                    </div>
                    <div className="footer-column">
                        <p>Sobre a empresa</p>
                        <a href="">Exemplo de link 5</a>
                        <a href="">Exemplo de link 6</a>
                        <a href="">Exemplo de link 7</a>
                        <a href="">Exemplo de link 8</a>
                    </div>
                    <div className="footer-column">
                        <p>Links populares</p>
                        <a href="">Exemplo de link 9</a>
                        <a href="">Exemplo de link 10</a>
                        <a href="">Exemplo de link 11</a>
                        <a href="">Exemplo de link 12</a>
                    </div>
                    <div className="footer-column" id="pagina-alunos">
	                    <p>
		                    <a href="./alunos">Alunos e projeto</a>
	                    </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;