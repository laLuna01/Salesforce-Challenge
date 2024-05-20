"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/navigation';
import "./login.css";
 
export default function Login() {
    let { push } = useRouter();

    let userID = 0;

    const [carregando, setCarregando] = useState(true);

    let [redireciona, setRedireciona] = useState(false);

    setTimeout(() => {
        setCarregando(false);
    }, 5000);

    useEffect(() => {
        if (localStorage.getItem('shouldRedirect') === 'true') {
            setRedireciona(true)
        }
      }, []);

    if (redireciona) {
        push('/logado');
    }

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
            result.forEach((usuario: any) => {
                if (usuario.email === email && usuario.senha === senha) {
                    userID = usuario.id;
                    console.log(userID)
                    localStorage.setItem('userID', String(userID));
                    setRedireciona(true)
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
    
    if (carregando) {
        console.log(carregando + " bah")
        return <p>Carregando...</p>;
    } else {

    return <section className="page">
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
        }
}