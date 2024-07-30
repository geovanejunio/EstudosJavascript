var agora = new Date()
var diaSem = agora.getDay()
/* DIAS DA SEMANA
    0 = DOMINGO
    1 = SEGUNDA
    2 = TERÇA
    3 = QUARTA
    4 = QUINTA 
    5 = SEXTA
    6 = SÁBADO
*/

// O PRIMEIRO NUMERO COMEÇA SEMPRE NO 0 

// CONDIÇÕES MULTIPLAS: VÁRIAS CONDIÇÕES DA MESMA VARIÁVEL

// CONDIÇÕES COMPOSTAS: IF E ELSE 

// CONDIÇÕES ANINHADAS: ELSE IF, CONDIÇÕES HIERÁRQUICAS QUE EXECUTA UM COMANDO QUANDO UM RESULTADO É SATISFEITO
console.log(diaSem)
    switch (diaSem) {
        case 0:
            console.log('Domingo')
            break;
        case 1:
            console.log('Segunda-Feira')
            break;
        case 2:
            console.log('Terça-Feira')
            break;
        case 3:
            console.log('Quarta-Feira')
            break;
        case 4:
            console.log('Quinta-Feira')
            break;
        case 5:
            console.log('Sexta-Feira')
            break;
        case 6:
            console.log('Sábado')  
            break;
        default:
            console.log('Dia inválido')
            break;
    }
