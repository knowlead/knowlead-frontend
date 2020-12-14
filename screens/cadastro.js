import React from 'react';
import {TextInput,Text,View,Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {css} from './css'

/* sign up/register screen */

export default function Cadastro(props) {
    const [value_nome, onChangeNome] = React.useState('');
    const [value_userid, onChangeUserID] = React.useState('');
    const [value_email, onChangeEmail] = React.useState('');
    const [value_passw, onChangePassw] = React.useState('');

    return (
        <View style={css.container}>
            <View style={css.centralized}>
            <View style={css.registerHeader}>
                <Image source={require('../assets/icon3.png')}/>
                <Text style={css.h1}>Crie sua conta</Text>
            </View>
            <View style={css.loginBody}>
                <TextInput style={css.inputNome}
                    onChangeText={text => onChangeNome(text)}
                    value={value_nome}
                    autoCorrect={false}
                    autoCompleteType='name'
                    placeholder= 'Nome Completo'/>
                <TextInput style={css.inputUserID}
                    onChangeText={text => onChangeUserID(text)}
                    value={value_userid}
                    autoCorrect={false}
                    autoCompleteType='name'
                    placeholder= 'Nome de Identificação'/>
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
                <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}
                    style={css.loginButton}>
                    <Text style={css.loginButtonText}>Inscreva-se</Text>
                </TouchableOpacity>

                <Text>Já possui uma conta?</Text>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}
                    style={{marginTop:5}}>
                    <Text style={css.h3b}>Faça Login</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
}