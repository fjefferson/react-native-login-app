import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({

});

const homeStyle = StyleSheet.create({
    albumContent:{flex: 1,flexDirection: 'row'},
    albumItem:{width: '96%', height:120, marginBottom: 5,justifyContent: 'flex-end', marginLeft: '2%'},
    albumItemName: {color: "#000000", fontSize: 18, marginLeft: 15, fontWeight: 'bold'},
    albumItemBandName: {color: "#000000", fontSize: 13, marginBottom:15, marginLeft: 15}

});


const viewAlbum = StyleSheet.create({    
    albumItem:{width: '100%', height:140, marginBottom: 5},
    albumItemName: {color: "#333", fontSize: 18, marginLeft: 15},
    albumItemBandDetails: {color: "#333", fontSize: 13, marginBottom:15, marginLeft: 15}

});


export {styles, homeStyle, viewAlbum};
