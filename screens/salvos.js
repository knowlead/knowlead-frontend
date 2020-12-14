import React from 'react';
import {FlatList,StyleSheet,Text,View,TouchableOpacity} from 'react-native';

import {css} from './css'

/* saved articles screen */

export default function Salvos(props) {
     
    const notes=[
        {key: '1', title: 'title', description: 'description', body: 'body',    userid: 'user'},
    ]

    function NoteContainer ({id,title,userid,description,body}) {
        return(
            <View>
                <TouchableOpacity onPress={()=>props.navigation.navigate('VerArtigo',{id:id,title:title,userid:userid,description:description,body:body})} style={css.exploreList}>
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
            renderItem={({item})=> <NoteContainer id={item.key} title={item.title} userid={item.userid}description={item.description} body={item.body}/>}
        />   

    </View>
    );
}