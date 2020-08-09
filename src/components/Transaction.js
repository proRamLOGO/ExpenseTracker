import React from 'react'

export const Transaction = ({transaction}) => {
    const sign = transaction.type === "spend" ? '-' : '+' ;
    const type = transaction.type === "spend" ? "minus" : "plus" ;
    return (  
      <li className={type} >
        {transaction.text}
        <strong><span>{sign} ₹{Math.abs(transaction.amount)}</span></strong>
        <button className="delete-btn">x</button>
      </li>
    )
}
