import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ScreamWrapper from '../components/ScreamWrapper'
import { StatusBar } from 'expo-status-bar'
import {themes} from '../constants/themes.js'
import { heightPercentage,widthPercentage } from '../helpers/commons.js'
import Button from '../components/Button.jsx'
import { useRouter } from 'expo-router';

const welcome = () => {
    const route=useRouter();
    return (
        <ScreamWrapper background={themes.colors.tercer}>
            <StatusBar style='dark' />
            {/* logo */}
            <View style={styles.container}>
                <Image style={styles.log} source={require('../assets/images/logo-m.png')} resizeMode='contain'/>
            </View>
            {/* Principal text */}
            <View style={{gap:15}}>
                <Text style={styles.tittle} >Explore MovieVerse</Text>
                <Text style={styles.infotext}> Connect with your favorites movies</Text>
            </View>
            {/* footer buttons */}
            <View style={styles.footer}>
                <Button 
                title='Log In' 
                buttonStyle={{marginHorizontal:widthPercentage(3)}}
                onPress={()=>{route.push('index')}}
                backgroundColor={themes.colors.primary}
                textColor={'white'}
                />
                <Button 
                title='Create Account' 
                buttonStyle={{marginHorizontal:widthPercentage(3)}}
                onPress={()=>{route.push('create_account')}}
                backgroundColor={themes.colors.secundary}
                textColor={'black'}
                />
            </View>
        </ScreamWrapper>

    )
}

export default welcome

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: themes.colors.tercer,
        paddingHorizontal: widthPercentage(2),
    },

    log:{
        height: heightPercentage(100),
        width: widthPercentage(100),
        alignSelf: 'center',
    },

    tittle:{
        color: 'white',
        fontSize: heightPercentage(5),
        textAlign: 'center',
        fontWeight: themes.fonts.extrabold,
    },

    info:{
        color: 'white',
        fontSize: heightPercentage(3),
        textAlign: 'center',
        fontWeight: themes.fonts.bold,
    },

    infotext:{
        color: 'gray',
        fontSize: heightPercentage(3),
        textAlign: 'center',
        fontWeight: themes.fonts.minimus,
        paddingTop: 3,
        marginBottom: 30,
    },
    footer:{
        gap:20,
        width:'100%',
        marginBottom:60,
        alignItems: 'center',
    }
})