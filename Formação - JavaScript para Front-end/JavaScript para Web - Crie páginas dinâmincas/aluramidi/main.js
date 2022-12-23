const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }else{
        alert('Elemento não encontrado ou seletor inválido');
    }
}

for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    /*
        O código abaixo, entre crases é chamado de Template String
        e foi uma solução de fazer com que seja preenchido o texto
        de forma dinâmica, através do valor obtido com o classList
        armazenado na constante instrumento.
    */
    const idAudio = `#som_${instrumento}`;

    /*
        Interessante destacar o motivo pelo qual foi utilizado a função
        anônima. 

        Qual era o problema:
            - Não podia adicionar parâmetro na função tocaSom, pois gerava
            um erro de inicialização de áudio ao decorrer do loop;
            - Se fazia necessário a passagem do parâmetro para o correto
            funcionamento da função.

        Solução:
            - Criar uma função anônima que só será invocada no momento
            do click oriundo da função onclick, que por sua vez contém
            a chamada da função tocaSom, agora com o parâmetro.
    */
    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    
    /* 
        onkeydown é referência a click pressionado com botão 
        O interessante é que o evento passado como parâmetro da função
        anônima recebe de fato dos eventos da função onkeydown
        possibilitando interagir com os valores.
    */

    tecla.onkeydown = function(evento){
        if(evento.code === 'Enter' || evento.code === 'Space'){
            tecla.classList.add('ativa');
        }
    }

    //onkeydown é referência da soltura do click com botão 
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}

