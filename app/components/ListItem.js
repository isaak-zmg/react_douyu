import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'

export default class ListItem extends React.Component {
    
    render() {
        return (
            <div>
                <Link to={`/room/${this.props.item.room_id}`}>
                    <div className="col-md-3">
                        <div className="thumbnail roomlist">
                            <img src={this.props.item.room_src} alt="" />
                            <div className="caption">
                                <span className="room_name">{this.props.item.room_name}</span>
                                <span className="pull-right nick_name">{this.props.item.nickname}</span>
                            </div>
                            <div className="caption">
                                <span className="game_name">{this.props.item.game_name}</span>
                                <span className="pull-right online">{this.props.item.online}</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}