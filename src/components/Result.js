import React from 'react'

function Result(props) {
    const {
        currencies,
        selectedCurrency,
        onCurrencyChange,
        onAmountChange,
        amount
    } = props;
    
    return (
        <div>
            <input type="number" value={amount} onChange={onAmountChange} />
            <select value={selectedCurrency} onChange={onCurrencyChange}>
                {currencies.map((currency, index) => (
                    <option key={index} value={currency}>{currency}</option>
                ))}
            </select>
        </div>
      )
}

export default Result