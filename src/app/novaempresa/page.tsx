"use client";
import { useState, useEffect } from "react";
import "./novaempresa.css";
import Aviso from "../components/Aviso";
 
export default function NovaEmpresa() {

    const [mostrarAviso, setMostrarAviso] = useState(false);
    let mensagem = "";
    
    const [nome, setNome] = useState("")
    const [setor, setSetor] = useState("")
    const [cnpj, setCnpj] = useState("")
    const [tamanho, setTamanho] = useState("")
    const [brasileira, setBrasileira] = useState("")

    const changeNome = (event: any)=> {
        setNome(event.target.value)
    }
    const changeSetor = (event: any)=> {
        setSetor(event.target.value)
    }
    const changeCnpj = (event: any)=> {
        setCnpj(event.target.value)
    }
    const changeTamanho = (event: any)=> {
        setTamanho(event.target.value)
    }
    const changeBrasileira = (event: any)=> {
        setBrasileira(event.target.value)
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const enviarDados = async (event: any) => {
        event.preventDefault();

        const dadosEmpresa = {
            nome,
            setor,
            cnpj,
            tamanho,
            brasileira: Boolean(brasileira)
        };

        const response = await fetch("http://localhost:8080/empresa", {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(dadosEmpresa)
        });

        if (response.statusText === "Created") {
            setMostrarAviso(true);
            mensagem = "Empresa cadastrada"
        } else {
            setMostrarAviso(true);
            mensagem = "Ocorreu um erro"
        }
    };

    return (
        <>
            <section className="page">
                {mostrarAviso && <Aviso message={mensagem} />}
                <form className="form">
                    <h2 className="t-form">Cadastrar Empresa</h2>
                    <input value={nome} onChange={changeNome} className="input-novaempresa" id="nome" type="text" placeholder="Nome" required />
                    <input value={setor} onChange={changeSetor} className="input-novaempresa" id="setor" type="text" placeholder="Setor" required />
                    <input value={cnpj} onChange={changeCnpj} className="input-novaempresa" id="cnpj" type="text" placeholder="CNPJ" required />
                    <p className="p-checkbox">Tamanho da empresa:</p>
                    <div className="checkbox">
                        <div className="checkbox-item">
                            <input value="Pequena" onChange={changeTamanho} type="radio" name="tamanho" id="pequena" required />
                            <label htmlFor="pequena">Pequena</label>
                        </div>
                        <div className="checkbox-item">
                            <input value="Média" onChange={changeTamanho} type="radio" name="tamanho" id="media" required />
                            <label htmlFor="media">Média</label>
                        </div>
                        <div className="checkbox-item">
                            <input value="Grande" onChange={changeTamanho} type="radio" name="tamanho" id="grande" required />
                            <label htmlFor="grande">Grande</label>
                        </div>
                    </div>
                    <p className="p-checkbox">A empresa é brasileira?</p>
                    <div className="checkbox">
                        <div className="checkbox-item">
                            <input value="true" onChange={changeBrasileira} type="radio" name="brasileira" id="brasileira" required />
                            <label htmlFor="cliente">Sim</label>
                        </div>
                        <div className="checkbox-item">
                            <input value="false" onChange={changeBrasileira} type="radio" name="brasileira" id="estrangeira" required />
                            <label htmlFor="atendente">Não</label>
                        </div>
                    </div>
                    <button className="botao-cadastrar" type="submit" onClick={enviarDados}>Cadastrar</button>
                    <p className="voltar-p">Empresa já cadastrada? <a href="./cadastro">Voltar</a> </p>
                </form>
            </section>
        </>
    );
}