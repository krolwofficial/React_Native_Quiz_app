import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class DeckView extends React.Component {
    render() {

        const decks = getData();

        return (
            <View style={styles.container}>
                <Text>{this.props.}</Text>
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