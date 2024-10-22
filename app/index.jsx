import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
// import Welcome from '../app/welcome';

const index = () => {
    const router= useRouter();
    return (
        <View>
        <Text>index</Text>
        <Button title='button' onPress={()=> router.push('welcome') } />
        </View>
    )
}

export default index