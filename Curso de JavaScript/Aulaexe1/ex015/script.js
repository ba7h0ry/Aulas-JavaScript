function verificar(){
    data = new Date();
    ano = data.getFullYear(); //get o valor de ano com os 4 digitos
    fano = document.querySelector('input#txtano'); // cria "um formulário ano" que vai receber o valo ano do formulario html
    res = document.querySelector('div#res');
    if (fano.value.length == 0 || fano.value > ano || fano.value < 1900){ //.value.length e .vlaue são coisas diferentes!
        alert('[Erro] ano invalido!');
    }else{
        fsex = document.getElementsByName('radsex');
        idade = ano - Number(fano.value) //deu um trabalhão pra fazer isso
        genero = ''
        img = document.createElement('img')//criando elemento img no html
        img.setAttribute('id', 'foto') //dando atributo id para elemento img e o nome foto para o atributo
        if (fsex[0].checked){ //das marcações do radio element
            genero = 'homem'
            if (idade >= 0 && idade < 13){
                //criança
                img.setAttribute('src', 'homemcriança.png') //dando atributo src para a foto
            }else if (idade < 25){
                //jovem
                img.setAttribute('src', 'homemjovem.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'homemadulto.png')
            }else {
                //idoso
                img.setAttribute('src', 'homemvelho.png')
            }
        }else{
            genero = 'mulher'
            if (idade >= 0 && idade < 13){
                //criança
                img.setAttribute('src', 'mulhercriança.png')
            }else if (idade < 25){
                //jovem
                img.setAttribute('src', 'mulherjovem.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'mulheradulta.png')
            }else {
                //idoso
                img.setAttribute('src', 'mulhersenhora.png')
            }
        }
        if (genero == 'mulher'){
            res.innerHTML = `Você é uma ${genero} de ${idade} anos.`
            res.appendChild(img) // adicionando o img ao html
        }else if (genero == 'homem')
            res.innerHTML = `Você é um ${genero} de ${idade} anos.`
            res.appendChild(img)
    }   
}