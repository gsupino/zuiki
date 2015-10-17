import React, {PropTypes}from 'react';
const mergeAndPrefix = require('../../styles/js/autoprefix');
const classnames = require('classnames');
 
 
 
export default class Container {
    static displayName = 'Container'
 
    static propTypes = {
        className: React.PropTypes.string,
        style: React.PropTypes.object
    }
 
    getStyle() {
        return mergeAndPrefix({}, this.props.style, {});
    }
 
    render() {
        const classes = classnames('container', this.props.className);
        const style = this.getStyle();
 
        return (
            <div className={classes} style={style}>
                {this.props.children}
            </div>
        );
    }
}