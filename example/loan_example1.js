const calculateLoan = require('../index');

const resultLoan = calculateLoan({
    installment: 12,
    amount: 10000,
    interestRate: 2.5,
    bsmvRate: 0.1,
    kkdfRate: 0.15
})

console.log(resultLoan);