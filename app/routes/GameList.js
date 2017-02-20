import React from 'react'
import {render} from 'react-dom'
import GameListCon from '../containers/GameListCon'


export default class LiveList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <GameListCon></GameListCon>
            </div>
        )
    }
}