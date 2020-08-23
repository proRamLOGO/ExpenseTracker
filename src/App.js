import React from 'react';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {NetExpenses} from './components/NetExpenses';
import {TransactionsList} from './components/TransactionsList';
import {AddTransaction} from './components/AddTransaction';
import {Footer} from './components/Footer';

import {GlobalProvider} from './context/GlobalState'

import './App.css';

function App() {
  return (
    <>
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <NetExpenses />
        <AddTransaction />
        <TransactionsList />
      </div>
    </GlobalProvider>
    <Footer />
    </>
  );
}


export default App;
