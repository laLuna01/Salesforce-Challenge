import "./login.css";
 
export default function Login() {
    return (
        <>
            <section className="page">
                <form className="form" action="">
                    <h2 className="t-form">Login</h2>
                    <input className="input-login" id="email" type="email" placeholder="E-mail" required />
                    <input className="input-login" id="senha" type="password" placeholder="Senha" required />
                    <button className="botao-logar" type="submit">Logar</button>
                    <p className="cadastrar-p">Ainda não é cadastrado? <a href="./cadastro">Criar conta</a> </p>
                </form>
            </section>
        </>
    );
}