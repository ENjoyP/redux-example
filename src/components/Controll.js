import React, { Component, PropTypes } from 'react';

const propTypes = {
    onPlus: PropTypes.func,
    onSubtract: PropTypes.func,
    onRandomizeColor: PropTypes.func
};

const defaultProps = {
    onPlus: createWarn('onPlus'),
    onSubtract: createWarn('onSubtract'),
    onRandomizeColor: createWarn('onRandomizeColor')
};

function createWarn(funcName){
    console.warn(funcName + ' is not defined');
}

class Controll extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>
                <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
            </div>
        );
    }
}

Controll.propTypes = propTypes;
Controll.defaultProps = defaultProps;

export default Controll;