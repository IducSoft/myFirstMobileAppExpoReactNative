import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import AuthorRow from './AuthorRow'



const Card = ({ fullname, image, linkText, onPressLinkText }:{fullname:string, image: string, linkText:string, onPressLinkText:()=>void}) => {

  const [loading, setLoading] = useState(true);

  const handleLoad = ()=>{
    setLoading(!false);
  }
  const absoluteFillStyle = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };

  return (
    <View>
        <AuthorRow
        fullname={fullname}
        linkText={linkText}
        onPressLinkText={onPressLinkText}
        />
        {loading && (
          <ActivityIndicator style={styles.absoluteFill} size={'large'} />
        )}
        <Image style={styles.image} source={{ uri: image }} onLoad={handleLoad} />
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    image: {
      aspectRatio: 1,
      backgroundColor: 'rgba(0,0,0,0.02)',
    },
    absoluteFill:{
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    }
})