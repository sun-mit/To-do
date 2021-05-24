import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default function TodoItem({ item, pressHandler }){

    return (

        <TouchableOpacity onPress={()=> pressHandler(item.key)}>
        <View style={styles.text}>
             <FontAwesome5 name='trash' size={13}  solid/>
            <Text style={styles.itemText}>{item.text}</Text>
        </View> 
        </TouchableOpacity>
    
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 8,
        flexDirection: 'row',
        
    },
    itemText: {
        marginLeft: 10,

    }

});