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
        this.props.getAllLive()
    }


    render() {
        let items = this.props.items
        if (!items) {
            return (<div></div>)
        }
        return (
            <div>
                {
                    items.length != 0
                        ?
                        <Content items={items}
                            onChangePage={this.props.onChangePage}
                            pageIndex={this.props.pageIndex}>
                        </Content>
                        :
                        ''
                }

                <div className="clear"></div>
            </div>
        )
    }
}

const Content = (props) => {
    var {items, onChangePage, pageIndex}=props
    let pageSize = 16
    let onChangePageIndex = (index) => {
        onChangePage(index)
    }
    return (
        <div>
            <LiveItems items={items.slice((pageIndex - 1) * pageSize, pageIndex * pageSize)}></LiveItems>
            <Pagination style={{ marginTop: '20px' }}
                defaultCurrent={pageIndex}
                defaultPageSize={pageSize}
                total={items.length}
                onChange={onChangePageIndex}></Pagination>
        </div>
    )
}

const LiveItems = ({items}) => {
    return (
        <div>
            {
                items.map((item, index) => {
                    return (
                        <ListItem item={item} key={index}></ListItem>
                    )
                })
            }
        </div>
    )
}