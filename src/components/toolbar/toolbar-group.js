import React, { Component, PropTypes } from 'react';
const mergeAndPrefix = require('../../styles/js/autoprefix');
const classnames = require('classnames');
import Grid from '../base/grid';

export default class ToolbarGroup extends Component {
    static displayName = 'ToolbarGroup'

    static propTypes = {
        height:PropTypes.string,
        className: React.PropTypes.string,
        style: PropTypes.object
    }

    static defaultProps = {
        height:'100px'
    }

    getStyle() {
        let newStyle=this.props.style||{};
        newStyle.height=this.props.height;
        return mergeAndPrefix({}, newStyle);
    }

    render() {
        const classes = classnames('toolbar--group', this.props.className);
        const style = this.getStyle();

        return (
            <div className={classes} style={style}>
                {this.props.children}
            </div>

        )
    }

}
