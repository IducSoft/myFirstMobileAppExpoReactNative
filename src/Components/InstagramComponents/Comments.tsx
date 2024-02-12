import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import NavigationBar from './NavigationBar';

const Comments = ({style,comments,onClose,onSubmitComment,}:{style:any, comments:string[], onClose:()=>void, onSubmitComment:()=>void}) => {
  return (
    <View>
        <NavigationBar title="Comments" leftText="Close" onPressLeftText={onClose}/>
        <CommentInput placeholder="Leave a comment" onSubmit={onSubmitComment}/>
        <CommentList items={comments}/>
    </View>
  )
}

export default Comments;

const styles = StyleSheet.create({})