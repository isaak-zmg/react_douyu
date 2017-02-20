import { connect } from 'react-redux'
import LiveList from '../components/LiveList'
import { getAllLive, getChangePage } from '../actions'

const mapStateToProps = (state, ownProps) => ({
    items: state.allLive.allLives,
    pageIndex: state.allLive.pageIndex
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    getAllLive: () => {
        dispatch(getAllLive())
    },

    onChangePage: (index)=>{
        dispatch(getChangePage(index))
    }
})

const LiveListCon = connect(
    mapStateToProps,
    mapDispatchToProps
)(LiveList)

export default LiveListCon