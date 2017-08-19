// BookList will be our smart component

"use strict"

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBooks } from './../../actions/booksActions';
import { Grid, Col, Row, Button } from 'react-bootstrap';

// BookItem (dummy component) - receives props from booksList
import BookItem  from  './bookItem';
import BooksForm from  './booksForms';
import Cart from './cart';

class BooksList extends React.Component{
    componentDidCatch() {
        //Dispatch an action
        this.props.getBooks();
    }
    render() {
        const booksList = this.props.books.map(function(booksArr){
            return(

                <Col xs={12} sm={6} md={4} key={booksArr._id}>
                    <BookItem
                        _id={booksArr._id}
                        title={booksArr.title}
                        description={booksArr.description}
                        price={booksArr.price}/>
                </Col>

                // <div key={booksArr.id}>
                //     <h2>{booksArr.title}</h2>
                //     <h2>{booksArr.description}</h2>
                //     <h2>{booksArr.price}</h2>
                //     <Button bsStyle='primary'>Buy Now</Button>
                // </div>
            )
        })

        return(
        <Grid> 
            <Row>
                <Cart/>
            </Row>
            <Row>
                <Col xs={12} sm={6}>
                    <BooksForm />                    
                </Col>
                {booksList}
            </Row>
        </Grid>
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
    return bindActionCreators({getBooks}, dispatch)
}


// by passing mapStateToProps through connect, you are subscribing your component to the store. by doing this returns an updated state to our local component
export default connect(mapStateToProps)(BooksList);