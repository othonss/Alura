import { conectaApi } from "./conectaAPI.js"

const formulario = document.querySelector("[data-formulario]")

async function criarVideo(evento){
    evento.preventDefault() /* Previne o comportamento padrão de dar refresh na página */
    const imagem = document.querySelector("[data-imagem]").value
    const url = document.querySelector("[data-url]").value
    const titulo = document.querySelector("[data-titulo]").value
    const descricao = Math.floor(Math.random() * 10).toString()

    try{
        await conectaApi.criaVideo(titulo, descricao, url, imagem) /* Importante a ordem ser igual ao que foi especificado na função */
        window.location.href = "../pages/envio-concluido.html"
    } catch(e) {
        alert(e)
    }
}

formulario.addEventListener("submit", evento => criarVideo(evento))