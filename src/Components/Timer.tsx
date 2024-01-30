import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TimerButton from './TimerButton';
import { millisecondsToHuman } from '../utils/TimerUtils';
import { TimerData } from '../types/types';


export default function Timer({isRunning, id, title, project, elapsed }: TimerData) {
    const elapsedString = millisecondsToHuman(elapsed);
    return (
        <View style={styles.timerContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text>{project}</Text>
            <Text style={styles.elapsedTime}>{elapsedString}</Text>
            <View style={styles.buttonGroup}>
                <TimerButton onPress={()=>{console.log("hola")}} color="blue" small title="Edit" />
                <TimerButton onPress={()=>{console.log("hola")}} color="blue" small title="Remove" />
            </View>
            <TimerButton small onPress={()=>{console.log("hola")}} color="#21BA45" title="Start" />
        </View>
    );
}

const styles = StyleSheet.create({
    timerContainer: {
        backgroundColor: 'white',
        borderColor: '#d6d7da',
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        margin: 15,
        marginBottom: 0,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    elapsedTime: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 15,
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});