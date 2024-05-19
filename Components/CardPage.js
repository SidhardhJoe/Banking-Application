import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


const CardPage = () => {
  return (
    <View style={styles.carddesign}>
      <View style={{ flexDirection: "row" }}>
        <View >
          <Text style={styles.text1}>
            0125 0125 0125 0125
          </Text>
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <Text style={styles.text2}>
              SIDHARDH JOE
            </Text>
            <Text style={styles.text3}>
              22/22
            </Text>
          </View>
        </View>

        <Image source={require("../Icons/MasterCard.png")} style={styles.cardlogo} />
      </View>
    </View>
  )
}

export default CardPage

const styles = StyleSheet.create({
  carddesign: {
    height: 220,
    width: "35%",
    backgroundColor: "black",
    borderRadius: 20,
    marginLeft: 15,
    marginRight: 10,
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  text1: {
    color: "black",
    fontFamily: "PoppinsRegular",
    fontSize: 25,
    marginTop: "50%",
    marginLeft: "6%"
  },
  text2: {
    color: "black",
    fontFamily: "PoppinsBold",
    fontSize: 18,
    marginLeft: "6%"
  },
  text3:{
    color: "black",
    fontFamily: "PoppinsRegular",
    fontSize: 18,
  },
  cardlogo: {
    height: 50,
    width: 60,
    marginTop: "2%",
    marginLeft: "7%"
  }
})