import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OpenURLButton from '../Components/OpenUrlButton'
import ScreenWithButtons from '../Components/ScreenWithButtons'

const Home = ({navigation}:any) => {
    return (
    <ImageBackground resizeMode="cover" source={require('../../assets/IsaacurdanetaHacker.jpg')} style={styles.background}>
        <View style={styles.container}>
            <ScreenWithButtons navigation={navigation}/>
            <OpenURLButton url={"https://github.com/IducSoft"} title='Isaac Urdaneta'/>
        </View>
    </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        flex: 1,
        justifyContent: "center",
    },
});

export default Home;

