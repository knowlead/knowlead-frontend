import React from 'react';
import {StyleSheet,Text,View,Dimensions,AsyncStorage} from 'react-native';
import {Image, FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {useState,useEffect} from 'react';


import {css} from './css'

/* mynotes screen */

export default function Notas(props) {
        var notes=[
        {id: 1,title: 'Title', statusnote: 1, body: 'Body', description: 'Description'},
        ];

    // Database Connection 
    // var notes=[];

    // async function lerNota(){
    //     let resData = await AsyncStorage.getItem('userData');
    //     let resData1 = JSON.parse(resData)
    //     let readnote = await fetch('http:IP:Port/readNote',{
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             id: resData1.id,
    //         })
    //     })
    //     let jsonNote = await readnote.json();
    //     notes.push(jsonNote)
    // }   
    // lerNota()
    // useEffect(()=>{
    //     async function fecth(){
    //         await lerNota()
    //         console.log(lerNota())
    //     }
    //     fecth()
    // }, []);

    function NoteContainer ({id,title,statusnote,description,body}) {

        function SttsNote (){
            var a1 = '';
            if (statusnote === 0) {
                a1='Não Publicado'
                return(
                <Text style={{color: '#9999ff',fontWeight:'bold', fontSize: 15}}numberOfLines={1} ellipsizeMode='tail'>{a1}</Text>
                )
            } 
            else if (statusnote === 1){
                a1='Publicado'
                return(
                <Text style={{color: '#0c457d',fontWeight:'bold', fontSize: 15}}numberOfLines={1} ellipsizeMode='tail'>{a1}</Text>
                )
            }
        }
        return(
            <View>
                <TouchableOpacity onPress={()=>props.navigation.navigate('CriarNota',{id:id,title:title,body:body,description:description,statusnote:statusnote})} style={css.noteList}>
                    <Text style={{fontWeight:'bold', fontSize: 20}}numberOfLines={2} ellipsizeMode='tail'>{title}</Text>
                    <SttsNote></SttsNote>
                    <Text style={{color: '#7e7e7e', marginTop: 3}}numberOfLines={1} ellipsizeMode='tail'>{description}</Text>
                </TouchableOpacity>
            </View>
        )
    }   

    return (
    <View style={css.container}>
        
        <FlatList
            data={notes}
            keyExtractor={(item) => item.id}
            renderItem={({item})=> <NoteContainer id={item.id} body={item.body} title={item.title} statusnote={item.statusnote} description={item.description} body={item.body}/>}
        />   

    </View>
    );
}