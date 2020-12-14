import React from 'react';
import {TextInput,Text,View,Image,AsyncStorage} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {css} from './css'

/* login screen */

export default function Login({navigation}) {

    const [value_email, onChangeEmail] = React.useState('');
    const [value_passw, onChangePassw] = React.useState('');

    // LOGIN AUTHENTICATION        

    async function enviarForm()
    {
        let response = await fetch('http://IP:Port/login',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: value_email,
                password: value_passw,
            })
        });
        let json = await response.json();
        if (json === 'Error'){
            alert('Email ou Senha incorretos')
            await AsyncStorage.clear();
        } 
        else {
            let userData = await AsyncStorage.setItem('userData', JSON.stringify(json));
            navigation.navigate('Home');
        }
    }
    
    return (
        <View style={css.container}>
            <View style={css.centralized}>
            
                <View style={css.loginHeader}>
                    <Image style={{}} source={require('../assets/icon2.png')}/>
                    <Text style={css.h1}>Faça Login</Text>
                </View>
                <View style={css.loginBody}>
                    <TextInput style={css.inputEmail}
                        onChangeText={text => onChangeEmail(text)}
                        value={value_email}
                        autoCorrect={false}
                        autoCompleteType='email'
                        placeholder= 'Seu Email'/>
                    <TextInput style={css.inputPassw}
                        onChangeText={text => onChangePassw(text)}
                        value={value_passw}
                        secureTextEntry={true}
                        autoCompleteType="password"
                        autoCorrect={false}
                        placeholder= 'Senha'/>

                    <TouchableOpacity onPress={()=>props.navigation.navigate('Home')} 
                        style={{marginTop:20}}>
                        <Text style={css.h4}>Esqueceu sua senha?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>enviarForm()}
                        style={css.loginButton}>
                        <Text style={css.loginButtonText}>Sign In</Text>
                    </TouchableOpacity>
                    <Text>
                        Ou
                    </Text>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('Cadastro')} 
                        style={{marginTop:5}}>
                        <Text style={css.h3b}>Cadastre-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}