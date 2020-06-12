function testador(){
    nacionalidade = document.querySelector('input#pais');
    nac = String(nacionalidade.value);
    resposta = document.querySelector('div#resultado');
    origem = document.querySelector('div#origem');
    
    
    if (nac ==  'Brasil' ||  nac== 'brasil'){
        resposta.innerHTML = 'Você é brasileiro';
    }else{
        resposta.innerHTML = `Você é estrangeiro.<br> Seu pais de origem é ${nac}`
    }
}