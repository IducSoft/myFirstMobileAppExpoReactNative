import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TimerButton from './TimerButton';
import { millisecondsToHuman } from '../utils/TimerUtils';
import { useDispatch } from 'react-redux';
import { addCounterTime, removeTimer, startAddCounterTime, stopAddCounterTime } from '../store/ListTimersSlice';


export default function Timer({isRunning, id, title, project, elapsed, onEditPress }: {isRunning:boolean, id:string, project:string, title:string, elapsed:number, onEditPress:()=> void}) {
    
    const elapsedString = millisecondsToHuman(elapsed);
    const dispatch = useDispatch();

    const removeTimerFromTimerButton =(id:string)=>{
        dispatch(removeTimer(id));
    }

    const startRunning =(id:string)=>{
        if(isRunning === true){
            dispatch(addCounterTime(id))
        }else{
            dispatch(startAddCounterTime(id));
            dispatch(addCounterTime(id));
        }
        
    }

    const stopRunning =(id:string)=>{
        if(isRunning){
            dispatch(stopAddCounterTime(id));
        }
    }

    useEffect(()=>{
        if(isRunning === true){
            setInterval(()=>{
                
            }, 1000)
        }
        
    },[elapsed])

    
    return (
        <View style={styles.timerContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text>{project}</Text>
            <Text style={styles.elapsedTime}>{elapsedString}</Text>
            <View style={styles.buttonGroup}>
                <TimerButton onPress={onEditPress} color="blue" small title="Edit"  />
                <TimerButton onPress={()=>removeTimerFromTimerButton(id)} color="blue" small title="Remove" />
            </View>
            
            {
                isRunning === false ? (
                    <TimerButton small onPress={()=>startRunning(id)} color="#21BA45" title="Start" />
                ) : (
                    <TimerButton small onPress={()=>stopRunning(id)} color="#DB2828" title="Stop" />
                ) 
            }
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