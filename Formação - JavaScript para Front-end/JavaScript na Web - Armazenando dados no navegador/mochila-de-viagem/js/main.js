const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach((elemento) =>{
    criarElemento(elemento)
})

form.addEventListener("submit", (evento) =>{
    evento.preventDefault()
    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    /*
        O que está acontecendo nesta linha abaixo é uma função que recebe um parâmetro para comparar com o valor de outra constante.
        É o que a método find() procura dentro do array, caso for exatamente igual ao valor contido na constante o elemento retorna
        um valor verdadeiro. 
    */
    const existe = itens.find(elemento => elemento.nome === nome.value)

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if(existe){
        itemAtual.id = existe.id
        atualizaElemento(itemAtual)

        //Localiza a posição do id no objeto e sobre escreve a string
        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual
    }else{
        //Operador ternário 
        itemAtual.id = itens[itens.length -1] ? (itens[itens.length - 1]).id + 1 : 0
        criarElemento(itemAtual)
        itens.push(itemAtual)
    }

    //Local Storage só permite armazenar strings, devido a isso foi utilizado o JSON.stringify para converter o objeto em string
    localStorage.setItem("itens", JSON.stringify(itens))

    
    nome.value = ""
    quantidade.value = ""
})

function criarElemento(item){
    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = item.quantidade
    numeroItem.dataset.id = item.id

    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += item.nome

    novoItem.appendChild(botaoDeleta(item.id))

    lista.appendChild(novoItem)
}

function atualizaElemento(item){
    document.querySelector("[data-id='"+ item.id + "']").innerHTML = item.quantidade
}

function botaoDeleta(id){
    const elementoBotao = document.createElement("button")
    elementoBotao.innerText = "X"

    //Aqui não foi utilizado uma arrow function porque ela não leva à frente o this
    elementoBotao.addEventListener("click", function(){
        //Deleta o pai, que seria o li
        detelaElemento(this.parentNode, id)
    })

    return elementoBotao
}

function detelaElemento(tag, id){
    tag.remove()
    
   itens.splice(itens.findIndex(elemento => elemento.id === id), 1)

   localStorage.setItem("itens", JSON.stringify(itens))
}