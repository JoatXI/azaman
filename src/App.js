import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Converter from './components/Converter';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Converter />
        </div>
    );
}

export default App;