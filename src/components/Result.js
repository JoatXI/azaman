import React from 'react'

function Result(props) {
    const {
        currencies,
        selectedCurrency,
        onCurrencyChange
    } = props;
    
    return (
        <div>
            <input type="number" />
            <select value={selectedCurrency} onChange={onCurrencyChange}>
                {currencies.map((currency, index) => (
                    <option key={index} value={currency}>{currency}</option>
                ))}
            </select>
            <button>Convert</button>
        </div>
      )
}

export default Result