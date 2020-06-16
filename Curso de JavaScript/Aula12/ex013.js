var diajava = new Date();
var diasem = diajava.getDay();
/*
Em JS os dias são números:
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado
Vamos usar o Switch pra receber o numero do dia e mostrar o dia
 */
console.log(`Dia em valor puro do JS: ${diasem}`);

switch(diasem) {
    case 0:
        console.log('Hoje é Domingo.');
        break
    case 1:
        console.log('Hoje é Segunda-feira.');
        break
    case 2:
        console.log('Hoje é Terça-feira.');
        break
    case 3:
        console.log('Hoje é Quarta-feira.');
        break
    case 4:
        console.log('Hoje é Quinta-feira.');
        break
    case 5:
        console.log('Hoje é Sexta-feira.');
        break
    case 6:
        console.log('Hoje é Sabado!');
        break
    default:
        console.log('[Erro :/] Dia inválido.');
        break
}