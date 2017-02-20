import { combineReducers } from 'redux'
import progressBar from './progressBar'
import allGame from './allGame'
import allLive from './allLive'
import gameLiveList from './gameLiveList'
import roomDetail from './roomDetail'

const reducer = combineReducers({
    progressBar,
    allGame,
    allLive,
    gameLiveList,
    roomDetail
})

export default reducer