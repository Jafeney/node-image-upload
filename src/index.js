/**
 * @desc 项目入口
 * @author Jafeney
 * @dateTime 2016-07-25
 **/

import React from 'react'
import { render } from 'react-dom'
// redux
import { Provider } from 'react-redux'
// router
import { Router, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import routes from './routes'
import configureStore from './configureStore'
// moment本地化设置
import moment from 'moment';
moment.locale('zh-cn')

const store = configureStore(hashHistory)

const history = syncHistoryWithStore(hashHistory, store)

render(
    (
        <Provider store={store}>
            <Router history={history} routes={routes} />
        </Provider>
    ), document.getElementById('root')
)
