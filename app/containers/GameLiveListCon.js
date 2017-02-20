import { connect } from 'react-redux'
import GameLiveList from '../components/GameLiveList'
import {getGameLiveList} from '../actions'

const mapStateToProps = (state, ownProps) =>({
    items: state.allLive.allLives,
    index: state.allLive.index
})

const mapDispatchToProps = (dispatch, ownProps) =>({
    getGameLiveList: (index,gameId) =>{
        dispatch(getGameLiveList(index,gameId))
    },
    changePage: (index) =>{
        dispatch(getGameLiveList(index,ownProps.gameId))
    }
})

const GameLiveListCon = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameLiveList)

export default GameLiveListCon