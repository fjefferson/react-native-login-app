import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

import { viewAlbum } from '../resource/styles/styles';

export default AlbumView = props =>{
    const {state} = props.navigation;
    return(
        <View>
            <Image resizeMode="cover" source={{uri: state.params.item.albumCover}} style={viewAlbum.albumItem} />
            <Text style={viewAlbum.albumItemName}>{state.params.item.bandName}</Text>            

            <Text style={viewAlbum.albumItemBandDetails}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim eleifend odio, a ornare sem posuere in. Vivamus nec tortor id nibh cursus molestie vel id massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras a libero egestas, placerat dolor eu, venenatis magna. Praesent congue est ac lacus consequat, nec molestie tellus sagittis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit erat lacinia erat pharetra, nec scelerisque turpis tincidunt. Phasellus facilisis purus vel orci consequat, nec interdum tellus porta. Proin ut lectus bibendum, eleifend felis id, ultrices diam.
            </Text>            
        </View>
    )
}

