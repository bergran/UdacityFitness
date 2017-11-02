import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'

export default function UdaciSteppers ({max, min=0, unit, step, value, onIncrement, onDecrement}) {
    return (
        <View>
            <TouchableOpacity onPress={onDecrement}>
                <FontAwesome name='minus' color='black' size={30}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onIncrement}>
                <FontAwesome name='plus' color='black' size={30}/>
            </TouchableOpacity>
            <View>
                <Text>{value}</Text>
                <Text>{unit}</Text>
            </View>
        </View>
    )
}