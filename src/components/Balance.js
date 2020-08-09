import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState' ;

export const Balance = () => {
    const {transactions} = useContext(GlobalContext) ;
    const amounts = transactions.map(transacion => (transacion.amount)) ;
    // console.log(amounts);
    const netAmount = amounts.reduce((acc,item) => ( acc += item ), 0).toFixed(2); 

    return (
        <>
            <h3>Your Balance </h3>
            <h1 id="balance">₹ {netAmount}</h1>
        </>
    )
}
