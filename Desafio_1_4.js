
const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
  }

const createTransaction = transaction => {

    if (transaction.type === 'credit' || transaction.type === 'debit') {

        if (transaction.type === 'credit') {

            user.transactions.push(transaction)
            user.balance += transaction.value

        } else {
            
            user.transactions.push(transaction)
            user.balance -= transaction.value
        }
        
    } 

    return 
}

//Relatórios

const anotherUser = {
    name: "Mariana",
    transactions: [
        { type: 'credit', value: 200 },
        { type: 'debit', value: 200 },
        { type: 'credit', value: 200 },
        { type: 'debit', value: 200 },
        { type: 'debit', value: 200 },
        { type: 'debit', value: 200 },
    ],
    balance: 0
}

const getHigherTransactionByType = type => {

    if (!(type.toLowerCase() === 'credit') && !(type.toLowerCase() === 'debit'))
    return
    
    let somador = 0
    let transactObj
    for (let i = 0; i < user.transactions.length; i++) {

        if (user.transactions[i].type === type && user.transactions[i].value > somador){
            somador = user.transactions[i].value
            transactObj = {...user.transactions[i]}
        }
            
    }
    return transactObj
}

const getAverageTransactionValue = () => {

    let somador = anotherUser.transactions[0].value
    for(let i = 1; i < anotherUser.transactions.length; i++) {
        somador += anotherUser.transactions[i].value
    }

    return somador
}

const getTransactionsCount = () => {

    const data = { debit: 0, credit: 0 }
    for(let i = 0; i < anotherUser.transactions.length; i++) {

        anotherUser.transactions[i].type === 'credit' ? data.credit++ : data.debit++
    }

    return data
}

