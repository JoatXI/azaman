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
    
    useEffect(() => {
        // Fetch currency data from API
        const currencyUrl = async () => {
            const response = await fetch('/api');
            const data = await response.json();
            const endCurrency = Object.keys(data.rates)[2]

            setCurrencies([data.base_currency_code, ...Object.keys(data.rates)])
            setInitialCurrency(data.base_currency_code)
            setTargetCurrency(endCurrency)
        };
        currencyUrl();
    }, []);

    return (
        <div className="App">
            <NavBar />
            <Converter currencies={currencies} selectedCurrency={initialCurrency} onCurrencyChange={e => setInitialCurrency(e.target.value)} />
            <Result currencies={currencies} selectedCurrency={targetCurrency} onCurrencyChange={e => setTargetCurrency(e.target.value)} />
        </div>
    );
}

export default App;