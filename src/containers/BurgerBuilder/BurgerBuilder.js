import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Loader from '../../components/UI/Loader/Loader'

import Aux from '../../hoc/Aux/Aux'

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
            purchasing: false,
            loading: false
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
        this.setState({loading: true});
        const order = {
            ingridients: this.state.ingridients,
            price: this.state.totalPrice,
            customer: {
                name: 'makongelis bulka',
                address: {
                    street: 'tedt dddress',
                    house: 23
                }
            },
            delivery: 'asap'
        }
        axios.post('/orders.json', order)
            .then(response => {
                console.log(response);
                this.setState({loading: false, purchasing: false});
            })
            .catch(error => {
                console.log(error)
                this.setState({loading: false, purchasing: false});
            })
    }

    render() {
        const disabledInfo = {
            ...this.state.ingridients
        }
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = 
            <OrderSummary 
                ingridients={this.state.ingridients} 
                cancel={this.purchaseCancelHandler}
                continue={this.purchaseContinue}
                total={this.state.totalPrice} 
            />;

        if(this.state.loading) {
            orderSummary = <Loader />
        }
        
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
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
