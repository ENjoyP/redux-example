import React, { Component, PropTypes } from 'react';
import Counter from './Counter';
class App extends Component {
    render() {
        return (
            <div>
                <Counter/>
            </div>
        );
    }
}

App.propTypes = {

};

export default App;