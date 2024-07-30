let agora = new Date()
// NEW DATE É UM OBJETO QUE SE COMPORTA COMO UMA FUNÇÃO QUE CARREGA INFORMAÇÕES SOBRE DATA E HORA
let hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas!`)
if (hora >= 0 && hora < 6) {
    console.log('Boa Madrugada!')
} else if (hora < 12) {
    console.log ('Bom dia!')
} else if (hora < 18) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}