import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My ToDos</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    header: {
        height:60,
        paddingTop:15,
        backgroundColor: '#14B0DA',
    },
    title : {
        textAlign:'center',
        color:'white',
        fontSize: 28,
        fontWeight: 'bold',
    },

});