async function buscaEndereco(cep){
    var mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = ""
    try{
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCep.json();
        if(consultaCEPConvertida.erro){
            throw Error('CEP não existente!')
        }
        var cidade = document.getElementById('cidade')
        var logradouro = document.getElementById('endereco')
        var estado = document.getElementById('estado')

        cidade.value = consultaCEPConvertida.localidade
        logradouro.value = consultaCEPConvertida.logradouro
        estado.value = consultaCEPConvertida.uf

        console.log(consultaCEPConvertida)
        return consultaCEPConvertida
    }catch(erro){
        mensagemErro.innerHTML = `<p>CEP inválido, tente novamente!</p>`
        console.log(erro)
    }
}

/*
let ceps = ['01001000', '01001001']
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores))
Promise.all(conjuntoCeps).then(respostas => console.log(respostas))
*/

var cep = document.getElementById('cep')

cep.addEventListener("focusout", () => buscaEndereco(cep.value))