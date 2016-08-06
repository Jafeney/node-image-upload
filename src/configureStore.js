/**
 * @desc store配置
 * @author Jafeney
 * @dateTime 2016-07-25
 **/

import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import * as reducers from './reducers/'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { pendingTasksReducer } from 'react-redux-spinner'

export default function configureStore(history, initialState) {

    const reducer = combineReducers({
        ...reducers,
        routing: routerReducer,
        pendingTasks: pendingTasksReducer,
    })

    const loggerMiddleware = createLogger()

    const store = createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware,  // 日志中间件
                routerMiddleware(history)
            )
        )
    )

    return store
}
