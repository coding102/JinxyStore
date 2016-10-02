import React, { Component } from 'react';
import CategoryDropdown from './CategoryDropdown';
import CategoryItems from './CategoryItems';

export default class IsleOne extends Component {
    render() {
        return (  
            <div className="col-md-5">
                <div className="wrap">
                    <CategoryDropdown />
                    <CategoryItems />
                </div>
            </div>
        );
    }    
}