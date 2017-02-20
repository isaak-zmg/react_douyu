import React from 'react'
import {render} from 'react-dom'
import RoomDetailCon from '../containers/RoomDetailCon'

export default class RoomDetail extends React.Component{
    constructor(props){
        super(props)
    }
       
    render(){
        
        return(
            <div>
                <RoomDetailCon roomId={this.props.params.roomId}></RoomDetailCon>
            </div>
        )
    }
}