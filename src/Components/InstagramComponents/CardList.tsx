import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from './Card'

const CardList = () => {

    const listaDepostales = [
    {
      image:'https://unsplash.it/600/600',
      fullname: "Isaac urdaneta",
      id:"",
      linkText:"Datos"
    },
    {
      image:'https://unsplash.it/600/600',
      fullname: "estefan hernandez",
      id:"",
      linkText:"Datos"
    },
  ]
    const renderItem = ({ fullname, image, linkText, onPressLinkText }:any) => {

        return (
            <Card
                fullname={fullname}
                image={image}
                linkText={linkText}
                onPressLinkText={()=> console.log()}
            />
        )
    }
  return (
    <View>
      <FlatList
          data={listaDepostales}
          renderItem={(item)=>{
              console.log({...item.item})
              return(
                  renderItem({...item.item})
              )
          }}
      />
    </View>
  )
}

export default CardList;

const styles = StyleSheet.create({})