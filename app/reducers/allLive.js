let initialState = {
    allLives: "",
    pageIndex: 1
}

const allLive = (state = initialState, action) => {
    if (typeof state == 'undefined') {
        return []
    }

    switch (action.type) {
        case 'ALLLIVE_FETCH_DATA_SUCCESS':
            return {
                allLives: action.message,
                pageIndex: state.pageIndex
            }
        case 'CHANGE_PAGE':
         return {
             pageIndex: action.pageIndex,
             allLives:state.allLives
         }

        default:
            return state
    }
}

export default allLive