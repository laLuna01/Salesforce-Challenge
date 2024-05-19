import Image from "next/image";
import "./suporte.css";

export default function Suporte() {
    return (
        <>  
            <section className="contato">
                <div className="section-img">
                    <Image src="/mascote-suporte.png" alt="Mascote da salesforce em atendimento" width={500} height={400}/>
                </div>
                <div className="section-content">
                    <h1 className="titulo">Aqui nós te damos <br /><span className="t-destaque">Suporte</span></h1>
                    <p>Se você tiver dúvidas, comentários ou precisar de assistência, não hesite em entrar em contato conosco. Nossa equipe de especialistas está pronta para ajudá-lo em qualquer etapa do seu processo.</p>
                    <p className="p-destaque" id="opcoes-contato">Opções de Contato:</p>
                    <ul className="lista-contato">
                        <li><b>Telefone: </b>0800 891 1887</li>
                        <li><b>Chat: </b>Utilize nosso chat para obter respostas rápidas às suas perguntas</li>
                        <li><b>Formulário: </b>Preencha o formulário mais abaixo e nos envie</li>
                    </ul>
                </div>
            </section>
            <section className="formulario-contato">
                <div className="form-img"></div>
                <div className="form-contato">
                    <form action="#">
                        <h3>Contato</h3>
                        <input className="contato-input" type="text" placeholder="Nome completo" required/>
                        <input className="contato-input" type="email" placeholder="E-mail" required/>
                        <input className="contato-input" type="phone" placeholder="Telefone" required/>
                        <textarea className="contato-input" name="mensagem-contato" id="mensagem-contato" cols={30} rows={4} placeholder="Mensagem" required></textarea>
                        <button className="enviar" type="submit">Enviar</button>
                    </form>
                </div>
            </section>
        </>
    );
}