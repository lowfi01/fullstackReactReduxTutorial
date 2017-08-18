// BookList will be our smart component

"use strict"

import React from 'react';
import { connect } from 'react-redux';

class BooksList extends React.Component{
    render() {
        //console.log('ARE WE ACCESSING THE STATE?? : ', this.props.books);
        const booksList = this.props.books.map(function(booksArr){
            return(
                <div key={booksArr.id}>
                    <h2>{booksArr.title}</h2>
                    <h2>{booksArr.description}</h2>
                    <h2>{booksArr.price}</h2>
                </div>
            )
        })
        return(
        <div> 
            <h1>Hello React</h1>
            {booksList}
        </div>
        )
    }
}

// mapStateToProps - access to the piece of start we wish to access
function mapStateToProps(state){
    return {
        books: state.books.books
    }
}

// by passing mapStateToProps through connect, you are subscribing your component to the store. by doing this returns an updated state to our local component
export default connect(mapStateToProps)(BooksList);