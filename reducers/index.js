import { RECEIVE_DECKS } from '../actions'


function reducer(state = {}, action) {

    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.deck
            }
        default:
            return state
    }
}

export default reducer
