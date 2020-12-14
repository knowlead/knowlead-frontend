import React from 'react';
import {StyleSheet,Text,View,FlatList,TouchableOpacity,AsyncStorage} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {useState,useEffect} from 'react';

/* profile screen */

import {css} from './css'

export default function Perfil(props) {

    const [user,setUser] = useState(null);

    useEffect(()=>{
        async function getUser(){
            let response = await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            console.log(json)
            setUser(json.name);
        }
        getUser();
    },[]);

    const [nick,setNick] = useState(null);
    useEffect(()=>{
        async function getNick(){
            let response = await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            console.log(json)
            setNick(json.nick);
        }
        getNick();
    },[]);

    const [email,setEmail] = useState(null);
    useEffect(()=>{
        async function getEmail(){
            let response = await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            console.log(json)
            setEmail(json.email);
        }
        getEmail();
    },[]);

    var usernome = user;
    var userid = nick;
    var useremail = email;

    const notes=[
        {id: 1,title: 'title', body: 'body', description: 'description'},
    ]
    function NoteContainer ({id,title,description,body}) {
        return(
            <View>
                <TouchableOpacity onPress={()=>props.navigation.navigate('CriarNota',{id:id,title:title,description:description,body:body})} style={css.profileNoteList}>
                    <Text style={{fontWeight:'bold', fontSize: 20}}numberOfLines={2} ellipsizeMode='tail'>{title}</Text>
                    <Text style={{marginTop: 3}}numberOfLines={3} ellipsizeMode='tail'>{description}</Text>
                </TouchableOpacity>
            </View>
        )
    }       
    return (
        <ScrollView View style={css.container}>
            <View style={css.profileMain}>
                <Text style= {css.h1}>{usernome}</Text>
                <Text style= {css.h2}>{userid}</Text>
            </View>
            <View style={css.profileBody}>
                <View style={css.profileBio}>
                </View>
                <Text style= {css.h4}>Email: {useremail}</Text> 
            </View>    
            <View> 
                <View style={{padding:8,marginBottom:7}}>
                    <Text style={css.h2b}>Notas Publicadas:</Text>
                </View>
                <View style={css.centralized}>
                <FlatList
                    data={notes}
                    renderItem={({item})=> <NoteContainer id={item.key} title={item.title} userid={item.userid}description={item.description} body={item.body}/>}/>   
                </View>
                
            </View>         
        </ScrollView>
    );
    
}
