import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {View,Image,Text,LogBox} from 'react-native';

import {css} from './screens/css'

import Home from './screens/home'
import Notas from './screens/notas'
import CriarNota from './screens/criarnota'
import Config from './screens/config'
import Perfil from './screens/perfil'
import Login from './screens/login'
import Cadastro from './screens/cadastro';
import Pomodoro from './screens/pomodoro';
import Salvos from './screens/salvos';
import Explorar from './screens/explorar';
import VerArtigo from './screens/verArtigo';

const Stack = createStackNavigator();

export default function App() {
  LogBox.ignoreAllLogs()
  function SttsNote (x){
    var st = 1;
    var ststring
    if (st == 0) {
        ststring='Publicar'
        return(
        <Text>{ststring}</Text>
        )
    } 
    else if (st == 1){
        ststring='Atualizar'
        return(
        <Text>{ststring}</Text>
        )
    } else {
      statusnote=''
      return(
          <Text style={{color: '#0c457d',fontWeight:'bold', fontSize: 15}}numberOfLines={1} ellipsizeMode='tail'>{statusnote}</Text>
      )
    }
  }

  return (  
    <NavigationContainer>
      <Stack.Navigator>        
        <Stack.Screen name="Login"
            options={{
            headerShown: false,}}>
            {props=><Login {...props}/>}  
        </Stack.Screen>
        <Stack.Screen name="Home"
          options={{
          headerShown: false,}}>
          {props=><Home {...props}/>}  
        </Stack.Screen>
        <Stack.Screen name="Cadastro" 
            options={{
            headerShown: false,}}>
            {props=><Cadastro {...props}/>}  
        </Stack.Screen>
        <Stack.Screen name="Notas" 
          options={({ navigation })=> ({
          title: 'Suas Notas',
          headerRight: () => (
            <TouchableOpacity onPress={()=>navigation.navigate('CriarNota',{id: null,statusnote: 0})} style={css.buttonAddnoteHeader}>
              <Image style={css.imageButtonHeader} source={require('./assets/images/baseline_add_black_24.png')}/>
            </TouchableOpacity>),
          headerTintColor:'#000',
          headerTitleStyle:{fontWeight:'bold', alignSelf:'center',marginRight: 0}})}>
          {props=><Notas {...props}/>}  
        </Stack.Screen>
        <Stack.Screen name="CriarNota" 
          options={({ navigation })=> ({
          title: '',
          headerRight: ()=>(
            <View style={css.header}>
              <TouchableOpacity onPress={()=>navigation.navigate('Notas')} style={css.buttonDeletenoteHeader}>
              <Image style={css.imageButtonHeader} source={require('./assets/images/baseline_delete_black_24.png')}/>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('Notas')} style={css.secondButtonTextHeader}>
                <Text style={{color: '#000', fontWeight: 'bold', fontSize: 20}}>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('Notas')} style={css.buttonTextHeader}>
                <Text style={{color: '#000', fontWeight: 'bold', fontSize: 20}}><SttsNote/></Text>
              </TouchableOpacity>
            </View>
            ),
            headerTintColor:'#000',
          })}>
            {props=><CriarNota {...props}/>}
        </Stack.Screen>  
        <Stack.Screen name="Configuração"
          options={{
            title: 'Configurações',
            headerTintColor:'#000',
            headerTitleStyle:{fontWeight:'bold', alignSelf:'center',marginRight: 56}}}>
          {props=><Config {...props}/>}
            
        </Stack.Screen>
        <Stack.Screen name="Pomodoro"
          options={{
            title: 'Pomodoro',
            headerTintColor:'#000',
            headerTitleStyle:{fontWeight:'bold', alignSelf:'center',marginRight: 56}}}>
          {props=><Pomodoro {...props}/>}  
        </Stack.Screen>
        <Stack.Screen name="Salvos"
          options={{
            title: 'Salvos',
            headerTintColor:'#000',
            headerTitleStyle:{fontWeight:'bold', alignSelf:'center',marginRight: 56}}}>
          {props=><Salvos {...props}/>}  
        </Stack.Screen>
        <Stack.Screen name="Perfil"
          options={{
            title: 'Perfil',
            headerTintColor:'#000',
            headerTitleStyle:{fontWeight:'bold', alignSelf:'center',marginRight: 56}}}>
          {props=><Perfil {...props}/>}  
        </Stack.Screen>
        <Stack.Screen name="Explorar"
          options={{
            title: 'Explorar outros Artigos',
            headerTintColor:'#000',
            headerTitleStyle:{fontWeight:'bold', alignSelf:'center',marginRight: 56}}}>
          {props=><Explorar {...props}/>}  
        </Stack.Screen>
        <Stack.Screen name="VerArtigo" 
          options={({ navigation })=> ({
            title: 'Suas Notas',
            headerRight: () => (
              <TouchableOpacity onPress={()=>alert('Nota Salva!')} style={css.buttonAddnoteHeader}>
                <Image style={css.imageButtonHeader} source={require('./assets/images/baseline_bookmark_black_24dp.png')}/>
              </TouchableOpacity>),
            headerTintColor:'#000',
            headerTitleStyle:{fontWeight:'bold', alignSelf:'center',marginRight: 0}})}>
            {props=><VerArtigo {...props}/>}  
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
} 

