import Image from "next/image";
import Button from "./components/Button";
import Setor from "./components/Setor";

export default function Home() {
  return (
    <>
      <main>
        <section className="home-inicio">
          <div className="section-content">
            <h1 className="titulo">Seu negócio no ar <br /><span className="t-destaque">Você no controle</span></h1>
            <p className="p-destaque">em um sistema muito mais completo  que uma plataforma - uma <strong>SuperPlataforma</strong></p>
            <p>Com uma <strong>SuperPlataforma</strong> de CRM, você terá as tecnologias corporativas mais inovadoras, utilizando as informações dos clientes para gerenciar contas, leads e oportunidades em um único local.</p>
            <div className="section-button">
              <Button texto="Monte a sua SuperPlataforma" link="" />
            </div>
          </div>
          <div className="section-img">
            <Image src="/mascote-home.png" alt="mascote da salesforce em um movimento alegre" width={450} height={400} />
          </div>
        </section>
        <section className="home-setores">
          <div className="section-img">
            <Image src="/mascote-home1.png" alt="mascote da salesforce segurando a mão de duas pessoas" width={470} height={410} />
          </div>
          <div className="section-content">
            <h2 className="titulo">A Salesforce é para <br /><span className="t-destaque">todo mundo</span></h2>
            <div className="icones-setores">
              <Setor imagem="/i-manufatura.svg" nome="Manufatura" />
              <Setor imagem="/i-financeiro.svg" nome="Financeiro" />
              <Setor imagem="/i-consumo.svg" nome="Consumo" />
              <Setor imagem="/i-comunicacao.svg" nome="Comunicação" />
              <Setor imagem="/i-publico.svg" nome="Público" />
              <Setor imagem="/i-midia.svg" nome="Mídia" />
              <Setor imagem="/i-varejo.svg" nome="Varejo" />
              <Setor imagem="/i-saude.svg" nome="Saúde" />
            </div>
          </div>
        </section>
        <section className="home-teste">
          <div className="section-content">
            <h2 className="titulo">Experimente o Starter <br /><span className="t-destaque">Gratuitamente</span></h2>
            <p>Experimente o Salesforce <strong>gratuitamente</strong>. Não é necessário cartão de crédito nem instalação de software.</p>
            <div className="section-button">
              <Button texto="Teste Gratuito" link="" />
            </div>
          </div>
          <div className="section-img">
            <Image src="/mascote-home2.png" alt="mascote da salesforce seguindo um caminho" width={450} height={400} />
          </div>
        </section>
      </main>
    </>
  );
}
