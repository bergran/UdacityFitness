import React from 'react'
import { View, Slider, Text } from 'react-native'

export default function UdaciSlider ({ max, min=0, unit, step, value, onChange }) {
    return (
        <View>
            <Slider
                step={step}
                value={value}
                maximumValue={max}
                minimumValue={min}
                onValueChange={onChange}
            />
            <View>
                <Text>{value}</Text>
                <Text>{unit}</Text>
            </View>
        </View>
    )
}