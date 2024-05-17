import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Design() {
    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <View style={styles.view1sub}>
                    <Text style={styles.text}> Welcome, </Text>
                    <Text style={styles.text}>Joe</Text>
                </View>
                <View>
                    <Image source={require('../Icons/notification.png')} style={styles.notificationicon} />
                </View>
            </View>
            <View style={styles.view2}>
            </View>
            <View>
                <Text style={styles.text2}>$ 13,000</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D6D4CE',
    },
    view1: {
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "space-between",
        marginTop:"15%"
    },
    view1sub:{
        display: "flex", 
        flexDirection: "row"
    },
    text:{
        fontSize:28,
        fontWeight:"bold",
        marginLeft:5
    },
    notificationicon: {
        height: 30,
        width: 30,
        marginRight:10,
        marginTop:8
    },
    view2:{
        borderBottomColor:"black",
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginTop:20,
        marginLeft:"3%",
        width:"94%"
    },
    text2:{
        fontSize:28,
        fontWeight:"bold",
    }
})