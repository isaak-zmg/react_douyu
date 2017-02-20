import { connect } from 'react-redux'
import GameList from '../components/GameList'
import { getAllGame } from '../actions/index'


const mapStateToProps = (state, ownProps) =>({
    items: state.allGame.data
})

const mapDispatchToProps = (dispatch, ownProps) =>({
    getAllGame: ()=>{
        dispatch(getAllGame())
    }
})

const GameListCon = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameList)

export default GameListCon