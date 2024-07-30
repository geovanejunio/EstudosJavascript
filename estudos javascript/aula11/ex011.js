let idade = 18
console.log(`Voçê tem ${idade} anos! então voçe pode:`)
if (idade < 16){ // SE A IDADE FOR MENOR QUE 16
    console.log('Não pode votar por conta da baixa idade!') // NAO VOTA
} else if (idade < 18 || idade > 59) { // OU SE A IDADE FOR MENOR QUE 18 OU IDADE FOR MAIOR QUE 60 ANOS
    console.log('Votar, mas apenas opcional!') // O VOTO É OPCIONAL, 
} else if (idade >= 18) { // OU SE A IDADE FOR MAIOR OU IGUAL A 18
    console.log('Votar Obrigatóriamente!') // O VOTO É OBRIGATÓRIO
} // O ELSE IF É PARA CHAMAR UM  

// ESSE EXERCICIO FOI UM EXEMPLO PARA APRENDER SOBRE CONDIÇÕES ANINHADAS EM JAVASCRIPT

// CONDIÇÕES ANINHADAS: ESTRUTURAS DE CONTROLE DE FLUXO NO PROGRAMA 

// SE UMA CONDIÇÃO FOR VERDADEIRA, O PROGRAMA APENAS REALIZA ESSA CONDIÇÃO E IGNORA AS OUTRAS

// SE UMA CONDIÇÃO FOR FALSA, O PROGRAMA PULA PARA O CÓDIGO DE BAIXO ATÉ ENCONTRAR UMA CONDIÇÃO QUE O SATISFAÇA