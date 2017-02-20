export const getAllGame = () => (dispatch, getState) => {


    let url = `http://open.douyucdn.cn/api/RoomApi/game`
    fetch(url)
        .then((res) => {
            return res.json()
        }, e => {
            dispatch({
                type: 'FETCH_DATA_FAIL',
                message: e,
            })
        })
        .then(data => {
            dispatch({
                type: 'ALLGAME_FETCH_DATA_SUCCESS',
                message: data.data,
            })

        })
}

export const getAllLive = () => (dispatch, getState) => {
    dispatch({
        type: 'SHOW_PROGRESS'
    })

    let url = `http://open.douyucdn.cn/api/RoomApi/live?limit=100`
    fetch(url)
        .then(res => {
            return res.json()
        }, e => {
            dispatch({
                type: 'FETCH_DATA_FAIL',
                message: e,
            })
        })
        .then(data => {
            dispatch({
                type: 'ALLLIVE_FETCH_DATA_SUCCESS',
                message: data.data
            })

            dispatch({
                type: 'HIDE_PROGRESS'
            })
        })
}

export const getGameLiveList = (index = 1, id) => (dispatch, getState) => {
    dispatch({
        type: 'SHOW_PROGRESS'
    })

    let offset = (index - 1) * 32
    let url = `http://open.douyucdn.cn/api/RoomApi/live/${id}?limit=32&offset=${offset}`
    fetch(url)
        .then(res => {
            return res.json()
        }, e => {
            dispatch({
                type: 'FETCH_DATA_FAIL',
                message: e
            })
        })
        .then(data => {
            dispatch({
                type: 'ALLLIVE_FETCH_DATA_SUCCESS',
                message: data.data
            })

            dispatch({
                type: 'HIDE_PROGRESS'
            })
        })
}

export const getRoomDetail = (roomId) => (dispatch, getState) => {
    dispatch({
        type: 'SHOW_PROGRESS'
    })

    let url = `http://open.douyucdn.cn/api/RoomApi/room/${roomId}`
    fetch(url)
        .then(res => {
            return res.json()
        }, e => {
            dispatch({
                type: 'FETCH_DATA_FAIL',
                message: e
            })
        })
        .then(data => {
            dispatch({
                type: 'ROOMDETAIL_FETCH_DATA_SUCCESS',
                message: data.data
            })

            dispatch({
                type: 'HIDE_PROGRESS'
            })
        })
}

export const getSearchInfo = (info) => (dispatch, getState) => {
    dispatch({
        type: "SHOW_PROGRESS"
    })

    let url = `http://capi.douyucdn.cn/api/v1/searchNew/${info}`
    fetch(url)
        .then(res => {
            return res.json()
        }, e => {
            dispatch({
                type: 'FETCH_DATA_FAIL',
                message: e
            })
        })
        .then(data => {
            dispatch({
                type: 'ALLLIVE_FETCH_DATA_SUCCESS',
                message: data.data.room
            })

            dispatch({
                type: 'HIDE_PROGRESS'
            })
        })
}

export const getVerticalRoom = () => (dispatch, getState) => {
    dispatch({
        type: 'SHOW_PROGRESS'
    })

    let url = `http://capi.douyucdn.cn/api/v1/getVerticalRoom`
    fetch(url)
        .then(res => {
            return res.json()
        }, e => {
            dispatch({
                type: 'FETCH_DATA_FAIL',
                message: e
            })
        })
        .then(data => {
            dispatch({
                type: 'ALLLIVE_FETCH_DATA_SUCCESS',
                message: data.data
            })

            dispatch({
                type: 'HIDE_PROGRESS'
            })
        })
}


export const getChangePage = (index = 1) => (dispatch, getState) => {
    dispatch({
        type: 'CHANGE_PAGE',
        pageIndex: index
    })
}