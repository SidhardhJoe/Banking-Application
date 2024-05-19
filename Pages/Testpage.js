import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Testpage = ({ navigation }) => {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Testpage</Text>
            </TouchableOpacity>

        </View>
    )
}

export default Testpage

const styles = StyleSheet.create({})