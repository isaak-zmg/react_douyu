import { connect } from 'react-redux'
import Nav from '../components/Nav'
import { getAllGame, getSearchInfo, getVerticalRoom } from '../actions/index'
import "../less/allLive.less"


const mapStateToProps = (state, ownProps) =>({
    items: state.allGame.data
})

const mapDispatchToProps = (dispatch, ownProps) =>({
    getAllGame: ()=>{
        dispatch(getAllGame())
    },

    getSearchInfo: (info)=>{
        dispatch(getSearchInfo(info))
    },

    onVertical: () => {
        dispatch(getVerticalRoom())
    }
})

const NavCon = connect(
    mapStateToProps,
    mapDispatchToProps
)(Nav)

export default NavCon