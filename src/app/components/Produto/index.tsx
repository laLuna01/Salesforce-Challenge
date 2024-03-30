import Image from "next/image";
import { Props } from "./interface";
import "./produto.css";

const Produto = (props: Props) => {
    return (
        <>
            <button className="produto">
                <Image className="imagem-produto" src={props.imagem} alt={"icone de " + props.nome} width={60} height={60}/>
                <p className="nome-produto">{props.nome}</p>
            </button>
        </>
    );
};

export default Produto;