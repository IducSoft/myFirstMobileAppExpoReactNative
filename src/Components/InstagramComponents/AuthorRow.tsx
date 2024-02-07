import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Avatar from './Avatar'



const AuthorRow = ({ fullname, linkText, onPressLinkText }:{fullname:string, linkText:string, onPressLinkText: ()=> void}) => {


    return(
        <View style={styles.container}>
            <Avatar
                size={35}
                initials={fullname}
                backgroundColor={"pink"}
            />
            <Text style={styles.text} numberOfLines={1}>
                {fullname}
            </Text>
            {!!linkText && (
            <Pressable onPress={onPressLinkText}>
                <Text numberOfLines={1}>{linkText}</Text>
            </Pressable>
            )}
        </View>
    )
}

export default AuthorRow

const styles = StyleSheet.create({
    container:{
        height:50,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:10,
    },
    text: {
        flex: 1,
        marginHorizontal: 6,
    },
})