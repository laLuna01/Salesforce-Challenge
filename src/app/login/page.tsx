"use client";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import "./login.css";
 
export default function Login() {
    let { push } = useRouter();

    let userID = 0;

    const [shouldRedirect, setShouldRedirect] = useState(() => {
        return localStorage.getItem('shouldRedirect') === 'true';
    });

    useEffect(() => {
        if (shouldRedirect) {
            push('/logado');
        }
    }, [shouldRedirect, push]);

    const [mostrarAviso, setMostrarAviso] = useState(false);
    const [mensagem, setMensagem] = useState<string>("");

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const changeEmail = (event: any)=> {
        setEmail(event.target.value)
    }
    const changeSenha = (event: any)=> {
        setSenha(event.target.value)
    }  

    const verificarLogin = async (event: any) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/cliente");
            const result = await response.json();
            result.forEach(usuario => {
                if (usuario.email === email && usuario.senha === senha) {
                    userID = usuario.id;
                    console.log(userID)
                    setShouldRedirect(true);
                    localStorage.setItem('shouldRedirect', 'true');
                }
            });
        } catch (error) {
            console.error("Erro ao pegar dados:", error);
            setMostrarAviso(true);
            setMensagem("Falha na conexão");
        }
        if (userID === 0) {
            setMostrarAviso(true);
            setMensagem("Email ou senha incorretos");
        }
    }

    const fechar = () => {
        setMostrarAviso(false);
    }
    return (
        <>
            <section className="page">
                {mostrarAviso &&
                    <div className="alert-container">
                        <div className="alert">
                            <span onClick={fechar} className="close-btn">
                            &times;
                            </span>
                            <p>{mensagem}</p>
                        </div>
                    </div>
                }
                <form className="form">
                    <h2 className="t-form">Login</h2>
                    <input value={email} onChange={changeEmail} className="input-login" id="email" type="email" placeholder="E-mail" required />
                    <input value={senha} onChange={changeSenha} className="input-login" id="senha" type="password" placeholder="Senha" required />
                    <button className="botao-logar" type="submit" onClick={verificarLogin}>Logar</button>
                    <p className="cadastrar-p">Ainda não é cadastrado? <a href="./cadastro">Criar conta</a> </p>
                </form>
            </section>
        </>
    );
}