import React from "react";

function Converter(props) {
    const {
        currencies,
        selectedCurrency,
        onCurrencyChange,
        onAmountChange,
        amount
    } = props;

    return (
        <div>
            <h1>Currency Converter</h1>
            <input type="number" value={amount} onChange={onAmountChange} />
            <select value={selectedCurrency} onChange={onCurrencyChange}>
                {currencies.map((currency, index) => (
                    <option key={index} value={currency}>{currency}</option>
                ))}
            </select>
            <h3>={'>'}</h3>
        </div>
    );
}

export default Converter;