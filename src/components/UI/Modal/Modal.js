import React, { Component, Fragment } from 'react';
import classes from './Modal.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'

class modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return  nextProps.show !== this.props.show;
            
    }


    render() {
     return (
        <Fragment>
            <Backdrop show={this.props.show}  clicked={this.props.modalClosed}/>
            <div 
                className={classes.Modal}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                {this.props.children}
            </div>
        </Fragment>
     )
    }
};

export default modal;
