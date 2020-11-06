import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withError = (WrapperComponent, axios) => {

    return class extends Component {
        state = {
            errorResponse: null
        }

        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({
                    errorResponse: null
                })
                return req
            })

            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({
                    errorResponse: error.message
                })
            })
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);

        }

        errorConfirmedHndler = () => {
            this.setState({errorResponse: null})
        }

        render() {
           
            return (
                <Aux>
                    <Modal show={this.state.errorResponse}
                            modalClosed={this.errorConfirmedHndler}>
                        {this.state.errorResponse ? this.state.errorResponse : null}
                    </Modal>
                    <WrapperComponent {...this.props} />
                </Aux>
            )
        }
    }
    
};

export default withError;