let initialState = {}

const allGame = (state = initialState, action) => {
    if (typeof state == 'undefined') {
        return []
    }

    switch (action.type) {
        case 'ALLGAME_FETCH_DATA_SUCCESS':
            return {
                data: action.message
            }
        default:
            return state
    }
}

export default allGame