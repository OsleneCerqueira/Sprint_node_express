import readlineSync from 'readline-sync';


function ajudaDev() {

    let listaPropriedades = []

    let propriedade = readlineSync.question('Digite a propriedades de CSS que deseja armazenar: ')

    while (propriedade.toLocaleUpperCase() !== "SAIR") {
        
        listaPropriedades.push(propriedade);

        propriedade = readlineSync.question('Digite a propriedades de CSS que deseja armazenar: ')
    }


    console.log(listaPropriedades.sort().join('\n'))
}

ajudaDev()






