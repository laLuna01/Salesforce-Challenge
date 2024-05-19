"use client"
import Button from "../components/Button"

export default function Logado() {
    const sair = ()=> {
        localStorage.setItem('shouldRedirect', 'false');
    }  

    return (
        <>
            <h1>Oiee</h1>
            <div onClick={sair}>
                <Button texto="Sair" link="./login"/>
            </div>
        </>
    )
}