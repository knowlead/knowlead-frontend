import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {onChange} from 'react-native-reanimated';

import {css} from './css'



export default function CriarNota(props) {
    
    var stts = props.route;
    var id = props.route.params.id;
    var title = props.route.params.title;
    var statusnote = props.route.params.statusnote;
    var description = props.route.params.description;
    var body = props.route.params.body

    const [value_id, onChangeId] = React.useState(id);
    const [value_title, onChangeText] = React.useState(title);
    const [value_body, onChangeValue] = React.useState(body);
    const [value_desc, onChangeDesc] = React.useState(description);
    
    function SttsNote (){
        var a1 = ''
        if (statusnote === 0) {
            a1='Não Publicado'
            return(
            <Text style={{color: '#9999ff',fontWeight:'bold', fontSize: 15}}numberOfLines={1} ellipsizeMode='tail'>{a1}</Text>
            )
        } 
        else {
            a1='Publicado'
            return(
            <Text style={{color: '#0c457d',fontWeight:'bold', fontSize: 15}}numberOfLines={1} ellipsizeMode='tail'>{a1}</Text>
            )
        }
    }

    async function verificaSeNotaCriada() {
        let verifyresponse = await fetch('http://192.168.15.166:3000/verifyIfNoteCreated',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id:value_id,
            })
        });

        let json = await verifyresponse.json();
        return (json);
    }

    // async function editarDados(){
    //     console.log(verificaSeNotaCriada())

    //     // if (ver === 'null'){
    //     //     // CRIAR NOTA
    //     //     alert('Nota criada')
    //     // }
    //     // else {
    //     //     // MODIFICAR NOTA
    //     //     alert('Nota modificada')
    //     // }

    //     // if (json === 'noNote'){
    //     //     // CRIAR NOTA
    //     //     // let resData = await AsyncStorage.getItem('userData');
    //     //     // let resData1 = JSON.parse(resData)
    //     //     // let response1 = await fetch ('http://192.168.15.166:3000/createNote',{
    //     //     // method: 'POST',
    //     //     // headers: {
    //     //     //     Accept: 'application/json',
    //     //     //     'Content-Type': 'application/json'
    //     //     // },
    //     //     // body: JSON.stringify({
    //     //     //     userId: resData1.id,
    //     //     //     title: value_title,
    //     //     //     desc: value_desc,
    //     //     //     body: value_body,
    //     //     // })
    //     //     // });
    //     //     console.log('Nota já criada')
    //     // } 
    //     // else{
    //     //     // MODIFICAR NOTA
    //     //     // let userData = await AsyncStorage.setItem('userData', JSON.stringify(json));
    //     //     // let resData = await AsyncStorage.getItem('userData');
    //     //     // let resData1 = JSON.parse(resData)
    //     //     // let response2 = await fetch ('http://192.168.15.166:3000/createNote',{
    //     //     // method: 'POST',
    //     //     // headers: {
    //     //     //     Accept: 'application/json',
    //     //     //     'Content-Type': 'application/json'
    //     //     // },
    //     //     // body: JSON.stringify({
    //     //     //     id: id,
    //     //     //     userId: resData1.id,
    //     //     //     title: value_title,
    //     //     //     desc: value_desc,
    //     //     //     body: value_body,
    //     //     // })
    //     //     // });
    //     //     console.log('Nota não criada')
    //     // }  
    //     // // props.navigation.navigate('Notas');
    // }
    verificaSeNotaCriada();
    // console.log();

    return (
        <View style={css.container}>

            <ScrollView>
                <TextInput  style={css.inputTitle}
                    onChangeText={text => onChangeText(text)}
                    value={value_title}
                    maxLength={60}
                    multiline
                    autoCorrect={false}
                    numberOfLines={1}
                    placeholder= 'Seu título'/>
                <Text style={css.inputStatus}>
                    <SttsNote></SttsNote>
                </Text>
                <TextInput  style={css.inputDesc}
                    onChangeText={text => onChangeDesc(text)}
                    value={value_desc}
                    maxLength={120}
                    multiline
                    autoCorrect={false}
                    numberOfLines={1}
                    placeholder= 'Descrição'/>
                <TextInput style={css.inputBody} 
                    onChangeText={body => onChangeValue(body)}
                    value={value_body}
                    placeholder= 'Desenvolva aqui =)'
                    multiline
                    maxLength={10000}
                    numberOfLines={4} />
            </ScrollView>
        </View>
    );
}