import React, {useState} from 'react'

export const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    return (
        <>
        <h3>ADD NEW TRANSACTION</h3>
        <form id="form">
          <div className="form-control">
            <label htmlFor="text">Description</label>
            <input type="text" id="text" value={text} onChange={ (e)=> setText(e.target.value)} placeholder="Diya Gave / Payed Shubh ..." />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount <br /></label>
            <br/>
            < button id="addBtn" className="btn2" >+</button>
            < button id="payBtn" className="btn2" >-</button>
            <input type="number" id="amount" value={amount} onChange={ (e)=> setAmount(e.target.value)} placeholder="Enter amount..." />
          </div>
          <button className="btn">Add Transaction</button>
        </form>  
        </>
    )
}
