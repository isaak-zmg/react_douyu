import React from 'react'
import {render} from 'react-dom'


export default class RoomDetail extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        let roomId = this.props.roomId
        this.props.getRoomDetail(roomId)
    }

     render(){
         let roomDetail = this.props.roomDetail
         if(!roomDetail){
             return(<div></div>)
         }
         return(
             <div className="row">
                <div className="col-md-12">
                    <div className="roomhear">
                        <div className="room-icon">
                            <img src={roomDetail.avatar} alt="" className="img-thumbnail" />
                        </div>
                        <div className="room-info">
                            <h2>{roomDetail.room_name}</h2>
                            <ul>
                                <li><span className="glyphicon glyphicon-user"></span><i>{roomDetail.owner_name}</i></li>
                                <li><span className="glyphicon glyphicon-eye-open">></span><i>{roomDetail.online}</i></li>
                                <li><span className="glyphicon glyphicon-heart-empty">></span><i>{roomDetail.owner_weight}</i></li>
                            </ul>
                        </div>
                    </div>              
                    <object data={`https://staticlive.douyucdn.cn/common/share/play.swf?room_id=${roomDetail.room_id}`} type="application/x-shockwave-flash" className="flash_play">
                        <param name="movie" value={`https://staticlive.douyucdn.cn/common/share/play.swf?room_id=${roomDetail.room_id}`}/>
                        <param name="wmode" value="window"/>
                        <param name="allowfullscreen" value="true"/>
                        <param name="allowFullScreenInteractive" value="true"/>
                        <param name="allowscriptaccess" value="always"/>
                    </object> 
                </div>
            </div>
         )
     }
}