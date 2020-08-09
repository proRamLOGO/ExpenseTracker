import React, {useContext} from 'react';
import {Transaction} from './Transaction' ;
import {GlobalContext} from '../context/GlobalState' ;

export const TransactionsList = () => {

    const {transactions} = useContext(GlobalContext) ;
    // console.log(context);
    return (
        <>
          <h3>HISTORY</h3>
            <ul id="list" className="list">
              {transactions.map(transaction => (
                <Transaction key={transaction.id} transaction={transaction} />
              ))}
              
            </ul>  
        </>
    )
}
