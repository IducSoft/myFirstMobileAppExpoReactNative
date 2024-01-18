import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Timer = ({route}:any) => {
  const { title } = route.params;
  return (
    <View>
      <Text>Timer: {title} </Text>
    </View>
  )
}

export default Timer;

const styles = StyleSheet.create({})