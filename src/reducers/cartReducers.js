"use strict"

// CART REDUCERS
export function cartReducers(state={cart: []}, action) {
    switch(action.type) {
        case "UPDATE_CART": 
            // TOOK CODE FROM bookReducer
            const currentBookToUpdate = [...state.cart]
            const indexToUpdate = currentBookToUpdate.findIndex(
                function (book) {
                    return book._id === action._id;
                }
            )
            const newBookToUpdate = {
                ...currentBookToUpdate[indexToUpdate], 
                quantity: currentBookToUpdate[indexToUpdate].quantity + action.unit
            }
            let cartUpdate = [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]
            return {...state, 
                cart: cartUpdate
            }
            
            break;

        case "ADD_TO_CART": 
            return {cart: [...state, ...action.payload]}
            break;

        case "DELETE_CART_ITEM": 
            return {cart: [...state, ...action.payload]}
            break;
    }
    return state;
}