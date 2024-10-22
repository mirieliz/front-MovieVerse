import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { heightPercentage } from '../helpers/commons'
import { themes } from '../constants/themes'

const InputGeneral = (props) => {
    return (
        <View style={[styles.container, props.containerStyles && props.containerStyles]}>
        {/* <Text style={[styles.text, textStyle,{color: textColor}]}>{title}</Text> */}
        <TextInput 
        style={[
            styles.input,
            props.inputStyle && props.inputStyle,
            ]}
            placeholderTextColor={'gray'}
            ref={props.inputRef && props.inputRef}
            {...props}
            /> 
            {/* {info}    */}
        </View>
    )
}

export default InputGeneral

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: heightPercentage(7,2),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: themes.colors.dark,
        borderRadius: themes.radius.xl,
        borderCurve: 'continuous',
        paddingHorizontal: 18,
        gap: 12,
    },

    input:{
        flex: 1,
        fontSize: heightPercentage(2.5),
        height: heightPercentage(4,4),
        justifyContent: 'center',
        alignItems: 'center',
        borderCurve: 'continuous',
        borderRadius: 10,
    },
})

