import React from 'react'

export const Transaction = ({transaction}) => {
    const sign = transaction.amount<0 ? '-' : '+' ;
    const type = transaction.amount<0 ? "minus" : "plus" ;
    return (  
      <li className={type} >
        {transaction.text}
        <strong><span>{sign} ₹{Math.abs(transaction.amount)}</span></strong>
        <button className="delete-btn">x</button>
      </li>
    )
}
