import React from 'react';
import { StyleSheet, View } from 'react-native';
import TimerForm from './TimerForm';
import TimerButton from './TimerButton';



export default function ToggleableTimerForm({ isOpen }: {isOpen:boolean}) {
    return (
        <View style={[styles.container, !isOpen && styles.buttonPadding]}>
            {isOpen ? <TimerForm id="1" title="edit" project='' /> : <TimerButton small onPress={()=>{console.log("hola")}} title="+" color="black" />}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    buttonPadding: {
        paddingHorizontal: 15,
    },
});