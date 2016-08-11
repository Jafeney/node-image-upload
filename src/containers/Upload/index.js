/**
 * @desc 上传页面
 * @author jafeney
 * @dateTIme 2016-08-11
 **/

import React, { Component } from 'react'
import NavBar from '../../components/NavBar/'
import Upload from '../../components/Upload/'
import '../style.less'

class pUpload extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <NavBar leftIcon={'angle-left'} rightIcon={'cloud-upload'} />
                <div><Upload /></div>
            </div>
        )
    }
}

export default pUpload
