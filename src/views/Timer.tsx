import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import EditableTimer from '../Components/EditableTimer';
import ToggleableTimerForm from '../Components/ToggleableTimerForm';
import { useSelector } from 'react-redux';

const Timer = ({route}:any) => {
  const { title } = route.params;
  const {counter}  = useSelector((state:any)=> state)
  console.log(counter)
  
  return (
    <View style={styles.appContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Timers</Text>
      </View>
    <ScrollView style={styles.timerList}>

      <ToggleableTimerForm isOpen={false} />

      <EditableTimer
        id="1"
        title="Mow the lawn"
        project="House Chores"
        elapsed="8986300"
        editFormOpen={false}
        isRunning
      />
      <EditableTimer
        id="2"
        title="Bake squash"
        project="Kitchen Chores"
        elapsed="3890985"
        editFormOpen
        isRunning
      />
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

