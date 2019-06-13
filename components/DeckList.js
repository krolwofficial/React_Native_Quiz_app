import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { getData } from '../utils/api'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions'

class DeckList extends React.Component {


    componentDidMount() {

        getDecks()
            .then(decks => this.props.receiveAllDecks(decks));

    }

    render() {

        const { decks } = this.props

        return (
            <View style={styles.container}>
                {
                    Object.keys(decks).map((deck, key) => {
                        const { title } = decks[deck]
                        return (
                            <View key={key} style={styles.deck}>
                                <Text>{title}</Text>
                                <Button onPress={() => this.props.navigation.navigate('DeckView', { entryId: deck })}
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

function mapDispatchToProps(dispatch) {
    return {
        receiveAllDecks: (decks) => dispatch(receiveDecks(decks))
    }
}

function mapStateToProps(decks) {
    return { decks }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)
