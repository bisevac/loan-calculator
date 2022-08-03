# loan

Loan calculate function in JavaScript.

## Example

```javascript
const resultLoan = calculateLoan({
    installment: 12,
    amount: 10000,
    interestRate: 2.5,
    bsmvRate: 0.1,
    kkdfRate: 0.15
})

console.log(resultLoan);
/* { monthlyPayment: 1012.131749839122, totalPayment: 12145.580998069465 } */
```
