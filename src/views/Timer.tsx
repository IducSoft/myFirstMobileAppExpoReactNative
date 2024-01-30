import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import EditableTimer from '../Components/EditableTimer';
import ToggleableTimerForm from '../Components/ToggleableTimerForm';
import { useSelector } from 'react-redux';
import { TimerData } from '../types/types';


const Timer = () => {
  const {ListTimers}  = useSelector((state:any)=> state)
  console.log(ListTimers)

  

  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Timers</Text>
      </View>
    <ScrollView style={styles.timerList}>

      <ToggleableTimerForm/>

      {ListTimers.map((item:TimerData, key:number) => {
        return(
          <View key={key}>
            <EditableTimer
              id={item.id}
              title={item.title}
              project={item.project}
              elapsed={item.elapsed}
              isRunning={item.isRunning}
            />
          </View>
          
        )
      })}
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D7DA',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  timerList: {
    paddingBottom: 15,
  },
})

export default Timer;

