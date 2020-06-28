// Cálculo do IMC

/* const nome = 'Marcos'
const peso = 84
const altura = 1.88

const imc = peso / (altura * altura) */

/* if (imc >= 30) {
    console.log(`${nome} você está acima do peso.`)
} else {
    console.log(`${nome} você não está acima do peso.`)
} */

// Cálculo da aposentadoria

const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

const regrasParaMulheres = idade + contribuicao >= 85 && contribuicao >= 30

const regrasParaHomens = idade + contribuicao >= 95 && contribuicao >= 35

if (sexo === 'F') {

    if (regrasParaMulheres) {  
        console.log(`${nome} você pode se aponsentar!`)
    } else {
        console.log(`${nome} você ainda não pode se aponsentar!`)
    }

} else {

    if (regrasParaHomens) {  
        console.log(`${nome} você pode se aponsentar!`)
    } else {
        console.log(`${nome} você ainda não pode se aponsentar!`)
    }
}