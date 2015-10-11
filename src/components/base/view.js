import React, {PropTypes}from 'react';
const mergeAndPrefix = require('../../styles/autoprefix');
const classnames = require('classnames');

const baseClasses = {
    'view': true
};


export default class View {
    static displayName = 'View'

    static propTypes = {
        className: React.PropTypes.string,
        style: React.PropTypes.object
    }

    getStyle() {
        return mergeAndPrefix({}, this.props.style, {});
    }

    render() {
        const classes = classnames(baseClasses, this.props.className);
        const style = this.getStyle();

        return (
            <div className={classes} style={style}>
                {this.props.children}
            </div>
        );
    }
}
