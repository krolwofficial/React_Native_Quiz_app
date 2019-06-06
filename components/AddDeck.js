import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class AddDeck extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>This is an AddDeck Component</Text>
            </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});