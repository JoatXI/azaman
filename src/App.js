import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Converter from './components/Converter';
import Result from './components/Result';

function App() {

    const [currencies, setCurrencies] = useState([]);
    const [initialCurrency, setInitialCurrency] = useState();
    const [targetCurrency, setTargetCurrency] = useState();
    const [amount, setAmount] = useState(1);
    const [baseAmount, setBaseAmount] = useState(true);
    const [exchangeRate, setExchangeRate] = useState(0);
    
    let startAmount, resultAmount
    if (baseAmount) {
        startAmount = amount
        resultAmount = amount * exchangeRate
    } else {
        resultAmount = amount
        startAmount = amount / exchangeRate
    }

    useEffect(() => {
        // Fetch currency data from API
        const currencyUrl = async () => {
            const response = await fetch('/api');
            const data = await response.json();
            const endCurrency = Object.keys(data.rates)[2]

            setCurrencies([data.base_currency_code, ...Object.keys(data.rates)])
            setInitialCurrency(data.base_currency_code)
            setTargetCurrency(endCurrency)

            setExchangeRate(data.rates[endCurrency].rate);
        };
        currencyUrl();
    }, []);

    useEffect(() => {
        if (initialCurrency !== undefined && targetCurrency !== undefined) {
            const currencyUrl = async () => {
                const response = await fetch(`/convert/${initialCurrency}/${targetCurrency}/${amount}`);
                const data = await response.json();

                setExchangeRate(data.rates[targetCurrency].rate);
            };
            currencyUrl();
        };
    }, [initialCurrency, targetCurrency]);

    return (
        <div className="App">
            <NavBar />
            <Converter
                currencies={currencies}
                selectedCurrency={initialCurrency}
                onCurrencyChange={e => setInitialCurrency(e.target.value)}
                onAmountChange={handleStartAmountChange}
                amount={startAmount}
            />
            <Result
                currencies={currencies}
                selectedCurrency={targetCurrency}
                onCurrencyChange={e => setTargetCurrency(e.target.value)}
                onAmountChange={handleResultAmountChange}
                amount={resultAmount}
            />
        </div>
    );

    function handleStartAmountChange(e) {
        setAmount(e.target.value);
        setBaseAmount(true);
    }

    function handleResultAmountChange(e) {
        setAmount(e.target.value);
        setBaseAmount(false);
    }
}

export default App;