import React from 'react';
import styles from './toolbar.module.css';
import Logo from '../../Logo/Logo'

const toolbar = (props) => (
    <header className={styles.Toolbar}>
        <div>MENU</div>
        <Logo/>
        <nav>
            <ul>
                <li>...</li>
                <li>...</li>
                <li>...</li>
            </ul>
        </nav>
    </header>
);

export default toolbar;