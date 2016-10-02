import React, { Component } from 'react';
import IsleOne from './components/IsleOne';
import IsleTwo from './components/IsleTwo';
import Checkout from './components/Checkout';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="row">
                <IsleOne />
                <Checkout />
                <IsleTwo />
            </div>
        );
    }
}

export default App;


