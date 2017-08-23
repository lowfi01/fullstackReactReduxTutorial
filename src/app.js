"use strict"

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'

// REACT
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// IMPORT COMBINED REDUCERS
import reducers from './reducers/index';

// IMPORT ACTIONS
import { addToCart } from './actions/cartActions';
import { postBooks, deleteBooks, updateBooks} from './actions/booksActions'

// IMPORT COMPONENTS 
import BooksList from './components/pages/booksList';
import Menu from './components/menu';


//STEP 1 create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

render(
    <Provider store={store}>
        <div>
            <Menu />
            <BooksList />
        </div>
    </Provider>, document.getElementById('app')
);






// // ADD a book
    // store.dispatch(postBooks([{
    //     id: 1,
    //     title: 'this is the book title',
    //     description: 'this is the book description',
    //     price: 33.33
    // },
    // {
    //     id: 2,
    //     title: 'this is the second book title',
    //     description: 'this is the second book description',
    //     price: 603
    // },
    // {
    //     id: 4,
    //     title: 'this is book 4 title',
    //     description: 'this is the 4th book description',
    //     price: 603
    // }])
    // )

    // // DELETE a book

    // store.dispatch(deleteBooks({id: 4}))

    // // UPDATE a book

    // store.dispatch(updateBooks({
    //     id: 2,
    //     title: 'this is the new new title'
    // }))

    // // /// --->> CREATE CART ACTIONS <<--

    // store.dispatch(addToCart([{ id: 1 }]))




// // DISPATCH second action to post a new book
    // store.dispatch({
    //     type: "POST_BOOK",
    //     payload: [{
    //         id: 3,
    //         title: 'this is the third book title',
    //         description: 'this is the  third book description',
    //         price: 99
    //     }]
    // });







    // old code 

    // //step 1 create store   #to create store - you must pass the reducers as an argument
    // const store = createStore(reducers);
    // //to see what is the current state of the store, use subscribe method that add a listener to store, log result using getState
    // store.subscribe(function () {
    //     //console.log('current state is: ' + store.getState());
    //     console.log('current state is: ', store.getState());
    //     //console.log('current state cart', store.getState().cart)
    //     //console.log('current price 2nd book: ', store.getState()[1].price);
    //     //console.log('current description 1st book: ', store.getState()[0].description);
    // })

    // store.dispatch({
    //     type: "POST_BOOK",
    //     payload: [{
    //         id: 1,
    //         title: 'this is the book title',
    //         description: 'this is the book description',
    //         price: 33.33
    //     },
    //     {
    //         id: 2,
    //         title: 'this is the second book title',
    //         description: 'this is the second book description',
    //         price: 603
    //     }
    //     ]
    // })


    // // DELETE a book

    // store.dispatch({
    //     type: "DELETE_BOOK",
    //     payload: {
    //         id: 1
    //     }
    // });

    // store.dispatch({
    //     type: "ADD_TO_CART",
    //     payload: [{
    //         id: 1
    //     }]
    // });

    // // UPDATE a book

    // store.dispatch({
    //     type: "UPDATE_BOOK",
    //     payload: {
    //         id: 3,
    //         title: "this is a new title"
    //     }
    // })

    // OLD CODE - Working - react / redux console.log examples
    // "use strict"

    // import { createStore } from 'redux';

    // //step 3 define reducers
    // // create a reducer by passing two arguments, state & action which then returns the state
    // // note - you must set an initial value to the state, state=0;
    // // note - second version of this code - is passing POST_BOOK - state={}
    // const reducer = function (state = { books: [] }, action) {
    //     // the use of reducers is to evaluate what to do with the received action
    //     switch (action.type) {
    //         // if action type is = to increment, update state, add payload 
    //         // case "INCREMENT":
    //         //     return state + action.payload;
    //         //     break;
    //         // case "DECREMENT":
    //         //     return state - action.payload;
    //         //     break;
    //         // case "POST_BOOK1":
    //         //     return state = action.payload;
    //         //     break;
    //         case "POST_BOOK":
    //             // note - concat will add each action to books
    //             // output - first call will hold 2 books, second will hold 3
    //             // let books = state.books.concat(action.payload);
    //             // return {books};
    //             // spread operator - will create a copy of the combined arrays
    //             return { books: [...state.books, ...action.payload] }
    //             break;
    //         case "DELETE_BOOK":
    //             // Create a copy of the current array of books
    //             const currentBookToDelete = [...state.books]
    //             // Determine at which index in books array is the book to be deleted
    //             const indexToDelete = currentBookToDelete.findIndex(
    //                 function (book) {
    //                     return book.id === action.payload.id;
    //                 }
    //             )
    //             console.log(indexToDelete)
    //             // use slice to remove the book at the specified index
    //             return {
    //                 books: [...currentBookToDelete.slice(0, indexToDelete),
    //                 ...currentBookToDelete.slice(indexToDelete + 1)]
    //             }
    //             break;
    //         case "UPDATE_BOOK":
    //             // Create a copy of the current array of books
    //             const currentBookToUpdate = [...state.books]
    //             // Determine at which index in books array is the book to be deleted
    //             const indexToUpdate = currentBookToUpdate.findIndex(
    //                 function (book) {
    //                     return book.id === action.payload.id;
    //                 }
    //             )
    //             // Create a new book object with the new values and with the same array index of the item we want to replace. To achieve this we will use ...spread but we could use concat methods too
    //             const newBookToUpdate = {
    //                 ...currentBookToUpdate[indexToUpdate], title: action.payload.title
    //             }
    //             console.log("what is it newBookToUpdate", newBookToUpdate);
    //             //use slice to remove the book at the specified index, replace with the new object and concatenate
    //             return { books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)] }
    //             break;
    //     }
    //     return state;
    // }


    // //step 1 create store
    // //to create store - you must pass the reducers as an argument
    // const store = createStore(reducer);
    // //to see what is the current state of the store, use subscribe method that add a listener to store, log result using getState
    // store.subscribe(function () {
    //     //console.log('current state is: ' + store.getState());
    //     console.log('current state is: ', store.getState());
    //     //console.log('current price 2nd book: ', store.getState()[1].price);
    //     //console.log('current description 1st book: ', store.getState()[0].description);
    // })


    // //step 2 create & dispatch actions
    // // an action is made by a method that has two properties
    // // type = keyword, payload = Anything

    // // this will increment the value +1 //output = 1
    // // store.dispatch({ type: "INCREMENT", payload: 1 });
    // // this will increment the value +1 //output = 2
    // //store.dispatch({ type: "INCREMENT", payload: 1 });
    // // this will decrement the value - 1 // output = 1
    // //store.dispatch({ type: "DECREMENT", payload: 1 });

    // store.dispatch({
    //     type: "POST_BOOK",
    //     payload: [{
    //         id: 1,
    //         title: 'this is the book title',
    //         description: 'this is the book description',
    //         price: 33.33
    //     },
    //     {
    //         id: 2,
    //         title: 'this is the second book title',
    //         description: 'this is the second book description',
    //         price: 603
    //     }
    //     ]
    // })

    // // DISPATCH second action to post a new book

    // store.dispatch({
    //     type: "POST_BOOK",
    //     payload: [{
    //         id: 3,
    //         title: 'this is the third book title',
    //         description: 'this is the  third book description',
    //         price: 99
    //     }]
    // });


    // // DELETE a book

    // store.dispatch({
    //     type: "DELETE_BOOK",
    //     payload: {
    //         id: 1
    //     }
    // });


    // // UPDATE a book

    // store.dispatch({
    //     type: "UPDATE_BOOK",
    //     payload: {
    //         id: 3,
    //         title: "this is a new title"
    //     }
    // })
