import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './reducers/index'
import NavCon from './containers/NavCon'
import LiveList from './routes/LiveList'
import GameList from './routes/GameList'
import GameLiveList from './routes/GameLiveList'
import RoomDetail from './routes/RoomDetail'

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
    console.log(process.env.NODE_ENV)
    middleware.push(createLogger())
}

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={NavCon}>
                <IndexRoute component={LiveList}></IndexRoute>
                <Route path='game' component={GameList}></Route>
                <Route path='/game/:gameID' component={GameLiveList}></Route>
                <Route path='/room/:roomId' component={RoomDetail}></Route>
                <Route path='vertical' component={LiveList}></Route>
            </Route>
        </Router>
    </Provider>
), document.getElementById('content'))