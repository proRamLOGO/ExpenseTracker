import React, {createContext, useReducer} from 'react' ;
import AppReducer from './AppReducer';

// init State
const initialState = {
    transactions: [
          { id: 1, text: 'Pizza', amount: -600 },
          { id: 2, text: 'Groceries', amount: 3000 },
          { id: 3, text: 'Gulab Wala', amount: -500 },
          { id: 4, text: 'Haldirams', amount: -750 }
        ]
};

// Create Context
export const GlobalContext = createContext(initialState) ;

// Provider Component
export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions to call reducer
    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)

}