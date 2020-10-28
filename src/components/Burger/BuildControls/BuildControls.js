import React from 'react';
import styles from './buildControls.module.css'
import BuildControl from "./BuildControl/BuildControl"

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Meat", type: "meat" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" }
];

const buildControls = (props) => (
    <div className={styles.BuildControls}>
        <p>Current price: <strong>{props.price.toFixed(2)}</strong> EUR</p>
        {controls.map(control => (
            <BuildControl 
                label={control.label} key={control.label} 
                added={() => props.ingridientAdded(control.type)} 
                removed={() => props.ingridientRemoved(control.type)} 
                disabled={props.disabledInfo[control.type]}
            />
        ))}
        <button 
            className={styles.OrderButton} 
            disabled={!props.purchasable}
            onClick={props.purchasing}
            >ORDER NOW</button>
    </div>
);

export default buildControls;