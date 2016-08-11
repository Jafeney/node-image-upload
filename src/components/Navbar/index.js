/**
 * @desc 导航栏控件
 * @author jafeney
 * @dateTIme 2016-08-11
 **/

import React, { Component } from 'react'
import Icon from '../Icon/'

class NavBar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            leftIcon: props.leftIcon || null,
            name: props.name || null,
            rightIcon: props.rightIcon || null,
        }
    }

    render() {
        return (
            <div className="navbar">
                <Icon wrapClass="left-btn" name={null} />
                <h2>{this.state.name ? this.state.name :
                    <span className="logo">Jafene<strong>y</strong></span>}
                </h2>
                <Icon wrapClass="right-btn" name={null} />
            </div>
        )
    }
}

export default NavBar
