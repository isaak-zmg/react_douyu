import { connect } from 'react-redux'
import { getRoomDetail } from '../actions'
import RoomDetail from '../components/RoomDetail'

const mapStateToProps = (state, ownProps) => ({
    roomDetail: state.roomDetail.roomdetail
})

const mapDispatchToProps = (dispatch, ownProps)=>({
    getRoomDetail: (roomId)=>{
        dispatch(getRoomDetail(roomId))
    }
})

const RoomDetailCon = connect(
    mapStateToProps,
    mapDispatchToProps
)(RoomDetail)

export default RoomDetailCon