// BookList will be our smart component

"use strict"

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBooks } from './../../actions/booksActions';
import { Grid, Col, Row, Button } from 'react-bootstrap';

class BooksList extends React.Component{
    componentDidCatch() {
        //Dispatch an action
        this.props.getBooks([{
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
        }]);
    }
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

//mapDispatchToProps - this will allow us to pass down access to actions
function mapDispatchToProps(dispatch){
    return bindActionCreators({getBooks: getBooks, otherAction: otherAction}, dispatch)
}


// by passing mapStateToProps through connect, you are subscribing your component to the store. by doing this returns an updated state to our local component
export default connect(mapStateToProps)(BooksList);