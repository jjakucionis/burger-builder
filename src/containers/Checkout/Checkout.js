import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/Checkout/CheckoutSummary'

class Checkout extends Component {
    state = {
        ingridients: {
            salad: 1,
            meat: 2,
            bacon: 3,
            cheese: 2
        }
    }

    checkoutCanceled = () => {
        this.props.history.goBack();
    }

    checkoutContinued = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render(){
        return (
            <div>
                <CheckoutSummary 
                    ingridients={this.state.ingridients}
                    checkCancel={this.checkoutCanceled}
                    checkContinue={this.checkoutContinued} />
            </div>
        )
    }

}

export default Checkout;