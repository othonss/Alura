import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
    const backgroundSection = { backgroundColor: props.corSecundaria }
    const borderTitle = { borderColor: props.corPrimaria }
    return (
       (props.colaboradores.length > 0) ? <section className="time" style={backgroundSection}>
            <h3 style={borderTitle}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador  key={colaborador.nome} corDeFundo={props.corPrimaria} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)} 
            </div>
        </section>
        : ''
    )
}

export default Time