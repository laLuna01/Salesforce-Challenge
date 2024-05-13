import Image from "next/image";
import Funcionalidade from "../components/Funcionalidade";
import "./crm.css";
 
export default function CRM() {
    return (
      <>
        <section className="o-que-e">
            <div className="section-content">
                <h2 className="titulo">O que é CRM?</h2>
                <p className="p-destaque">CRM (Customer Relationship Management) como o nome sugere é uma abordagem focada no cliente.</p>
                <p>Quando aplicado fortalece a relação com os clientes de uma forma eficaz permitindo gerenciar e analisar as interações com clientes, antecipar necessidades e desejos, otimizar a rentabilidade, aumentar as vendas e personalizar campanhas de captação de novos clientes.</p>
            </div>
            <div className="section-img">
                <Image src="/mascote-crm.png" alt="mascote da salesforce pensando" width={320} height={320}/>
            </div>
        </section>
        <section className="o-que-faz">
            <div className="section-img">
                <Image src="/mascote-crm1.png" alt="mascote da salesforce voando" width={400} height={300}/>
            </div>
            <div className="section-content">
                <h2 className="titulo">O que faz um CRM?</h2>
                <p>O CRM armazena informações de clientes atuais e potenciais, e suas atividades e pontos de contato com a empresa. Ele reúne e integra dados valiosos para preparar e atualizar suas equipes com informações pessoais dos clientes, histórico e preferência de compras.</p>
                <p className="p-destaque" id="destaque">Um software de CRM:</p>
            </div>
        </section>
        <section className="funcionalidades">
            <Funcionalidade imagem="/funcionalidade1.png" funcionalidade="Gerencia as informações dos clientes."/>
            <Funcionalidade imagem="/funcionalidade2.png" funcionalidade="Conecta sua equipe em qualquer dispositivo."/>
            <Funcionalidade imagem="/funcionalidade3.png" funcionalidade="Acompanhamento de leads mais efetivo."/>
            <Funcionalidade imagem="/funcionalidade4.png" funcionalidade="Recomendações e insights instantâneos."/>
        </section>
        <section className="beneficios">
            <div className="section-content">
                <h2 className="titulo">Benefícios do CRM</h2>
                <ul className="lista-beneficios">
                    <li>Organização de contatos e dados dos clientes</li>
                    <li>Automatização de tarefas manuais e recorrentes</li>
                    <li>Monitoramento e registro de interações com os clientes</li>
                    <li>Computação em nuvem, conectando os usuários por qualquer dispositivo</li>
                    <li>Maior integração entre as áreas da empresa</li>
                    <li>Geração de insights para a personalização do atendimento</li>
                    <li>Solução flexível e escalável</li>
                </ul>
            </div>
            <div className="section-img">
                <Image src="/mascote-crm2.png" alt="mascote salesforce alegre" width={450} height={450}/>
            </div>
        </section>
      </>
  );
}