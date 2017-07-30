import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Switch,
  Alert,
  Button
} from 'react-native';
import styles from '../resource/styles/loginstyle';
import { StackNavigator, NavigationActions  } from 'react-navigation';
import { connect } from 'react-redux';

import * as loginActions from '../configs/actions/loginActions';


const LoginComponent = props => {
        let msg = '';

        const verificaLogin = (user) => {         
            console.log(user);
            let validacao = true;
            if( !user.username && !user.password){
                Alert.alert("Attention!", 'Filds is required!');   
                validacao = false;
            }            

            return validacao;
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
                 <TextInput value={props.userLogged.username} style={[styles.inputs]} placeholder="Username" onChangeText={ text => props.setUsername(text)} />
                 <TextInput value={props.userLogged.password} style={[styles.inputs]}  placeholder="********" secureTextEntry={true} onChangeText={ text => props.setPassword(text)} />

                     <TouchableOpacity style={styles.button} onPress={()=> {
                            if(verificaLogin(props.userLogged)){ 
                                props.logar(props.users);
                                if(props.logged){
                                    props.navigation.navigate("Home");
                                }else{
                                     Alert.alert("Attention!", 'User not found, try again!');   
                                }
                            }  
                          } 
                        }>
                        <Text style={styles.textButton} >Login</Text>
                    </TouchableOpacity> 

                 <View style={styles.remember}>
                        <Switch style={styles.remember_switch}
                            onValueChange={value=> props.setRemember(value)}
                            value={props.userLogged.remember} />
                        <Text style={styles.remember_text} >Remember Password</Text>
                </View>
                
                
                <TouchableOpacity style={styles.buttonNavigatorLogin} onPress={()=> props.navigation.navigate('Singup')}>
                    <Text style={styles.buttonNavigatorLoginText}>Sing UP</Text>
                </TouchableOpacity>
             </View>                
            </Image>
        )
}

const mapStateToProps = state =>{
    return {
        userLogged: state.loginReducer.userLogged,
        logged: state.loginReducer.logged,
        users: state.userReducer.users
    }
}


export default connect(mapStateToProps , loginActions)(LoginComponent);