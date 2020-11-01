import React, { Component } from 'react';
import Aux from '../Aux/Aux'
import styles from './layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import Sidedrawer from '../../components/Navigation/Sidedrawer/Sidedrawer'

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDrawer: false
        }
    }

    drawerClosed = () => {
        this.setState({showDrawer: false})
    }

    drawerOpen = () => {
        this.setState((prevState) => {
            return {showDrawer: !prevState.showDrawer}
        })
    }

    render() {
        return (
            <Aux>
            <Toolbar openDrawer={this.drawerOpen} />
            <Sidedrawer show={this.state.showDrawer} close={this.drawerClosed} />
            <main className={styles.Content}>
                {this.props.children}
            </main>
        </Aux>
        )
    }
}

export default Layout;