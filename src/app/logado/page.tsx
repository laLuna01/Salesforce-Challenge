"use client"
import { useState, useEffect, useRef, useCallback } from "react";
import Button from "../components/Button"
import "./logado.css";

export default function Logado() {
    let [carregando, setCarregando] = useState(true);

    let userID = useRef<string | null>(null);

    let nome = useRef<string | null>(null);
    let sobrenome = useRef<string | null>(null);
    let cpf = useRef<string | null>(null);
    let email = useRef<string | null>(null);
    let empresa_id = useRef<string | null>(null);

    let empresa = useRef<string | null>(null);
    let setor = useRef<string | null>(null);
    let cnpj = useRef<string | null>(null);
    let tamanho = useRef<string | null>(null);
    let brasileira = useRef<string | null>(null);

    const pegarInformacao = useCallback(async () => {
        if (userID.current != null) {
            try {
                const response = await fetch("http://localhost:8080/cliente/id/" + userID.current);
                const result = await response.json();
                console.log(result)

                nome.current = result.nome
                sobrenome.current = result.sobrenome
                cpf.current = result.cpf
                email.current = result.email
                empresa_id.current = result.empresa_id

            } catch (error) {
                console.error("Erro ao pegar dados:", error);
            }
            try {
                const response = await fetch("http://localhost:8080/empresa/id/" + empresa_id.current);
                const result = await response.json();
                console.log(result)

                empresa.current = result.nome
                setor.current = result.setor
                cnpj.current = result.cnpj
                tamanho.current = result.tamanho

                if (result.brasileira === false)  {
                    brasileira.current = "Não"
                }
                if (result.brasileira === true)  {
                    brasileira.current = "Sim"
                }
                setCarregando(false)
                console.log(carregando)
            } catch (error) {
                console.error("Erro ao pegar dados:", error);
            }
        }
    }, [carregando]);

    const sair = () => {
        localStorage.setItem('shouldRedirect', 'false');
    }  

    useEffect(() => {
        userID.current = localStorage.getItem('userID')
        pegarInformacao();
    }, [pegarInformacao]);

    if (carregando) {
        console.log(carregando + " bah")
        return <p>Carregando...</p>;
    } else {

    return <section className="logado">
            <h1 className="titulo">{"Olá " + nome.current + " " + sobrenome.current}</h1>
            <div className="informacoes">
                <div className="card">
                    <h2 className="info">Informações do Usuário</h2>
                    <p className="dado"><span>Nome: </span>{nome.current}</p>
                    <p className="dado"><span>Sobrenome: </span>{sobrenome.current}</p>
                    <p className="dado"><span>CPF: </span>{cpf.current}</p>
                    <p className="dado"><span>Email: </span>{email.current}</p>
                </div>
                <div className="card">
                    <h2 className="info">Informações da Empresa</h2>
                    <p className="dado"><span>Nome: </span>{empresa.current}</p>
                    <p className="dado"><span>Setor: </span>{setor.current}</p>
                    <p className="dado"><span>CNPJ: </span>{cnpj.current}</p>
                    <p className="dado"><span>Tamanho: </span>{tamanho.current}</p>
                    <p className="dado"><span>Brasileira: </span>{brasileira.current}</p>
                </div>
            </div>
            <div onClick={sair}>
                <Button texto="Sair" link="./login"/>
            </div>
        </section>;
    }
}