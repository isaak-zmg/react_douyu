import React from 'react'
import { render } from "react-dom"
import { Link } from "react-router"
import { Pagination } from 'antd'
import ListItem from "./ListItem"

export default class LiveList extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        let gameId = this.props.gameId
        let index = this.props.index
        this.props.getGameLiveList(index, gameId)
    }
    componentDidUpdate(prevProps) {
        if (prevProps.gameId !== this.props.gameId) {
            this.props.getGameLiveList(this.props.index, this.props.gameId)
        }
    }
    render() {
        let items = this.props.items
        let pageSise = 32
        let allLivePageIndex = this.props.index
        let gameId = this.props.gameId
        let changePageIndex = (index) => {
            this.props.changePage(index)
        }

        if (!items) {
            return (<div></div>)
        }
        return (
            <div>
                {
                    items.map((item, index) => {
                        return <ListItem item={item} key={index}></ListItem>
                    })
                }
                {
                    items.length == 32  
                    ? 
                    <Pagination style={{ margin: '20px 0', }}
                    defaultCurrent={allLivePageIndex}
                    defaultPageSize={pageSise}
                    total={200}
                    onChange={changePageIndex} ></Pagination>
                    :
                    ''
                }
                <div className="clear"></div>
            </div>
        )
    }
}
