"use client";
import { useState, useEffect } from "react";
import "./cadastro.css";
 
export default function Cadastro() {
    const [mostrarAviso, setMostrarAviso] = useState(false);
    const [mensagem, setMensagem] = useState<string>("");
    
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [empresa, setEmpresa] = useState("")

    const changeNome = (event: any)=> {
        setNome(event.target.value)
    }
    const changeSobrenome = (event: any)=> {
        setSobrenome(event.target.value)
    }
    const changeCpf = (event: any)=> {
        setCpf(event.target.value)
    }
    const changeEmail = (event: any)=> {
        setEmail(event.target.value)
    }
    const changeSenha = (event: any)=> {
        setSenha(event.target.value)
    }
    const changeEmpresa = async (event: any)=> {
        setEmpresa(event.target.value)
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const pegarEmpresa = async () => {
        try {
            const response = await fetch("http://localhost:8080/empresa/cnpj/" + empresa);
            const result = await response.json()
            setEmpresa(result.id)
            console.log(empresa)
            // if (response.statusText === "Created") {
            //     setMostrarAviso(true);
            //     setMensagem("Empresa cadastrada");
            //     // setEmpresa("")
            // } else {
            //     setMostrarAviso(true);
            //     setMensagem("Ocorreu um erro");
            // }
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
            setMostrarAviso(true);
            setMensagem("Falha na conexão");
        }
    }
    
    const enviarDados = async (event: any) => {
        event.preventDefault();

        await pegarEmpresa()

        const dadosCliente = {
            nome,
            sobrenome,
            cpf,
            email,
            senha,
            empresa 
        };

        console.log(JSON.stringify(dadosCliente))

        try {
            const response = await fetch("http://localhost:8080/cliente", {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify(dadosCliente)
            });

            if (response.statusText === "Created") {
                setMostrarAviso(true);
                setMensagem("Cliente cadastrado");
            } else {
                setMostrarAviso(true);
                setMensagem("Ocorreu um erro");
            }
        } catch (error) {
            console.error("Erro ao enviar dados:", error);
            setMostrarAviso(true);
            setMensagem("Falha na conexão");
        }
    };

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
                <form className="form" action="">
                    <h2 className="t-form">Cadastro</h2>
                    <input value={nome} onChange={changeNome} className="input-cadastro" id="nome" type="text" placeholder="Nome" required />
                    <input value={sobrenome} onChange={changeSobrenome} className="input-cadastro" id="sobrenome" type="text" placeholder="Sobrenome" required />
                    <input value={cpf} onChange={changeCpf} className="input-cadastro" id="cpf" type="text" placeholder="CPF" required />
                    <input value={email} onChange={changeEmail} className="input-cadastro" id="email" type="email" placeholder="E-mail" required />
                    <input value={senha} onChange={changeSenha} className="input-cadastro" id="senha" type="password" placeholder="Senha" required />
                    <div className="itens-escondidos">
                        <input value={empresa} onChange={changeEmpresa} className="input-cadastro" type="text" id="empresa" placeholder="CNPJ Empresa" required />
                        <a href="./novaempresa">Empresa ainda não cadastrada</a>
                    </div>
                    <button className="botao-cadastrar" type="submit" onClick={enviarDados}>Cadastrar</button>
                    <p className="logar-p">Já tem uma conta? <a href="./login">Fazer login</a> </p>
                </form>
            </section>
        </>
    );
}