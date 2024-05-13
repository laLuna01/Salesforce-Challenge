import Image from "next/image";
import "./empresa.css";
 
export default function Empresa() {
    return (
        <>
            <section className="sobre">
                <div className="section-content">
                    <h1 className="titulo">O que é a Empresa <br /><span className="t-destaque">Salesforce?</span></h1>
                    <p className="p-destaque">É a #1 em ajudar empresas a se conectarem com os clientes.</p>
                    <p>Nós estamos na era do cliente, da transformação digital, da tecnologia e as empresas são bem-sucedidas quando criam conexões e nossa missão é entregá-las. Fundada em 1999 a Salesforce revolucionou a forma como as empresas interagem com seus clientes, oferecendo uma plataforma que abrange vendas, serviços, marketing e mais.</p>
                </div>
                <div className="section-img">
                    <Image src="/imagem-empresa.png" alt="imagem de pessoas conectadas" width={500} height={500}/>
                </div>
            </section>
            <section className="historia">
                <div className="section-img">
                    <Image src="/imagem-empresa1.png" alt="imagem " width={300} height={400}/>
                </div>
                <div className="section-content">
                    <h2 className="titulo">Conheça a nossa <br /><span className="t-destaque">História</span></h2>
                    <p className="p-destaque">Os primeiros a adotar nosso modelo baseado em nuvem deram um salto significativo.</p>
                    <p>Em 1999, os fundadores da Salesforce, trabalhando em um pequeno apartamento de São Francisco, lançaram um sistema de gerenciamento de relacionamento com o cliente com uma abordagem inovadora. Todo o software e dados críticos do cliente seriam hospedados na Internet e disponibilizados como um serviço de assinatura. Esse modelo pioneiro de “software como serviço”, ou SaaS, se espalhou rapidamente pelo setor de tecnologia.</p>
                </div>
            </section>
            <section className="impacto">
                <div className="section-content">
                    <h2 className="titulo">Qual o nosso impacto na <br /><span className="t-destaque">Sociedade?</span></h2>
                    <p className="p-destaque">O impacto da Salesforce se estende além do mundo dos negócios:</p>
                    <ul className="lista-impacto">
                        <li><strong>Transformação Digital:</strong> A Salesforce tem sido fundamental na transformação digital de empresas, capacitando-as a migrar para a nuvem, adotar estratégias de marketing digital, implementar soluções de CRM, impulsionar o crescimento dos negócios e melhorar a relação com o cliente.</li>
                        <li><strong>Inovação Tecnológica:</strong> Como líder em inovação tecnológica, a Salesforce continua a desenvolver novas soluções e ferramentas para ajudar as empresas a se manterem à frente da concorrência e se adaptarem às demandas do mercado em constante mudança.</li>
                        <li><strong>Responsabilidade Social Corporativa:</strong> A Salesforce está comprometida com a responsabilidade social corporativa, dedicando recursos e esforços para causas importantes, como educação, igualdade de gênero, sustentabilidade ambiental e acesso igualitário à tecnologia.</li>
                    </ul>
                </div>
                <div className="section-img">
                    <Image src="/imagem-empresa2.jpg" alt="imagem de duas crianças com camisetas da salesforce se abraçando" width={500} height={450}/>
                </div>
            </section>
            <section className="valores">
                <div className="section-img">
                    <Image src="/imagem-empresa3.png" alt="imagem de pessoas lutando por suas causas" width={500} height={500}/>
                </div>
                <div className="section-content">
                    <h2 className="titulo">Quais são os nossos <br /><span className="t-destaque">Valores?</span></h2>
                    <p className="p-destaque">Os valores fundamentais da Salesforce guiam todas as suas atividades e interações:</p>
                    <ul className="lista-valores">
                        <li><strong>Inovação:</strong> Acreditamos na inovação contínua como motor do sucesso dos nossos clientes e da nossa própria evolução como empresa.</li>
                        <li><strong>Integridade:</strong> Operamos com os mais altos padrões éticos, promovendo a transparência e a confiança em todas as nossas relações.</li>
                        <li><strong>Igualdade:</strong> Valorizamos a diversidade e a inclusão, promovendo um ambiente de trabalho onde todas as pessoas são respeitadas e têm oportunidades iguais de crescimento e sucesso.</li>
                        <li><strong>Compromisso com a Comunidade:</strong> Estamos empenhados em fazer uma diferença positiva nas comunidades em que vivemos e trabalhamos, investindo em iniciativas de filantropia e promovendo mudanças sociais significativas.</li>
                    </ul>
                    <p>Esses valores fundamentais são a espinha dorsal da cultura da Salesforce, impulsionando-nos a alcançar novos patamares de excelência e a criar um impacto positivo duradouro no mundo.</p>
                </div>
            </section>
        </>
    );
}