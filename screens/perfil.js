import React from 'react';
import {StyleSheet,Text,View,FlatList,TouchableOpacity,AsyncStorage} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {useState,useEffect} from 'react';


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
        {id: 1,title: 'Concordância Nominal', body: 'Todos os elementos que compõem a oração precisam estar em harmonia, ou seja, em concordância. Quando esta estiver relacionada ao sintagma nominal (parte da oração cujo núcleo é o substantivo), há a Concordância Nominal. \nA regra geral de Concordância Nominal diz que todos os determinantes (adjetivo, numeral, pronome adjetivo e artigo) devem harmonizar-se quanto ao gênero e ao número do substantivo. Portanto, substantivo no feminino singular, determinantes também, caso esteja no masculino plural, os determinantes o acompanham.', description: 'Relação que se estabelece entre as classes de palavras (nomes).'},
        {id: 2,title: 'Fossa das Marianas',body: 'A Fossa das Marianas é o local mais profundo dos oceanos, atingindo uma profundidade de 10 984 metros.[1] Localiza-se no oceano Pacífico, a leste das ilhas Marianas, na fronteira convergente entre as placas tectônicas do Oceano Pacífico e das Filipinas. Geologicamente, a fossa das Marianas é resultado geomorfológico de uma zona de subducção. O ponto mais profundo da fossa foi sondado pelos navios Challenger e Challenger II, da Marinha Real. O local foi batizado, então, de Challenger Deep. O fundo da fossa das Marianas foi atingido em 1960 pelo batiscafo "Trieste", da marinha Americana tripulado pelo tenente Don Walsh e o cientista suíço Jacques Piccard, que passaram 20 minutos no fundo do oceano, numa expedição que durou ao todo 9 horas.',description: 'O local mais profundo dos oceanos, atingindo uma profundidade de 10 984 metros. Localiza-se no oceano Pacífico'},

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
