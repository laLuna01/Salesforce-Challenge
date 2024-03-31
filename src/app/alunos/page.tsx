import Aluno from "../components/Aluno";
import Image from "next/image";
import "./alunos.css";

export default function Alunos() {
    return (
        <>
            <section className="alunos">
                <h1 className="titulo">Alunos:</h1>
                <div className="cards-alunos">
                    <Aluno nome="Luana Sousa Matos" rm={552621} github="https://github.com/laLuna01" foto="/luana.png"/>
                    <Aluno nome="Matheus de Freitas Silva" rm={552602} github="https://github.com/MatheusFreitasSilva" foto="/matheus.png"/>
                    <Aluno nome="Rodrigo Mendes de Almeida Silva" rm={553448} github="https://github.com/Rodrigomendesas" foto="/rodrigo.png"/>
                </div>
            </section>
            <section className="projeto">
                <h2 className="titulo">Links do projeto</h2>
                <div className="links-projeto">
                    <a className="repositorio" href="https://github.com/laLuna01/Salesforce-Sprint3">
                        <h3 className="link-projeto">Repositório no Github</h3>
                        <Image src="/github.png" alt="icone github" width={200} height={200}/>
                    </a>
                    <a className="figma" href="https://www.figma.com/file/IPrhCPs1NkTuVtkXCAy20R/Challenge_Home_Salesforce?type=design&node-id=0%3A1&mode=design&t=Swtbf3Ie7lZmorU7-1">
                        <h3 className="link-projeto">Design no Figma</h3>
                        <Image src="/figma.png" alt="icone figma" width={200} height={200}/>
                    </a>
                </div>
            </section>
        </>
    );
}