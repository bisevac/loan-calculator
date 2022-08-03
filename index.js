/**
 * @summary Calculate Loan
 * @param {Object}  [props]
 * @param {Number}  [props.amount=0] - Amount of Credit
 * @param {Number}  [props.interestRate=0] - Nominal monthly interest rate
 * @param {Number}  [props.installment=0] - installment
 * @param {Number}  [props.bsmvRate=0] - Banking and Insurance Transactions Tax | Banka Sigorta Muameleleri Vergisi
 * @param {Number}  [props.kkdfRate=0] - Resource Utilization Support Fund | Kaynak Kullanımı Destekleme Fonu
 * @param {Object}  [props.extraTaxRate=0] - Extra Tax Rate
 * @return {{monthlyPayment: Number, totalPayment: Number}} 
 */
module.exports = function (props) {
    if (!props) props = {};

    const amount = props.amount || 0;
    const interestRate = props.interestRate || 0;
    const installment = props.installment || 0;
    const bsmvRate = props.bsmvRate || 0;
    const kkdfRate = props.kkdfRate || 0;
    const extraTaxRate = props.extraTaxRate || 0;

    const rate = (interestRate / 100) * (1 + bsmvRate + kkdfRate + extraTaxRate);

    const monthlyPayment = (amount * rate * (Math.pow(1 + rate, installment))) / (Math.pow(1 + rate, installment) - 1);
    const totalPayment = (monthlyPayment * installment);

    return {
        monthlyPayment,
        totalPayment
    }
}

