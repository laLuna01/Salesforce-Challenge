import { Props } from "./interface";
import "./button.css";

const Button = (props: Props) => {
    return (
        <>
            <a href={props.link}>
                <button className="base-button">{props.texto}</button>
            </a>
        </>
    );
};

export default Button;