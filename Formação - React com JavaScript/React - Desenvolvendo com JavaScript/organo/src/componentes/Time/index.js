import './Time.css'

const Time = (props) => {
    const backgroundSection = { backgroundColor: props.corSecundaria }
    const borderTitle = { borderColor: props.corPrimaria }
    return (
        <section className="time" style={backgroundSection}>
            <h3 style={borderTitle}>{props.nome}</h3>
        </section>
    )
}

export default Time