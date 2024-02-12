import {View } from 'react-native';
import React, { useState } from 'react';
import CardList from '../Components/InstagramComponents/CardList';

type stateCardList = {
  commentsForItem: object,
  showModal:boolean,
  selectedItemId: null | string
}

const Instagram = () => {

  const [state, setState] = useState<stateCardList>({
    commentsForItem: {},
    showModal: false,
    selectedItemId: "",
  });

  const openCommentScreen = (id:string) => {
    setState({...state, showModal: true, selectedItemId: id});
  };

  const closeCommentScreen = () => {
    setState({...state,showModal: false,selectedItemId: null,});
  };

  return (
    <View>
      <CardList/>
    </View>
  )
}

export default Instagram;

