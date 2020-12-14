import React from 'react';
import {Image,StyleSheet,Text,View,AsyncStorage} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState,useEffect} from 'react';
import {css} from './css'



export default function Home(props) {

    const [user,setUser] = useState(null);
    useEffect(()=>{
        async function getUser(){
            let response = await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            setUser(json.name);
        }
        getUser();
    },[]);

    async function logout(){
        await AsyncStorage.clear();
        props.navigation.navigate('Login')
    }

    return (
    <SafeAreaView style={css.container}>

        <View style={css.homeHeader}>
            <Text style={css.homeHeaderTitleBold}>Olá</Text>
            <Text style={css.homeHeaderTitle}>{user}</Text>
            <TouchableOpacity onPress={()=>logout()}
            style={css.buttonTextHomeHeader}>
                <Text style={css.h2b}>Sair da conta</Text>
            </TouchableOpacity>
        </View>

        <View style={{marginTop: 70,alignItems: 'center', flexDirection: 'column', flex:1}}>

            <View style={{justifyContent: 'center',alignItems: 'center', flexDirection: 'row'}}>

                <TouchableOpacity onPress={()=>props.navigation.navigate('Notas')}
                style={css.tiles}>
                    <Image source={require('../assets/images/outline_notes_white_24.png')}/>
                    
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>props.navigation.navigate('Configuração')}
                style={css.tiles}>
                    <Image source={require('../assets/images/baseline_settings_white_24.png')}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>props.navigation.navigate('Perfil')}
                style={css.tiles}>
                    <Image source={require('../assets/images/baseline_account_circle_white_24.png')}/>
                </TouchableOpacity>

            </View>

            <View style={{justifyContent: 'center',alignItems: 'center', flexDirection: 'row'}}>

                <TouchableOpacity onPress={()=>props.navigation.navigate('Explorar')}
                style={css.tiles}>
                    <Image source={require('../assets/images/baseline_explore_white_24.png')}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>props.navigation.navigate('Pomodoro')}
                style={css.tiles}>
                    <Image source={require('../assets/images/baseline_timer_white_24.png')}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>props.navigation.navigate('Salvos')}
                style={css.tiles}>
                    <Image source={require('../assets/images/baseline_bookmarks_white_24.png')}/>
                </TouchableOpacity>

            </View>
        </View>
    </SafeAreaView>
    );
}