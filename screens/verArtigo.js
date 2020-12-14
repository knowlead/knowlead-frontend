import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {onChange} from 'react-native-reanimated';

import {css} from './css'

/* view article screen */

export default function verArtigo(props) {
    
    var id = props.route.params.id;
    var publisher = props.route.params.userid;
    var title = props.route.params.title;
    var description = props.route.params.description;
    var body = props.route.params.body;

    return (
        <View style={css.container}>

            <ScrollView>
                <Text style={css.inputTitle}>
                    {title}
                </Text>
                <Text style={css.inputDesc}>
                    {description}
                </Text>
                <Text style={css.inputPublisher}>
                    {publisher}
                </Text>
                <Text style={css.inputBody}>
                    {body}
                </Text>
            </ScrollView>
        </View>
    );
}