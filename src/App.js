import React, { Component } from 'react';
import Root from './components/Root.jsx';

import { Provider } from 'mobx-react';
import store from './store/store';

import './css/roolith.min.css';
import './App.css';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Root />
            </Provider>
        );
    }
}

export default App;
