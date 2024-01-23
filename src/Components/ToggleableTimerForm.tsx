import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import TimerForm from './TimerForm';
import TimerButton from './TimerButton';



export default function ToggleableTimerForm() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <View style={[styles.container, !isOpen && styles.buttonPadding]}>
            {isOpen ? <TimerForm id="" title="" project='' /> : <TimerButton small onPress={()=>{setIsOpen(!isOpen)}} title="+" color="black" />}
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