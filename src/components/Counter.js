import React, { Component } from 'react';
import Value from './Value';
import Control from './Control';

class Counter extends Component {
    render() {
        return (
            <div>
                <h1>Counter</h1>
                <Value/>
                <Controll/>
            </div>
        );
    }
}

export default Counter;