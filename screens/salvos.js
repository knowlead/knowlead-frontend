import React from 'react';
import {FlatList,StyleSheet,Text,View,TouchableOpacity} from 'react-native';

import {css} from './css'



export default function Salvos(props) {
     
    const notes=[
        {key: '18', title: 'Idade Antiga', description: 'Periodo da história entre 4000 a.C até 476 d.C', body: 'Sabe-se que as divisões dos períodos históricos entre Idades (Antiga, Medieval, Moderna e Contemporânea) foram adotadas por historiadores do século XIX após acontecimentos como a Revolução Francesa e a formação dos Estados Nacionais na Europa e em outras regiões do mundo. De modo geral, a Idade Antiga compreende um período que se estende, aproximadamente, de 4.000 a.C. a 476 d.C., data em foi deposto o último imperador romano ocidental, Rômulo Augusto. Esse arco temporal que enquadra o período da Antiguidade orienta-se, convencionalmente, pelo florescimento e apogeu das civilizações que se desenvolveram na Europa e no Médio Oriente, isto é, as civilizações da Mesopotâmia, do Egito Antigo, os povos Hebreus, a Grécia Antiga e a Roma Antiga.',    userid: 'felipe'},        {key: '12', title: 'Síntese proteica', description: 'Formação de proteínas a partir de aminoácidos', body: 'A síntese proteica é o processo de formação das proteínas. Esse processo é realizado por estruturas denominadas de ribossomos, presentes tanto em células procarióticas quanto eucarióticas. Na molécula de DNA (ácido desoxirribonucleico) estão contidas todas as informações genéticas do indivíduo, assim, para que a síntese de uma determinada proteína seja realizada, é necessário que a região específica do DNA onde está contida essa informação seja decodificada. Nesse processo ocorre a transcrição dos nucleotídeos dessa região em uma molécula de RNA (ácido ribonucleico), que irá direcionar a síntese proteica em um processo denominado de tradução. A molécula de RNA que carregará essa informação até o local onde ocorrerá a síntese de proteínas é denominada de RNAm (RNA mensageiro). Para que ocorra a síntese proteica, a informação genética fluirá do DNA para o RNA e, em seguida, para as proteínas. Esse princípio é conhecido como Dogma Central da Biologia Molecular.',    userid: 'guisoares'},
        {key: '13', title: 'Divisão Celular', description: 'Proceso pela qual todas as células passsam para multiplicar', body: 'O processo de divisão celular é responsável pela reprodução das células e faz parte do ciclo celular, ou seja, do ciclo de vida de uma célula, que se inicia na sua formação por meio da divisão da célula-mãe e vai até a sua própria divisão, com a formação das células-filhas. O processo de divisão celular apresenta diversas funções importantes nos organismos, como originar um novo indivíduo e renovar as células mortas.\nEsse processo ocorre de forma diferente nas células dos organismos procariontes e nos organismos eucariontes. Nos organismos procariontes, como as bactérias, o DNA duplica-se e o citoplasma divide-se em duas partes, ficando cada célula com uma cópia do DNA. Nos organismos eucariontes, como os animais, o processo de divisão é um pouco mais complexo e pode ocorrer de duas formas: \n\n* Mitose: uma célula-mãe origina duas células-filhas com o mesmo número de cromossomos e as mesmas informações genéticas da célula-mãe. Esse processo é observado, por exemplo, no crescimento de organismos, na regeneração de partes do corpo e na substituição de células mortas; \n\n* Meiose: ocorre nas células sexuais em que uma célula-mãe diploide (2n) sofre duas divisões e forma, ao final, quatro células-filhas haploides (n), ou seja, com a metade dos cromossomos da célula-mãe. Esse é o mecanismo mais comum de reprodução dos organismos unicelulares eucariontes e é o processo que forma os seres pluricelulares. A meiose sempre origina células haploides e é responsável pela produção dos gametas em animais e dos esporos nas plantas.',    userid: 'arthur'},
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