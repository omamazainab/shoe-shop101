import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


// Initial state

const initialState = {
    cart: []
};

// create context

export const GlobalContext = createContext(initialState);


// provider compnent

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    //Actions 

    function addProduct(product){
        dispatch({
            type: 'ADD_PRODUCT',
            payload: product
        });
    }


    return (
        <GlobalContext.Provider value={{ 
            cart: state.cart,
            addProduct
             }}>
            {children}
        </GlobalContext.Provider>
    );
}