import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';


const CardPage = () => {
  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.carddesign}>
    </LinearGradient>
  )
}

export default CardPage

const styles = StyleSheet.create({
    carddesign:{
        height:220,
        width:360,
        backgroundColor:"purple-red",
        borderRadius:20,
        marginLeft:15,
        marginRight:10
    }
})