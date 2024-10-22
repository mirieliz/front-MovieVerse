import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { themes } from '../constants/themes'

const TextTags = ({
    tagTitle='',
}) => {
    return (
        <View>
        <Text style={[styles.textTags]}>{tagTitle}</Text>
        </View>
    )
}

export default TextTags

const styles = StyleSheet.create({
    textTags:{
        textAlign:'left',
        color:'white',
        fontSize: themes.fonts.medium,
    }
})