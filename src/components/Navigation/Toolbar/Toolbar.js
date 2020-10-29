import React from 'react';
import styles from './toolbar.module.css';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggler from '../DrawerToggler/DrawerToggler';

const toolbar = (props) => (
    <header className={styles.Toolbar}>
        <DrawerToggler clicked={props.openDrawer}/>
        <div className={styles.Logo}>
            <Logo />
        </div>
        <nav className={styles.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;