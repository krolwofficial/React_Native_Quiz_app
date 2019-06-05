import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { getData } from '../utilis/api'

export default class DeckList extends React.Component {
    render() {

        const decks = getData();

        return (
            <View style={styles.container}>
                {
                    Object.keys(decks).map((deck) => {
                        const { title } = decks[deck]
                        return (
                            <View style={styles.deck}>
                                <Text>{title}</Text>
                                <Button onPress=""
                                    title="See deck"
                                ></Button>
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    deck: {
        paddingBottom: 20
    }
});