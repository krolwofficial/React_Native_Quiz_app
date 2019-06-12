export const RECEIVE_DECKS = 'RECEIVE_DECKS'

export const receiveDecks = (deck) => {
    return {
        type: RECEIVE_DECKS,
        deck
    }
}