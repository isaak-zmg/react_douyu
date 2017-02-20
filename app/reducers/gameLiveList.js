let initialState = {
    gameLives: "",
    index: 1
}

const gameLiveList = (state = initialState, action) => {
    if (typeof state == 'undefined') {
        return []
    }

    switch (action.type) {
        case 'GAMELIVELIST_FETCH_DATA_SUCCESS':
            return {
                gameLives: action.message,
                index: state.index
            }
        default:
            return state
    }
}

export default gameLiveList