import ehUmCPF from "./validaCPF.js"
import ehMaiorDeIdade from "./validaIdade.js"

const camposDoFormulario = document.querySelectorAll("[required]")

camposDoFormulario.forEach((campo) =>{
    campo.addEventListener("blur", () => verificarCampo(campo)) /*NOVIDADE! blur (tira o foco do input) gatilho para alguma ação*/
})

function verificarCampo(campo){
    if(campo.name == "cpf" && campo.value.length >= 11){
        ehUmCPF(campo)
    }
    
    if(campo.name == "aniversario" && campo.value != ""){
        ehMaiorDeIdade(campo)
    }
}