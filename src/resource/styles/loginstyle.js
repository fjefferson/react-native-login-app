import {
  StyleSheet,
} from 'react-native';

export default styles = StyleSheet.create({
    login:{
        flex: 1,              
        justifyContent: 'center',
        alignItems: 'center',
    },  

    loginImage:{
        flex: 4
    },  

    image:{
        flex:1,
        width: 250,
        height: 250
    },

    loginFormulario:{
        flex:3
    },

    inputs:{
        backgroundColor: '#FFF',
        paddingHorizontal: 15,
        marginVertical: 2.5,
        width: 350,
        borderWidth: 1,
        borderColor: '#FF1A44'
    },

    button: {
        backgroundColor: '#000',
        marginTop: 5,
        padding: 10
    },

    textButton:{
        fontSize: 14,
        color: 'white',
        textAlign: 'center'
    },

    remember:{flex: 1, flexDirection: 'row', height: 40},
    remember_switch:{width: 50, height: 40},
    remember_text:{width: 180, height: 40, padding: 10},

    buttonNavigatorLogin: {padding: 5, flex:3, justifyContent: 'center', marginTop: 5},
    buttonNavigatorLoginText:{textAlign: 'center', fontSize: 15, color: 'white', fontWeight: '400'}


});

