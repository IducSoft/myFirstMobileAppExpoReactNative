import React from 'react';
import { FlatList, TouchableOpacity, Text, View, StyleSheet } from 'react-native';


const ScreenWithButtons = ({navigation}:any) => {
    const buttonsData = ['Timer', 'Trackers', 'Impeach', 'weather']; // Tus datos aquí
    const renderItem = ({ item}:{item:string}) => {
        return (
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate(item, {title:"hola que tal"})}>
            <Text style={styles.text}>{item}</Text>
        </TouchableOpacity>
        );
    }
    
    return (
        <View style={styles.container}>
            <FlatList
            data={buttonsData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(item)=> renderItem(item)}
            numColumns={2}
            style={styles.ButtonsContatiner}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    button: {
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal:10,
        borderRadius: 4,
        backgroundColor: 'grey',
        
    },
    text:{
        fontWeight:"bold",
    },
    ButtonsContatiner:{
        marginTop:20
    },
});

export default ScreenWithButtons;
