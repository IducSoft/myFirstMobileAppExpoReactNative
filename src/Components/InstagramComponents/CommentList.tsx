import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CommentList = ({items}:{items: string[]}) => {

    const renderItem = (item:any, index:any) => (
        <View key={index} style={styles.comment}>
            <Text>{item}</Text>
        </View>
    );

  return (
    <ScrollView>{items.map(renderItem)}</ScrollView>
  )
}

export default CommentList;

const styles = StyleSheet.create({
    comment: {
        marginLeft: 20,
        paddingVertical: 20,
        paddingRight: 20,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'rgba(0,0,0,0.05)',
    },
});