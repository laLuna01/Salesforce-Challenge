import { Props } from "./interface";
import Image from "next/image";
import "./setor.css";

const Setor = (props: Props) => {
    return (
        <>
            <div className="setor">
                <Image className="imagem-setor" src={props.imagem} alt={"icone de " + props.nome} width={80} height={80}/>
                <p className="nome-setor">{props.nome}</p>
            </div>
        </>
    );
};

export default Setor;