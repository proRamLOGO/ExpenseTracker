import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState' ;

export const AddTransaction = () => {

    const {addTransaction} = useContext(GlobalContext) ;    
    const {transactions} = useContext(GlobalContext);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    // console.log("Here "+transactions.length);
    var factor = 1;

    const onSubmit = e => {
        e.preventDefault();
        const newTransaction = {
          id: transactions.length+1,
          text,
          amount 
        }

        addTransaction(newTransaction);
    }

    const payReady  = e => {
      e.preventDefault();
      factor = -1 ;
      setAmount(Number(document.getElementById("amount").value)*factor);
      document.getElementById("payBtn").style.backgroundColor = "#e74c3c" ;
      document.getElementById("addBtn").style.backgroundColor = "rgb(239, 239, 239)" ;
    }
    const gainReady  = e => {
      e.preventDefault();
      factor = 1 ;
      setAmount(Number(document.getElementById("amount").value)*factor);
      document.getElementById("payBtn").style.backgroundColor = "rgb(239, 239, 239)" ;
      document.getElementById("addBtn").style.backgroundColor = "#17cf26" ;
    }


    return (
        <>
        <h3>ADD NEW TRANSACTION</h3>
        <form id="form">
          <div className="form-control">
            <label htmlFor="amount">Amount <br /></label>
            <br/>
            < button id="addBtn" className="btn2" style={{backgroundColor: "#17cf26"}} onClick={gainReady} >+</button>
            < button id="payBtn" className="btn2" onClick={payReady} >-</button>
            < input type="number" id="amount" onChange={ (e)=> setAmount( factor*e.target.value ) } placeholder="Enter amount..." />
          </div>
          <div className="form-control">
            <label htmlFor="text">Description</label>
            <input type="text" id="text" value={text} onChange={ (e)=> setText(e.target.value)} placeholder="Diya Gave / Payed Shubh ..." />
          </div>
          <button className="btn" onClick={onSubmit} >Add Transaction</button>
        </form>  
        </>
    )
}
