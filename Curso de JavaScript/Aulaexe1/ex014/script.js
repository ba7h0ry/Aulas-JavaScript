function carregar(){
    msg = document.querySelector('div#msg')
    img = document.querySelector('img#imagem')
    data = new Date();
    hora = data.getHours();
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 6 && hora <= 12){
        msg.innerHTML +=  ` Bom dia!`
        img.src = 'manha.png';
        document.body.style.background = '#e2cd9f'
 
    } else if (hora >= 13 && hora <= 18 ) {
        msg.innerHTML += ` Boa tarde!`
        img.src = 'tarde.png';
        document.body.style.background = '#b9846f'
    } else {
        msg.innerHTML += ` Boa noite!`
        img.src = 'noite.png';
        document.body.style.background = '#05183b'
    }
}