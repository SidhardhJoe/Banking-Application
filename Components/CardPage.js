import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CardPage = () => {
  return (
    <View style={styles.carddesign}>
    </View>
  )
}

export default CardPage

const styles = StyleSheet.create({
    carddesign:{
        height:220,
        width:360,
        backgroundColor:"black",
        borderRadius:20,
        marginLeft:15,
        marginRight:10
    }
})