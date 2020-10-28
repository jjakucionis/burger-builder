import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingridients = Object.keys(props.ingridients)
        .map(igKey => {
        return <li key={igKey} ><span>{igKey}</span>: {props.ingridients[igKey]}</li>
        });
    return (
        <Aux>
            <h3>Your order</h3>
            <p>Dlicious burger with the following ingridients:</p>
            <ul>
                {ingridients}
            </ul>
            <p>Total sum: <strong>{props.total.toFixed(2)}</strong></p>
            <p>Continue shopping?</p>
            <Button buttonType="Danger" clicked={props.cancel}>CANCEL</Button>
            <Button buttonType="Success" clicked={props.continue}>CONTINUE</Button>
        </Aux>
    )
};

export default orderSummary