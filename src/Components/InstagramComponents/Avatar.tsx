import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AvatarData } from '../../types/types'

const Avatar = ({ size, backgroundColor, initials }: AvatarData) => {
    const style = {
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
    }
    return (
        <View style={[styles.container, style]}>
                <Text style={styles.text}>{initials}</Text>
        </View>
    )
}

export default Avatar;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        color: 'white',
    },
});