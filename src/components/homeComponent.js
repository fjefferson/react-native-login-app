import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import TopAlbumsComponent from '../components/topAlbumsComponent';

export default class HomeComponent extends Component{
    render(){
        return(
            <View>
                <TopAlbumsComponent props={this.props} />            
            </View>
        )
    }

}
