import Image from "next/image";
import Produto from "../components/Produto";
import "./produtos.css";

export default function Produtos() {
    return (
        <>  
            <section className="quais-produtos">
                <div className="section-image">
                    <Image src="/imagem-produtos.png" alt="mulher rodeada dos produtos da salesforce" width={400} height={400}/>
                </div>
                <div className="section-content">
                    <h1 className="titulo" id="quais-sao">Quais são os nossos <br /><span className="t-destaque">Produtos?</span></h1>
                    <p>Desde o gerenciamento de relacionamento com o cliente até a automação de vendas e além, nossos produtos são projetados para capacitar sua equipe, ampliar suas operações e criar experiências excepcionais para seus clientes.</p>
                    <p className="p-destaque" id="clique-produtos"><b>Clique</b> nos produtos para saber mais:</p>
                </div>
            </section>
            <section className="produtos">
                <Produto imagem="/p-einstein.svg" nome="Einstein IA"/>
                <Produto imagem="/p-vendas.svg" nome="Vendas"/>
                <Produto imagem="/p-atendimento.svg" nome="Atendimento"/>
                <Produto imagem="/p-marketing.svg" nome="Marketing"/>
                <Produto imagem="/p-comercio.svg" nome="Comércio"/>
                <Produto imagem="/p-nuvem.svg" nome="Nuvem"/>
                <Produto imagem="/p-tableau.svg" nome="Tableau"/>
                <Produto imagem="/p-mulesoft.svg" nome="MuleSoft"/>
                <Produto imagem="/p-slack.svg" nome="Slack"/>
                <Produto imagem="/p-plataforma.svg" nome="Plataforma"/>
                <Produto imagem="/p-netzero.svg" nome="Net Zero"/>
                <Produto imagem="/p-parceiros.svg" nome="Parceiros"/>
                <Produto imagem="/p-sucesso.svg" nome="Sucesso"/>
                <Produto imagem="/p-pequenasempresas.svg" nome="Pequenas Empresas"/>
            </section>
            <section className="produto-escolhido">
                <div className="section-img">
                    <Image src="p-einstein.svg" alt="icone do produto" width={300} height={300}/>
                </div>
                <div className="section-content">
                    <h2 className="titulo">Salesforce Einstein</h2>
                    <p>O Salesforce Einstein é a inteligência artificial integrada em todas as nossas soluções, oferecendo insights preditivos, automação inteligente e personalização em escala.</p>
                    <p className="recursos"><b>Recursos Principais:</b></p>
                    <ul className="lista-recursos">
                        <li>Insights preditivos para orientar decisões</li>
                        <li>Automação inteligente de processos de negócios</li>
                        <li>Personalização em escala para experiências do cliente</li>
                        <li>Análises avançadas e descoberta de padrões</li>
                    </ul>
                </div>
            </section>
        </>
    );
}