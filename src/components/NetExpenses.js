import React from 'react'

export const NetExpenses = () => {
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Recieved</h4>
                <p id="money-plus" className="money plus">+ ₹0.00</p>
            </div>
            <div>
                <h4>Spent</h4>
                <p id="money-minus" className="money minus">- ₹0.00</p>
            </div>
        </div>
    )
}
