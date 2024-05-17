import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useFonts } from 'expo-font';

const loadFonts = () => {
    return useFonts({
        PoppinsRegular: require('../Fonts/Poppins-Regular.ttf'),
        PoppinsBold: require('../Fonts/Poppins-Bold.ttf')
    })
}



export default function Design() {
    const [loaded] = loadFonts();

    if (!loaded) {
        return null;
    }

    return (
        <ScrollView style={styles.container}>
            <View >
                <View style={styles.view1}>
                    <View style={styles.view1sub}>
                        <Text style={styles.text}> Welcome, </Text>
                        <Text style={styles.text1}>Joe!</Text>
                    </View>
                    <View>
                        <Image source={require('../Icons/notification.png')} style={styles.notificationicon} />
                    </View>
                </View>
                <View style={styles.view2}>
                </View>
                <View style={styles.view3}>
                    <View>
                        <Text style={styles.text2}>$13,000.00</Text>
                    </View>
                    <View>
                        <Text style={styles.text3}>Balance</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
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
        marginTop: "15%"
    },
    view1sub: {
        display: "flex",
        flexDirection: "row"
    },
    text: {
        fontSize: 25,
        marginLeft: 10,
        fontFamily: "PoppinsRegular",
        color: "#91908D"
    },
    text1: {
        fontSize: 25,
        fontFamily: "PoppinsBold"
    },
    notificationicon: {
        height: 28,
        width: 28,
        marginRight: 10,
        marginTop: 8
    },
    view2: {
        borderBottomColor: "#91908D",
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginTop: 12,
        marginLeft: "3%",
        width: "94%"
    },
    text2: {
        fontSize: 35,
        fontFamily: "PoppinsBold",
        marginLeft: 10,
    },
    text3: {
        marginLeft: "15%",
        marginTop: "12%",
        color: "#91908D",
        fontSize:20
    },
    view3: {
        display: "flex",
        flexDirection: "row",
        marginTop: "5%"
    }
})