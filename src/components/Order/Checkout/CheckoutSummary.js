import React from 'react';
import styles from './checkoutSummary.module.css';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const CheckoutSummary = (props) => {
    return (
        <div className={styles.Checkout}>
            <h1>We hope it tastes ok</h1>
            <div style={{width: '300px', height: '300px', margin: 'auto'}}>
                <Burger ingridients={props.ingridients}/>
            </div>
            <Button 
                buttonType="Danger" 
                clicked={props.checkCancel}>CANCEL</Button>
            <Button 
                buttonType="Success" 
                clicked={props.checkContinue}>CONTINUE</Button>
        </div>
    )
};

export default CheckoutSummary;