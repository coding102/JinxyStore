import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class CategoryDropdown extends Component {
    render() {
        return (  
            <div className="searchBox">
                <div className="search">
                    <input type="search" placeholder="Search" />
                </div>
                
                <DropdownButton title="Dropdown">
                    <MenuItem href="#books">Books</MenuItem>
                    <MenuItem href="#podcasts">Podcasts</MenuItem>
                    <MenuItem href="#">Tech I Like</MenuItem>
                    <MenuItem href="#">About me</MenuItem>
                    <MenuItem href="#addBlog">Add a Blog</MenuItem>
                </DropdownButton>

            </div>
        );
    }    
}