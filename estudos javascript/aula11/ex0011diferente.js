let idade = 70
if (idade < 16) {
    console.log('Não vota!')
} else {
    if (idade < 18 || idade > 59) {
        console.log('Voto Opcional!')
    } else {
        if (idade >= 18)
            console.log('Voto Obrigatório!')
    }
}