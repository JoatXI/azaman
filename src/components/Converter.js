import React from "react";

function Converter(props) {
    const {
        currencies,
        selectedCurrency,
        onCurrencyChange
    } = props;

    return (
        <div>
            <h1>Currency Converter</h1>
            <div>
                <input type="number" />
                <select value={selectedCurrency} onChange={onCurrencyChange}>
                    {currencies.map((currency, index) => (
                        <option key={index} value={currency}>{currency}</option>
                    ))}
                </select>
                <h3>={'>'}</h3>
            </div>
        </div>
    );
}

export default Converter;