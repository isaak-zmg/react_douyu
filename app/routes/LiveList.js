import React from 'react'
import {render} from 'react-dom'
import LiveListCon from '../containers/LiveListCon'


export default class LiveList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
    
        return(
            <div>
                <LiveListCon pageIndex={1}></LiveListCon>
            </div>
        )
    }
}