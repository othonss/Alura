import './Rodape.css'

const Rodape = () => {
    return (
        <footer className="footer">
            <div className="sociais">
                <img src="/imagens/fb.png" alt="Facebook"/>
                <img src="/imagens/tw.png" alt="Twitter"/>
                <img src="/imagens/ig.png" alt="Instagram"/>
            </div>
            <div className="logotipoOrgano">
                <img src="/imagens/logo.png" alt="Logotipo do Organo" />
            </div>
            <div className="dev">
                <p>Desenvolvido por Othon</p>
            </div>
        </footer>
    )
}

export default Rodape