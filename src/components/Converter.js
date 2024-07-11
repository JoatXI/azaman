import React, { useEffect } from "react";

function Converter() {
    return (
        <div>
            <h1>Currency Converter</h1>
            <div>
                <input type="number" />
                <select>
                    <option value="CURR">USD</option>
                </select>
                <h3>={'>'}</h3>
                <input type="number" />
                <select>
                    <option value="CURR">USD</option>
                </select>
                <button>Convert</button>
            </div>
        </div>
    );
}

export default Converter;