import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './src/configs/storage';
import { AppRegistry } from 'react-native';

import App from './src/app';

class AppProvider extends Component{
    render(){
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}


AppRegistry.registerComponent('appCursoLead', () => AppProvider);
