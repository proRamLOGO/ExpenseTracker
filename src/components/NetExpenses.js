import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const NetExpenses = () => {

    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount) ;

    const gain = amounts.filter(item => item>0).reduce((acc,item) => acc+=item, 0).toFixed(2) ;
    const spend = Math.abs(amounts.filter(item => item<0).reduce((acc,item) => acc+=item, 0).toFixed(2)) ;

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Recieved</h4>
                <p id="money-plus" className="money plus">+ ₹{gain}</p>
            </div>
            <div>
                <h4>Spent</h4>
                <p id="money-minus" className="money minus">- ₹{spend}</p>
            </div>
        </div>
    )
}
