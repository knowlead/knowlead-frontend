import React from 'react';
import {StyleSheet,Text,View,Dimensions} from 'react-native';
import {Image, FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import {css} from './css'

/* explore/discover other articles screen */

export default function Explorar(props) {
     
    const notes=[
        {key: '1', title: 'Title', description: 'Description', body: 'Body',    userid: 'Publisher/User'},
    ]

    // Database Connection 
    // var notes=[];

    // async function lerNota(){
    //     let resData = await AsyncStorage.getItem('userData');
    //     let resData1 = JSON.parse(resData)
    //     let readnote = await fetch('http:IP:Port/exploreNote',{
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

    function NoteContainer ({id,title,userid,description,body}) {
        return(
            <View>
                <TouchableOpacity onPress={()=>props.navigation.navigate('VerArtigo',{id:id,title:title,description:description,userid:userid,body:body})} style={css.exploreList}>
                    <Text style={{fontWeight:'bold', fontSize: 20}}numberOfLines={2} ellipsizeMode='tail'>{title}</Text>
                    <Text style={{color: '#2c346b',fontWeight:'bold', fontSize: 15}}numberOfLines={1} ellipsizeMode='tail'>{userid}</Text>
                    <Text style={{color: '#7e7e7e', marginTop: 5}}numberOfLines={2} ellipsizeMode='tail'>{description}</Text>
                </TouchableOpacity>
            </View>
        )
    }   

    return (
    <View style={css.container}>
        
        <FlatList
            data={notes}
            renderItem={({item})=> <NoteContainer id={item.key} title={item.title} userid={item.userid} description={item.description} body={item.body}/>}
        />   

    </View>
    );
}