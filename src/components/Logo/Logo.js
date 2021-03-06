import React from 'react';
import Logo from '../../assets/images/burger-logo.png'
import styles from './logo.module.css'

const logo = (props) => (
    <div className={styles.Logo} style={{height: props.height}}>
        <img src={Logo} alt="Burger Builder logo" />
    </div>
);

export default logo;