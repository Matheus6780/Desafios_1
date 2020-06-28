// Construção e impressão de objetos

const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereco: {
        rua: 'Rua Guilherme Gembala',
        numero: 260
    }
}

//console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)

const programador = {
    nome: 'Antônio',
    idade: 32,
    tecnologias: [
        { nome: 'C++', especialidade: 'Desktop' },
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
}


const { nome, idade, tecnologias: [ {nome: nomeDaTech, especialidade: nomeEspec } ] } = programador

const msg = `O usuário ${nome} tem ${idade} anos e usa a tecnologia ${nomeDaTech} com especialidade em ${nomeEspec}`

//console.log(msg)
