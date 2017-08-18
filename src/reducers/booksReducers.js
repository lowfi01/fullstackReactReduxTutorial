"use strict"



//step 3 define reducers
export function booksReducers(state = { // we hard code te books data
    books: [{
        id: 1,
        title: 'this is the book title',
        description: 'this is the book description',
        price: 40.33
    },
    {
        id: 2,
        title: 'this is the second book title',
        description: 'this is the second book description',
        price: 60
    }] }, action) {
    // the use of reducers is to evaluate what to do with the received action
    switch (action.type) {
        case "GET_BOOKS" : 
            // will return a copy of state & a copy of the books array from state
            return {...state, books: [...state.books]}
        case "POST_BOOK":
            return { books: [...state.books, ...action.payload] }
            break;
        case "DELETE_BOOK":
            // Create a copy of the current array of books
            const currentBookToDelete = [...state.books]
            // Determine at which index in books array is the book to be deleted
            const indexToDelete = currentBookToDelete.findIndex(
                function (book) {
                    return book.id === action.payload.id;
                }
            )
            //console.log(indexToDelete)
            // use slice to remove the book at the specified index
            return {
                books: [...currentBookToDelete.slice(0, indexToDelete),
                ...currentBookToDelete.slice(indexToDelete + 1)]
            }
            break;
        case "UPDATE_BOOK":
            // Create a copy of the current array of books
            const currentBookToUpdate = [...state.books]
            // Determine at which index in books array is the book to be deleted
            const indexToUpdate = currentBookToUpdate.findIndex(
                function (book) {
                    return book.id === action.payload.id;
                }
            )
            // Create a new book object with the new values and with the same array index of the item we want to replace. To achieve this we will use ...spread but we could use concat methods too
            const newBookToUpdate = {
                ...currentBookToUpdate[indexToUpdate], title: action.payload.title
            }
            //console.log("what is it newBookToUpdate", newBookToUpdate);
            //use slice to remove the book at the specified index, replace with the new object and concatenate
            return { books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)] }
            break;
    }
    return state;
}