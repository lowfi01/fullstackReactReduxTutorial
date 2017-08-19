"use strict"

import React from 'react';
import { Row, Col, Well, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { addToCart } from './../../actions/cartActions';


class BookItem extends React.Component{

    handleCart(){
        const book = [...this.props.cart, {
            id: this.props.id,
            title: this.props.title,
            description: this.props.description,
            price: this.props.price
        }]
        this.props.addToCart(book);
        console.log('HandleCart state: ', this.props)
    }

    render() {
        //console.log(state)
        return (
            <Well>
                <Row>
                    <Col>
                        <h6>{this.props.title}</h6>
                        <p>{this.props.description}</p>
                        <h6>{this.props.price}</h6>
                        <Button onClick={this.handleCart.bind(this)} bsStyle='primary'>Buy Now</Button>
                    </Col>
                </Row>
            </Well>
        )
    }
}

function mapStateToProps(state){
    return {
        cart: state.cart.cart
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        addToCart
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);