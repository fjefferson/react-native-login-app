import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import styles from '../resource/styles/loginstyle';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import * as userActions from '../configs/actions/usersActions';

const SingUpComponent = props => {
     let msg = '';
     const verificaCadastro = (user)=>{
        let verificacao = true;
        if(user.username.length === 0){
            msg = "Username required; ";
            verificacao= false;
        }
        if(user.confirmPass != user.password){
            msg += "Password confirmation is diferent;";
            verificacao = false;
        }
        
        return verificacao;

     }
     return (
            <Image style={styles.login} source={{uri:'https://image.ibb.co/caG9VQ/background.jpg'}}>
            <StatusBar
                backgroundColor="#FF1A44"
                barStyle="light-content"
            />
             <View style={styles.loginImage}>
                <Image resizeMode="contain" style={styles.image} source={{uri: 'https://www.justinmind.com/usernote/tests/4/1765/11588699/images/f207e704-667e-4c4e-93e1-8dfe71340f62.png'}} />     
             </View>
             <View style={styles.loginFormulario}>
                 <TextInput value={props.user.username} style={[styles.inputs]} placeholder="Username" onChangeText={ text => props.modificaUsername(text) } />
                 <TextInput value={props.user.password} style={[styles.inputs]}  placeholder="Password" secureTextEntry={true} onChangeText={ text => props.modificaPass(text) } />
                 <TextInput value={props.user.confirmPass} style={[styles.inputs]} placeholder="Confirm Password" secureTextEntry={true} onChangeText={ text => props.modificaPassConf(text) } />
                 <TouchableOpacity style={styles.button} onPress={()=> { 
                            if(verificaCadastro(props.user)){
                                if (props.addUser()){
                                    Alert.alert('Atention!', 'Sing up successful!'); 
                                    props.navigation.navigate('Login');
                                }
                            }else{
                                Alert.alert('Warning!', msg); 
                            }
                        }
                    }>
                    <Text style={styles.textButton}>Save</Text>
                 </TouchableOpacity>

                <TouchableOpacity style={styles.buttonNavigatorLogin} onPress={()=> {props.cancelCadastro(); props.navigation.navigate('Login'); } }>
                    <Text style={styles.buttonNavigatorLoginText}>Cancel</Text>
                </TouchableOpacity>

             </View>                
            </Image>
        )
    }


const mapStateToProps = state => {
    return(
        {
            users: state.userReducer.users, //Lista de usuario
            user: state.userReducer.user //dados que serão gravados
        }
    )
}    

export default connect(mapStateToProps, userActions)(SingUpComponent);