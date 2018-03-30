import React, { Component } from 'react';
import Header from './Header.jsx';
import Notewriter from './Notewriter.jsx';

class Root extends Component {
    render() {
        return (
            <div>
                <Header />
                <Notewriter />
            </div>
        );
    }
}

export default Root;
