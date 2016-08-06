/**
 * @desc 优化渲染速度
 * @author Jafeney
 * @dateTime 2016-07-25
 **/

import React, { Component } from 'react'
import Immutable from 'immutable'

export default {
    deepCompare: (self, nextProps, nextState) => {
        return !Immutable.is(self.props, nextProps)
            || !Immutable.is(self.state, nextState)
    },
    loadDerection: (reducers=[]) => {
        for (let r of reducers) {
            if (!r.get('preload')) return (<div />)
        }
    }
}
