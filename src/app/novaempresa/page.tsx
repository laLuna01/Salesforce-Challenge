import "./novaempresa.css";
 
export default function NovaEmpresa() {
    return (
        <>
            <section className="page">
                <form className="form" action="">
                    <h2 className="t-form">Cadastrar Empresa</h2>
                    <input className="input-novaempresa" id="nome" type="text" placeholder="Nome" required />
                    <input className="input-novaempresa" id="setor" type="text" placeholder="Setor" required />
                    <input className="input-novaempresa" id="cnpj" type="text" placeholder="CNPJ" required />
                    <p className="p-checkbox">Tamanho da empresa:</p>
                    <div className="checkbox">
                        <div className="checkbox-item">
                            <input type="radio" name="tamanho" id="pequena" required />
                            <label htmlFor="pequena">Pequena</label>
                        </div>
                        <div className="checkbox-item">
                            <input type="radio" name="tamanho" id="media" required />
                            <label htmlFor="media">Média</label>
                        </div>
                        <div className="checkbox-item">
                            <input type="radio" name="tamanho" id="grande" required />
                            <label htmlFor="grande">Grande</label>
                        </div>
                    </div>
                    <p className="p-checkbox">A empresa é brasileira?</p>
                    <div className="checkbox">
                        <div className="checkbox-item">
                            <input type="radio" name="brasileira" id="brasileira" required />
                            <label htmlFor="cliente">Sim</label>
                        </div>
                        <div className="checkbox-item">
                            <input type="radio" name="brasileira" id="estrangeira" required />
                            <label htmlFor="atendente">Não</label>
                        </div>
                    </div>
                    <button className="botao-cadastrar" type="submit">Cadastrar</button>
                    <p className="voltar-p">Empresa já cadastrada? <a href="./cadastro">Voltar</a> </p>
                </form>
            </section>
        </>
    );
}