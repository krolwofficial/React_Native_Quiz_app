import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { getData } from '../utils/api'

export default class DeckView extends React.Component {
    render() {

        const decks = getData();
        const deck = this.props.navigation.state.params.entryId;

        return (
            <View style={styles.container}>
                <Text>{decks[deck].title}</Text>
                <Text>{decks[deck].questions.length}</Text>
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