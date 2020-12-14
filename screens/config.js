import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity,Image} from 'react-native';
import {css} from './css'

/* settings screen */

export default function Config(props) {

    return (
        <View style={css.container}>
            <View style={css.centralized}>
                <Text></Text>
                <Text style= {css.h2}>Versão: Alpha 0.24</Text>

                <Text style= {css.h3b}>Protótipo para TCC</Text>
                <Text></Text>
                <View style={css.centralized}>
                    <Text style= {css.h4c}>Aplicativo desenvolvido por:</Text>
                    <Text style={css.h4c}>Guilherme Hidek Abe</Text>
                    <Text></Text>
                    <Image source={require('../assets/icon3.png')}/>
                </View>
                
                <Text></Text><Text></Text>
                <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}>
                    <Text style={css.h2b}>Deletar conta</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}