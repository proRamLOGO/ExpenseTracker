import React, {createContext, useReducer} from 'react' ;
import AppReducer from './AppReducer';

// init State
const initialState = {
    transactions: [
          { id: 1, text: 'Pizza', amount: 600, type: 'spend' },
          { id: 2, text: 'Groceries', amount: 3000 , type: 'gain'},
          { id: 3, text: 'Gulab Wala', amount: 500, type: 'spend' },
          { id: 4, text: 'Haldirams', amount: 750, type: 'gain' }
        ]
};

// Create Context
export const GlobalContext = createContext(initialState) ;

// Provider Component
export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        {children}
    </GlobalContext.Provider>)

}