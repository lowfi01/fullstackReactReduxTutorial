"use strict"

import axios from 'axios';

// GET BOOKS 
export function getBooks(book) {
    return {
        type: "GET_BOOKS"
    }
}

// POST A BOOK
export function postBooks(book) {
    //redux-thunk function
    return function(dispatch){
        //use axios to make http request
        axios.post("/books", book).then((response) => {
            // dispatch will follow original process only with a success response from database
            dispatch({type:"POST_BOOK", payload: response.data})
        }).catch((err)=> {
            dispatch({type:"POST_BOOK_REJECTED", payload: "there was an error"})
        })
        }
    }


    // return {
    //     type: "POST_BOOK",
    //     payload: book
    // }


// DELETE A BOOK
export function deleteBooks(_id) {
    return {
        type: "DELETE_BOOK",
        payload: _id
    }
}

// UPDATE A BOOK
export function updateBooks(book) {
    return {
        type: "UPDATE_BOOK",
        payload: book
    }
}