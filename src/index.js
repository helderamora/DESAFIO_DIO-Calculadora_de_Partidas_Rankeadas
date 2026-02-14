const heroi = {
    vitorias: 100,
    derrotas: 2,
    nivel: '',
}

function calcularVitoria(heroi) {
    if (heroi.vitorias < 10) {
        return 'O Herói não atingiu o número de vitórias mínimo para ser classificado!'
    }
    
    switch(true) {
        case heroi.vitorias <= 10:
            heroi.nivel = 'FERRO'
            break
        case heroi.vitorias <= 20:
            heroi.nivel = 'BRONZE'
            break
        case heroi.vitorias <= 50:
            heroi.nivel = 'PRATA'
            break
        case heroi.vitorias <= 80:
            heroi.nivel = 'OURO'
            break
        case heroi.vitorias <= 90:
            heroi.nivel = 'DIAMANTE'
            break
        case heroi.vitorias <= 100:
            heroi.nivel = 'LENDÁRIO'
            break
        case heroi.vitorias >= 101:
            heroi.nivel = 'IMORTAL'    
            break
    }

    return heroi.nivel
}

console.log(`O herói tem saldo de ${heroi.vitorias} vitórias, está no nível ${calcularVitoria(heroi)}.`)
