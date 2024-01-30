import React from 'react';
import { Button, Image, Linking, Pressable, StyleSheet, Text } from 'react-native';

const OpenURLButton = ({url, title}:{url:string, title:string}) => {
    const handlePress = async () => {
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            await Linking.openURL(url);
        } else {
            alert(`No podemos abrir esta URL: ${url}`);
        }
    };

    return (
    <Pressable style={styles.Pressable}  onPress={handlePress}>
        <Text>{title}</Text>
        <Image source={require("../../assets/hacker.png")} style={styles.imageIcon} />
    </Pressable>);
};

const styles = StyleSheet.create({
    Pressable:{
        backgroundColor:"white",
        marginVertical:25,
        borderRadius:15,
        paddingHorizontal:10,
        paddingVertical:5,
        fontSize:23,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row"
    },
    imageIcon:{
        width:40,
        height:40,
        marginHorizontal:10
    }
});


export default OpenURLButton;
