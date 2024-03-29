import { Props } from "./interface";
import Image from "next/image";
import "./funcionalidade.css";

const Funcionalidade = (props: Props) => {
    return (
        <>
            <div className="funcionalidade">
                <Image className="imagem-funcionalidade" src={props.imagem} alt={"imagem decorativa"} width={200} height={150}/>
                <p className="legenda-funcionalidade">{props.funcionalidade}</p>
            </div>
        </>
    );
};

export default Funcionalidade;