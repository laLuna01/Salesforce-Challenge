"use client"
import { useState, useEffect } from "react";
import Button from "../components/Button"
import "./logado.css";

export default function Logado() {
    let userID = localStorage.getItem('userID')

    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [empresa_id, setEmpresa_id] = useState("")

    const [empresa, setEmpresa] = useState("")
    const [setor, setSetor] = useState("")
    const [cnpj, setCnpj] = useState("")
    const [tamanho, setTamanho] = useState("")
    const [brasileira, setBrasileira] = useState("")

    const pegarInformacao = async () => {
        try {
            const response = await fetch("http://localhost:8080/cliente/id/" + userID);
            const result = await response.json();

            setNome(result.nome)
            setSobrenome(result.sobrenome)
            setCpf(result.cpf)
            setEmail(result.email)
            setEmpresa_id(result.empresa_id)

        } catch (error) {
            console.error("Erro ao pegar dados:", error);
        }
        try {
            const response = await fetch("http://localhost:8080/empresa/id/" + empresa_id);
            const result = await response.json();

            setEmpresa(result.nome)
            setSetor(result.setor)
            setCnpj(result.cnpj)
            setTamanho(result.tamanho)

            if (result.brasileira === false)  {
                setBrasileira("Não")
            }
            if (result.brasileira === true)  {
                setBrasileira("Sim")
            }

        } catch (error) {
            console.error("Erro ao pegar dados:", error);
        }
    };
    
    pegarInformacao();

    const sair = () => {
        localStorage.setItem('shouldRedirect', 'false');
    }  

    const [mostrarAviso, setMostrarAviso] = useState(false);
    const [mensagem, setMensagem] = useState<string>("");

    const fechar = () => {
        setMostrarAviso(false);
    }

    return (
        <>
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
            <section className="logado">
                <h1 className="titulo">{"Olá " + nome + " " + sobrenome}</h1>
                <div className="informacoes">
                    <div className="card">
                        <h2 className="info">Informações do Usuário</h2>
                        <p className="dado"><span>Nome: </span>{nome}</p>
                        <p className="dado"><span>Sobrenome: </span>{sobrenome}</p>
                        <p className="dado"><span>CPF: </span>{cpf}</p>
                        <p className="dado"><span>Email: </span>{email}</p>
                    </div>
                    <div className="card">
                        <h2 className="info">Informações da Empresa</h2>
                        <p className="dado"><span>Nome: </span>{empresa}</p>
                        <p className="dado"><span>Setor: </span>{setor}</p>
                        <p className="dado"><span>CNPJ: </span>{cnpj}</p>
                        <p className="dado"><span>Tamanho: </span>{tamanho}</p>
                        <p className="dado"><span>Brasileira: </span>{brasileira}</p>
                    </div>
                </div>
                <div onClick={sair}>
                    <Button texto="Sair" link="./login"/>
                </div>
            </section>
        </>
    )
}