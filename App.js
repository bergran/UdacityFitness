import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import AddEntry from './components/AddEntry'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import entries from './reducers'
import History from './components/History'

export default class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(entries)}>
                <View style={{flex: 1}}>
                    <View><Text>Hello</Text></View>
                    <View style={{height: 20}}/>
                    <History />
                </View>
            </Provider>
        )
    }
}