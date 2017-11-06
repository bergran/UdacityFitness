import React from 'react'
import { View, StyleSheet } from 'react-native'
import AddEntry from './components/AddEntry'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import entries from './reducers'

export default class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(entries)}>
                <View style={{flex: 1}}>
                    <AddEntry />
                </View>
            </Provider>
        )
    }
}

const styles = StyleSheet.create({
    example: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'column-reverse'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    box: {
        height: 100,
        width: 100,
        backgroundColor: '#e76e63',
        margin: 10,
    }
})