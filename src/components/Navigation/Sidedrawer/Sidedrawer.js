import React from 'react';
import styles from './Sidedrawer.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sidedrawer = (props) => {
    let drawerClasses = [styles.Sidedrawer, styles.Close];
    if(props.show) {
        drawerClasses = [styles.Sidedrawer, styles.Open];
    }

    return(
        <Aux>
            <Backdrop show={props.show} clicked={props.close}/>
            <div className={drawerClasses.join(" ")}>
                <div className={styles.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
};

export default sidedrawer;