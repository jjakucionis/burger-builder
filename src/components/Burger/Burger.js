import React from "react";
import styles from './burger.module.css'
import BurgerIngridient from './BurgerIngridient/BurgerIngridient';

const burger = (props) => {
    let transformed = Object.keys(props.ingridients).map(igKey => {
        return [...Array(props.ingridients[igKey])].map((_, i) => {
            return <BurgerIngridient key={igKey + i} type={igKey} />
        })
    }).reduce((acc, el) => {
        return acc.concat(el);
    }, []);
    if(transformed.length === 0) {
        transformed = <p>Please add ingridients</p>
    }
    return (
        <div className={styles.Burger}>
            <BurgerIngridient type="bread-top"/>
            {transformed}
            <BurgerIngridient type="bread-bottom"/>
        </div>
    );
}

export default burger;