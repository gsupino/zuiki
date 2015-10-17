import React, { Component, PropTypes } from 'react';
const mergeAndPrefix = require('../../styles/js/autoprefix');
const classnames = require('classnames');

const baseClasses = {
    'avatar': true
};

export default class Avatar extends Component {
    static displayName = 'Avatar'

    static propTypes = {
        size: React.PropTypes.number,
        src: React.PropTypes.string,
        className: React.PropTypes.string,
        style: React.PropTypes.object
    }

    getStyle() {
        let newStyle = {};
        if (this.props.size) {
            newStyle = {
                width: this.props.size - 2,
                height: this.props.size - 2,
            }
        }
        return mergeAndPrefix({}, this.props.style, newStyle);
    }


    render() {
        const classes = classnames(baseClasses, this.props.className);
        const style = this.getStyle();

        return <img className={classes}src={this.props.src} style={style}/>;
    }
}
