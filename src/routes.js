/**
 * @desc 项目路由配置
 * @author Jafeney
 * @dateTime 2016-08-06
 **/

import React from 'react'
import { Route } from 'react-router'

import Auth from './containers/Auth'
import Manage from './containers/Manage/'
import Upload from './containers/Upload/'

const routes = (
    <Route>
        <Route path="auth" component={Auth} />                      // 授权
        <Route path="manage" component={Manage} />                  // 管理
        <Route path="upload" component={Upload} />                  // 上传
    </Route>
)

export default routes
