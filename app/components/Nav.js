import React from 'react'
import { render } from "react-dom"
import { Link } from "react-router"

export default class Nav extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.getAllGame()      
    }
    
    onSearch(e){
        let searchInfo = this.refs.searchInput.value
        this.props.getSearchInfo(searchInfo)
    }
    
    onVertical(){
        this.props.onVertical()
    }

    render() {
        let items = this.props.items
        
        if (!items) {
            return (<div></div>)
        }

        return (
            <div className="container-fuild">
                <div className="row">
                    <div className="col-md-2">
                        <ul className="well nav nav-pills nav-stacked">
                            <div className="input-group search_group">
                                <input type="text" className="form-control" ref='searchInput' placeholder="search for..." />
                                <span className="input-group-btn">
                                    <button className="btn btn-default" onClick={(e)=>{this.onSearch(e)}}><i className="glyphicon glyphicon-search"></i></button>
                                </span>
                            </div>
                            <li>
                                <Link to="/" activeClassName="active">全部直播</Link>
                                <div>
                                    <Link to='/vertical' className="btn btn-danger" style={{marginTop: '10px',marginLeft:'10px'}} onClick={()=>{this.onVertical()}}>颜值</Link>
                                </div>
                            </li>
                            <li>
                                <Link to="/game" activeClassName="active">全部分类</Link>
                            </li>
                            <li>
                                {
                                    items.map((item, index) => {
                                        return <GameNav item={item} key={index}></GameNav>
                                    })
                                }
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-10">
                        <div className="well">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const GameNav = ({item}) => {
    return (
        <div className="col-xs-4 gameNavItem">
            <Link to={`/game/${item.cate_id}`}>{item.game_name}</Link>
        </div>
    )
}
