"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Produto from "../components/Produto";
import "./produtos.css";

export default function Produtos() {

    const [imagem, setImagem] = useState("p-einstein.svg")
    const [nome, setNome] = useState("Salesforce Einstein")
    const [descricao, setDescricao] = useState("O Salesforce Einstein é a inteligência artificial integrada em todas as nossas soluções, oferecendo insights preditivos, automação inteligente e personalização em escala.")
    const [recurso1, setRecurso1] = useState("Insights preditivos para orientar decisões")
    const [recurso2, setRecurso2] = useState("Automação inteligente de processos de negócios")
    const [recurso3, setRecurso3] = useState("Personalização em escala para experiências do cliente")
    const [recurso4, setRecurso4] = useState("Análises avançadas e descoberta de padrões")

    const mudarProduto = (produto: any) => {
        console.log(produto)
        if (produto === "einstein") {
            setImagem("/p-einstein.svg")
            setNome("Salesforce Einstein")
            setDescricao("O Salesforce Einstein é a inteligência artificial integrada em todas as nossas soluções, oferecendo insights preditivos, automação inteligente e personalização em escala.")
            setRecurso1("Insights preditivos para orientar decisões")
            setRecurso2("Automação inteligente de processos de negócios")
            setRecurso3("Personalização em escala para experiências do cliente")
            setRecurso4("Análises avançadas e descoberta de padrões")
        }
        if (produto === "vendas") {
            setImagem("/p-vendas.svg")
            setNome("Vendas")
            setDescricao("O Salesforce Sales Cloud é a plataforma líder em automação de vendas, permitindo às equipes de vendas fechar negócios mais rapidamente, melhorar a produtividade e prever resultados com precisão.")
            setRecurso1("Gestão de leads e oportunidades")
            setRecurso2("Automação de processos de vendas")
            setRecurso3("Análises de desempenho e previsões de vendas")
            setRecurso4("Ferramentas de colaboração para equipes de vendas")
        }
        if (produto === "atendimento") {
            setImagem("/p-atendimento.svg")
            setNome("Atendimento")
            setDescricao("O Salesforce Service Cloud é a principal plataforma de atendimento ao cliente, capacitando as empresas a oferecer suporte omnicanal, resolver problemas rapidamente e fornecer experiências excepcionais aos clientes.")
            setRecurso1("Gestão de casos e tickets")
            setRecurso2("Automação de atendimento ao cliente")
            setRecurso3("Central de conhecimento para autoatendimento")
            setRecurso4("Integração de canais de comunicação, incluindo redes sociais e chat ao vivo")
        }
        if (produto === "marketing") {
            setImagem("/p-marketing.svg")
            setNome("Marketing")
            setDescricao("O Salesforce Marketing Cloud é a plataforma líder em automação de marketing, permitindo às empresas criar jornadas de clientes personalizadas, enviar campanhas direcionadas e medir o impacto em tempo real.")
            setRecurso1("Segmentação avançada de audiência")
            setRecurso2("Automação de marketing multicanal")
            setRecurso3("Análises de marketing em tempo real")
            setRecurso4("Personalização de conteúdo e experiências")
        }
        if (produto === "comercio") {
            setImagem("/p-comercio.svg")
            setNome("Comércio")
            setDescricao("O Salesforce Commerce Cloud é a plataforma líder em comércio digital, capacitando as empresas a criar experiências de compra online envolventes, escaláveis e personalizadas.")
            setRecurso1("Gestão de catálogo de produtos")
            setRecurso2("Experiências de compra omnicanal")
            setRecurso3("Ferramentas de merchandising e personalização")
            setRecurso4("Integração com sistemas de CRM e ERP")
        }
        if (produto === "nuvem") {
            setImagem("/p-nuvem.svg")
            setNome("Nuvem")
            setDescricao("A Salesforce Cloud Platform é uma plataforma de desenvolvimento de aplicativos que permite às empresas criar, implantar e gerenciar aplicativos de negócios de maneira rápida e escalável.")
            setRecurso1("Ferramentas de desenvolvimento de baixo código")
            setRecurso2("Integrações pré-construídas com outras soluções Salesforce")
            setRecurso3("Infraestrutura segura e escalável na nuvem")
            setRecurso4("Suporte a vários idiomas e dispositivos")
        }
        if (produto === "tableau") {
            setImagem("/p-tableau.svg")
            setNome("Tableau")
            setDescricao("O Salesforce Tableau é a principal plataforma de análise e visualização de dados, permitindo às empresas descobrir insights ocultos, tomar decisões baseadas em dados e compartilhar informações de maneira eficaz.")
            setRecurso1("Visualização de dados interativos e intuitivos")
            setRecurso2("Conexão com uma ampla variedade de fontes de dados")
            setRecurso3("Análises avançadas e previsões")
            setRecurso4("Colaboração em tempo real em painéis e relatórios")
        }
        if (produto === "mulesoft") {
            setImagem("/p-mulesoft.svg")
            setNome("Mulesoft")
            setDescricao("O Salesforce MuleSoft é uma plataforma de integração de aplicativos que permite às empresas conectar sistemas e dados de maneira rápida e eficiente, facilitando a transformação digital e a interoperabilidade.")
            setRecurso1("Conectores pré-construídos para sistemas populares")
            setRecurso2("Integração de dados em tempo real")
            setRecurso3("Gerenciamento centralizado de APIs")
            setRecurso4("Ferramentas de segurança e conformidade")
        }
        if (produto === "slack") {
            setImagem("/p-slack.svg")
            setNome("Slack")
            setDescricao("O Salesforce Slack é a plataforma de comunicação e colaboração em equipe líder, permitindo às empresas se conectarem, colaborarem e realizarem o trabalho de qualquer lugar, em qualquer dispositivo.")
            setRecurso1("Canais de comunicação organizados por equipe e projeto")
            setRecurso2("Mensagens instantâneas e chamadas de voz/vídeo")
            setRecurso3("Integração com aplicativos e serviços de terceiros")
            setRecurso4("Ferramentas avançadas de pesquisa e arquivamento de mensagens")
        }
        if (produto === "plataforma") {
            setImagem("/p-plataforma.svg")
            setNome("Plataforma")
            setDescricao("A Salesforce Platform é uma plataforma de desenvolvimento de aplicativos que permite às empresas criar aplicativos personalizados para atender às suas necessidades específicas de negócios.")
            setRecurso1("Ferramentas de desenvolvimento visual e baseado em código")
            setRecurso2("Integração com dados e processos existentes")
            setRecurso3("Segurança de nível empresarial e conformidade")
            setRecurso4("Implantação em nuvem pública, privada ou híbrida")
        }
        if (produto === "netzero") {
            setImagem("/p-netzero.svg")
            setNome("Net Zero")
            setDescricao("O Salesforce NetZero é uma iniciativa dedicada a alcançar emissões líquidas zero de carbono em todas as operações e atividades relacionadas aos negócios até 2040, em linha com as metas de sustentabilidade global.")
            setRecurso1("Estratégias de redução de emissões de carbono")
            setRecurso2("Compensação de carbono e investimentos em energias renováveis")
            setRecurso3("Inovação em processos e tecnologias sustentáveis")
            setRecurso4("Colaboração com parceiros e partes interessadas")
        }
        if (produto === "parceiros") {
            setImagem("/p-parceiros.svg")
            setNome("Parceiros")
            setDescricao("O Salesforce Partner Program é um programa abrangente que capacita empresas de consultoria, integradores de sistemas, ISVs e revendedores a crescerem e prosperarem no ecossistema Salesforce.")
            setRecurso1("Treinamento e certificação em produtos Salesforce")
            setRecurso2("Acesso a recursos de marketing e vendas")
            setRecurso3("Oportunidades de co-venda e colaboração")
            setRecurso4("Suporte dedicado e acesso antecipado a inovações")
        }
        if (produto === "sucesso") {
            setImagem("/p-sucesso.svg")
            setNome("Sucesso")
            setDescricao("O Salesforce Customer Success oferece uma ampla gama de serviços e recursos para garantir que os clientes obtenham o máximo valor de suas soluções Salesforce, desde a implementação até a otimização contínua.")
            setRecurso1("Consultoria especializada e planejamento estratégico")
            setRecurso2("Suporte técnico 24/7")
            setRecurso3("Treinamentos e workshops personalizados")
            setRecurso4("Acesso a uma comunidade de usuários e parceiros")
        }
        if (produto === "pequenasempresas") {
            setImagem("/p-pequenasempresas.svg")
            setNome("Pequenas Empresas")
            setDescricao("O Salesforce Essentials é uma solução integrada de CRM projetada especificamente para pequenas empresas, ajudando-as a gerenciar seus clientes e crescer de forma eficiente e econômica.")
            setRecurso1("Gestão simplificada de contatos e leads")
            setRecurso2("Automação básica de marketing e vendas")
            setRecurso3("Relatórios e dashboards fáceis de usar")
            setRecurso4("Configuração rápida e suporte dedicado")
        }
        
    }

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
                <div onClick={() => { mudarProduto("einstein"); }}>
                    <Produto imagem="/p-einstein.svg" nome="Einstein IA"/>
                </div>
                <div onClick={() => { mudarProduto("vendas"); }}>
                    <Produto imagem="/p-vendas.svg" nome="Vendas"/>
                </div>
                <div onClick={() => { mudarProduto("atendimento"); }}>
                    <Produto imagem="/p-atendimento.svg" nome="Atendimento"/>
                </div>
                <div onClick={() => { mudarProduto("marketing"); }}>
                    <Produto imagem="/p-marketing.svg" nome="Marketing"/>
                </div>
                <div onClick={() => { mudarProduto("comercio"); }}>
                    <Produto imagem="/p-comercio.svg" nome="Comércio"/>
                </div>
                <div onClick={() => { mudarProduto("nuvem"); }}>
                    <Produto imagem="/p-nuvem.svg" nome="Nuvem"/>
                </div>
                <div onClick={() => { mudarProduto("tableau"); }}>
                    <Produto imagem="/p-tableau.svg" nome="Tableau"/>
                </div>
                <div onClick={() => { mudarProduto("mulesoft"); }}>
                    <Produto imagem="/p-mulesoft.svg" nome="MuleSoft"/>
                </div>
                <div onClick={() => { mudarProduto("slack"); }}>
                    <Produto imagem="/p-slack.svg" nome="Slack"/>
                </div>
                <div onClick={() => { mudarProduto("plataforma"); }}>
                    <Produto imagem="/p-plataforma.svg" nome="Plataforma"/>
                </div>
                <div onClick={() => { mudarProduto("netzero"); }}>
                    <Produto imagem="/p-netzero.svg" nome="Net Zero"/>
                </div>
                <div onClick={() => { mudarProduto("parceiros"); }}>
                    <Produto imagem="/p-parceiros.svg" nome="Parceiros"/>
                </div>
                <div onClick={() => { mudarProduto("sucesso"); }}>
                    <Produto imagem="/p-sucesso.svg" nome="Sucesso"/>
                </div>
                <div onClick={() => { mudarProduto("pequenasempresas"); }}>
                    <Produto imagem="/p-pequenasempresas.svg" nome="Pequenas Empresas"/>
                </div>
            </section>
            <section className="produto-escolhido">
                <div className="section-img">
                    <Image src={imagem} alt="icone do produto" width={300} height={300}/>
                </div>
                <div className="section-content">
                    <h2 className="titulo">{nome}</h2>
                    <p>{descricao}</p>
                    <p className="recursos"><b>Recursos Principais:</b></p>
                    <ul className="lista-recursos">
                        <li>{recurso1}</li>
                        <li>{recurso2}</li>
                        <li>{recurso3}</li>
                        <li>{recurso4}</li>
                    </ul>
                </div>
            </section>
        </>
    );
}