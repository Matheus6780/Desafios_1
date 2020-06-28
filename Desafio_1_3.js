// Usuários e Tecnologias

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ]

for(let i = 0; i < usuarios.length; i++) {
    
    let techs = ''

    for (let k = 0; k < usuarios[i].tecnologias.length; k++) {
        if (k < usuarios[i].tecnologias.length - 1) {
            techs += usuarios[i].tecnologias[k] + ', '
        } else { 
            techs += usuarios[i].tecnologias[k]
        }
    }
    //console.log(`${usuarios[i].nome} trabalha com ${techs}`)
}


//Busca por tecnologia

const trabalhaComCss = usuarios => {

    for(let i = 0; i < usuarios.length; i++) {
        
        for (let k = 0; k < usuarios[i].tecnologias.length; k++) {
            if (usuarios[i].tecnologias[k] === "CSS") {
               // console.log(`${usuarios[i].nome} trabalha com CSS.`)
            }
        }
    }
}

//trabalhaComCss(usuarios)

//Soma de Despesas e Receitas

const usuarios2 = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
]

const somaNumeros = numeros => {
    let somador = numeros[0]
    
    for (let i = 1; i < numeros.length; i ++) {
        somador += numeros[i]
    }

    return somador
}

const calculaSaldo = (receitas, despesas) => {
    return somaNumeros(receitas) - somaNumeros(despesas)
}  

for (let i = 0; i < usuarios2.length; i++) {

    let saldo = calculaSaldo(usuarios2[i].receitas, usuarios2[i].despesas).toFixed(1)
    
    if (saldo > 0) {
        console.log(`${usuarios2[i].nome} possui saldo POSITIVO de ${saldo}`)
    } else {
        console.log(`${usuarios2[i].nome} possui saldo NEGATIVO de ${saldo}`)
    }
}