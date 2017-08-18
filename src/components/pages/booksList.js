"use strict"

import React from 'react';
import { connect } from 'react-redux';

class BooksList extends React.Component{
    render() {
        console.log('ARE WE ACCESSING THE STATE?? : ', this.props.books);
        return(
        <div> 
            <h1>Hello React</h1>
        </div>
        )
    }
}

function mapStateToProps(state){
    return {
        books: state.books.books
    }
}

// by passing mapStateToProps through connect, you are subscribing your component to the store. by doing this returns an updated state to our local component
export default connect(mapStateToProps)(BooksList);