import React from 'react'
import { v4 as uuid_v4 } from "uuid";

export default function CurrencyRow(props) {    
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props

    
    return (
        <div>
            <input type="number" className="input" value={amount.toString()} onChange={onChangeAmount}/>            
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option => {
                    return <option key={uuid_v4()} value={option}>{option}</option>
                })}            
            </select>           
        </div>
    )
}
