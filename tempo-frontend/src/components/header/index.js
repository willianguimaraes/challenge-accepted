import React, { Component } from 'react';
import './index.css'

import logo from '../../assets/images/logo.png'

export default class Header extends Component{

    render() {
        return(
        <header className="header">
            <img src={logo} alt="Logo Climatempo"></img>
        </header>
        )
    }
}