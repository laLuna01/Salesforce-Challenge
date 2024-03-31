import { Props } from "./interface";
import Image from "next/image";
import "./aluno.css";

const Aluno = (props: Props) => {
    return (
        <>
            <div className="card-aluno">
                <div className="card-aluno-top">
                    <Image className="foto" src={props.foto} alt={props.nome + "foto"} width={200} height={200}/>
                    <h3 className="nome">{props.nome}</h3>
                </div>
                <div className="card-aluno-bottom">
                    <p className="rm">{"RM" + props.rm}</p>
                    <a className="github" href={props.github}>Github -&gt;</a>
                </div>
            </div>
        </>
    );
};

export default Aluno;