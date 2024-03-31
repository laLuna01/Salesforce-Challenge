import "./cadastro.css";
 
export default function Cadastro() {
    return (
        <>
            <section className="page">
                <form className="form" action="">
                    <h2 className="t-form">Cadastro</h2>
                    <input className="input-cadastro" id="nome" type="text" placeholder="Nome" required />
                    <input className="input-cadastro" id="sobrenome" type="text" placeholder="Sobrenome" required />
                    <input className="input-cadastro" id="cpf" type="text" placeholder="CPF" required />
                    <input className="input-cadastro" id="email" type="email" placeholder="E-mail" required />
                    <input className="input-cadastro" id="senha" type="password" placeholder="Senha" required />
                    <div className="checkbox">
                        <div className="checkbox-item">
                            <input type="radio" name="tipo" id="cliente" required />
                            <label htmlFor="cliente">Sou cliente</label>
                        </div>
                        <div className="checkbox-item">
                            <input type="radio" name="tipo" id="atendente" required />
                            <label htmlFor="atendente">Sou atendente</label>
                        </div>
                    </div>
                    <div className="itens-escondidos">
                        <input className="input-cadastro" type="text" id="empresa" placeholder="Empresa" required />
                        <a href="./novaempresa">Empresa ainda não cadastrada</a>
                    </div>
                    <button className="botao-cadastrar" type="submit">Cadastrar</button>
                    <p className="logar-p">Já tem uma conta? <a href="./login">Fazer login</a> </p>
                </form>
            </section>
        </>
    );
}