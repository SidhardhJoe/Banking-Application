import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const TransactionPage = () => {
  return (
    <View>
      <View style={styles.tile}>
      <View style={styles.view1}>
        <Image source={require("../Icons/fuel.png")} style={styles.img1}/>
        <Text style={styles.textdetails}>Food</Text>
        <Text style={styles.text1}>-45$</Text>
      </View>
      </View>
    </View>
  )
}

export default TransactionPage

const styles = StyleSheet.create({
  tile:{
    height:80,
    width:"90%",
    marginLeft:"5%",
    borderRadius:10,
    backgroundColor:"#91908D",
    borderWidth:2,
    borderColor:"E63C3A",
    marginBottom:10

  },
  view1:{
    height:50,
    width:50,
    marginLeft:20,
    marginTop:15,
    borderRadius:10,
    flexDirection:"row",
    
    
  },
  img1:{
    height:35,
    width:35,
    marginTop:7,
    marginLeft:9
  },
  textdetails:{
    marginTop:11,
    marginLeft:20,
    width:50,
    fontFamily:"PoppinsBold",
    fontSize:18,
  },
  text1:{
    fontFamily:"PoppinsBold",
    marginLeft:"330%",
    width:"100%",
    marginTop:11,
    fontSize:17
    

  }
})