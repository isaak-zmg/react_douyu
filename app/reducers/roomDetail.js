let initialState = {
    roomDetail: ''
}

const roomDetail = (state = initialState, action) => {
    if (typeof state == 'undefined'){
        return []
    }

    switch (action.type) {
        case 'ROOMDETAIL_FETCH_DATA_SUCCESS':
            return {
                roomdetail: action.message
            }
        default:
            return state
    }
}

export default roomDetail