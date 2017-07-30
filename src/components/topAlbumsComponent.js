import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';

import { homeStyle } from '../resource/styles/styles';

const albums = [];
albums.push(
    {
        key: 1,
        name: "Saengerkrieg",
        albumCover: "https://www.justinmind.com/usernote/tests/4/1765/11588699/images/e9755c79-2ee5-434c-8f18-6d9decbe0d3d.jpg",
        bandName: "In Extremo"
    }
);

albums.push(
    {
        key: 2,
        name: "Plays Metallica",
        albumCover: "https://www.justinmind.com/usernote/tests/4/1765/11588699/images/8581611b-d437-4368-b6e4-b75c93a858dd.jpg",
        bandName: "Apocalyptica"
    }
);

albums.push(
    {
        key: 3,
        name: "Sterneisen",
        albumCover: "https://www.justinmind.com/usernote/tests/4/1765/11588699/images/9048a270-1cbf-4277-9770-eb25c3620874.jpg",
        bandName: "In Extremo"
    }
);


albums.push(
    {
        key: 4,
        name: "Sagas",
        albumCover: "https://www.justinmind.com/usernote/tests/4/1765/11588699/images/ac1b4069-4a37-4bbd-b372-6afa1374d97f.png",
        bandName: "Equilibrium"
    }
);


albums.push(
    {
        key: 5,
        name: "Wagner Reloaded",
        albumCover: 'https://www.justinmind.com/usernote/tests/4/1765/11588699/images/9ee35ac3-9311-44d6-97bc-be2810740d8e.jpg',
        bandName: "Apocalyptica"
    }
);

const navigate = {};
export const AlbumItem = props =>{
    const noImage = 'https://www.justinmind.com/usernote/tests/4/1765/11588699/images/f207e704-667e-4c4e-93e1-8dfe71340f62.png';
    console.log(props);
    return(
        <TouchableOpacity onPress={()=> props.call.navigate('AlbumView', {item: props.album.item})}>
            <Image resizeMode="cover" source={{uri: props.album.item.albumCover ?  props.album.item.albumCover : noImage}} style={homeStyle.albumItem}>
                <Text style={homeStyle.albumItemName}>{props.album.item.name}</Text>
                <Text style={homeStyle.albumItemBandName}>{props.album.item.bandName}</Text>
            </Image>
        </TouchableOpacity>
    )
}

export default TopAlbumsComponent = props => {
        return(
            <FlatList
                data={albums}
                renderItem={item => <AlbumItem album={item} call={props.props.navigation} />}
                >
            </FlatList>
        )
}
