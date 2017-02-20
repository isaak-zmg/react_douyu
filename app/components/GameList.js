import React from 'react'
import { render } from "react-dom"
import { Link } from "react-router"

export default class GameList extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.getAllGame()
    }

    render(){
        let items = this.props.items
        if(!items){
            return(<div></div>)
        }
        return(
            <div>
                {
                    items.map((item,index)=>{
                        return <List item={item} key={index}></List>
                    })
                }
            </div>
        )
    }
}
const List=({item})=>{
    return(
        <Link to={`/game/${item.cate_id}`}>
            <div className="col-md-1">
                <div className="thumbnail">
                    <img src={item.game_src} />
                    <p>{item.game_name}</p>
                </div>
            </div>
        </Link>
    )
}