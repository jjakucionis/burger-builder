import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

import Aux from '../../hoc/Aux'

const PRICES = {
    salad: 0.3,
    meat: 1.2,
    cheese: 0.6,
    bacon: 0.5
}

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingridients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice: 4,
            purchasable: false,
            purchasing: false
        }
    }

    updatePurchase(upd) {
        const ingridients = {
            ...upd
        };
        const sum = Object.keys(ingridients)
        .map(igKey => {
            return ingridients[igKey]
        }).reduce((sum, acc) => {
            return sum + acc;
        }, 0);
        this.setState({purchasable: sum > 0})
    }

    addHandler = (type) => {
        const oldCount = this.state.ingridients[type];
        const updatedCount = oldCount + 1;
        const updatedIngridients = {
            ...this.state.ingridients
        };
        updatedIngridients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + PRICES[type];
        this.setState({
            totalPrice: newPrice,
            ingridients: updatedIngridients
        })
        this.updatePurchase(updatedIngridients);
    }

    removeHandler = (type) => {
        const oldCount = this.state.ingridients[type];
        const updatedCount = oldCount === 0 ? 0 : oldCount - 1;
        const updatedIngridients = {
            ...this.state.ingridients
        };
        updatedIngridients[type] = updatedCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - PRICES[type];
        this.setState({
            totalPrice: newPrice,
            ingridients: updatedIngridients
        })
        this.updatePurchase(updatedIngridients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinue = () => {
        alert('You makongen!');
    }

    render() {
        const disabledInfo = {
            ...this.state.ingridients
        }
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingridients={this.state.ingridients} 
                        cancel={this.purchaseCancelHandler}
                        continue={this.purchaseContinue}
                        total={this.state.totalPrice} />
                </Modal>
                <Burger ingridients={this.state.ingridients} />
                <BuildControls 
                ingridientAdded={this.addHandler} 
                ingridientRemoved={this.removeHandler} 
                disabledInfo={disabledInfo} 
                price={this.state.totalPrice} 
                purchasable={this.state.purchasable}
                purchasing={this.purchaseHandler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;
