import React from 'react'
import {render} from 'react-dom'
import GameLiveListCon from '../containers/GameLiveListCon'

export default class GameLiveList extends React.Component{
    constructor(props){
        super(props)
    }
       
    render(){
        
        return(
            <div>
                <GameLiveListCon gameId={this.props.params.gameID}></GameLiveListCon>
            </div>
        )
    }
}