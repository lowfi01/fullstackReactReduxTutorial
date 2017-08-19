"use strict"

// SMART COMPONENT

import React from 'react';
import { connect } from 'react-redux';
import { Panel, Col, Row, Well, Button } from 'react-bootstrap';

class Cart extends React.Component{

    render() {
        // if one items in cart - then render to cart
        if(this.props.cart[0]){
            return this.renderCart();
        } else {
            return this.renderEmpty();
        }

    }
    renderEmpty(){
        // return empty div
        return(
            <div></div>
        )
    }

    renderCart(){
        // map over cart & return list of items
        const cartItemsList = this.props.cart.map((cartArr)=> {
            return (
                <Panel key={cartArr.id}> 
                    <Row>
                        <Col xs={12} sm={4}>
                            <h6>{cartArr.title}</h6>
                        </Col>
                    </Row>
                </Panel>
            )
        })
        // return panel of cart items
        return(
            <Panel header="Cart" bsStyle="primary">
                {cartItemsList}    
            </Panel>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart
    }
}

export default connect(mapStateToProps)(Cart);
