import React, {PropTypes}from 'react';
const mergeAndPrefix = require('../../styles/js/autoprefix');
const classnames = require('classnames');

const baseClasses = {
    'mdl-menu__item': true
};


export default class MenuItem {
    static displayName = 'MenuItem'

    static propTypes = {
        className: React.PropTypes.string,
        style: React.PropTypes.object,
        key :React.PropTypes.number
    }

    getStyle() {
        return mergeAndPrefix({}, this.props.style, {});
    }

    render() {
        const classes = classnames(baseClasses, this.props.className);
        const style = this.getStyle();

        return (
            <li key={this.props.key} className={classes} style={style}>
                {this.props.children}
            </li>
        );
    }
}
