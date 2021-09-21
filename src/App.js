import React, { Component } from 'react';
import Counter from './components/Counter';
import DecreaseCounter from './components/DecreaseCounter';
import IncreaseByTwoCounter from './components/IncreaseByTwoCounter';
import IncreaseCounter from './components/IncreaseCounter';
export default class App extends Component {
    render() {
        return (
            <div>
                <Counter />
                <IncreaseCounter />
                <DecreaseCounter />
                <IncreaseByTwoCounter />
            </div>
        );
    }
}
