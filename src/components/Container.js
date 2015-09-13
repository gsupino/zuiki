import React, {PropTypes}from 'react';
const mergeAndPrefix = require('../styles/autoprefix');
import classNames from 'classnames';

export default class Container {
    static displayName = 'Container'

    static propTypes = {
        column: React.PropTypes.bool,//defaults to row layout
        wrap: React.PropTypes.bool,//default is to wrap
        justifyContent: React.PropTypes.string,//flex-start | flex-end | center | space-between | space-around
        alignItems: React.PropTypes.string,//flex-start | flex-end | center | baseline | stretch
        width: React.PropTypes.string,
        height: React.PropTypes.string,
        style: React.PropTypes.object,
        zDepth: React.PropTypes.number

    }

    getStyle() {
        let props = this.props;
        return mergeAndPrefix({
            display: 'flex',
            flexDirection: props.column ? 'column' : 'row',
            flexWrap: props.wrap ? props.wrap : 'wrap',
            justifyContent: props.justifyContent ? props.justifyContent : 'flex-start',
            alignItems: props.alignItems ? props.alignItems : 'stretch',
            width: props.width,
            height: props.height,
            boxSizing: 'border-box',
            position: 'relative',
            margin: 0,
            padding: 0,
        }, props.style);
    }

    render() {
        let classes = classNames({
            [`shadow--${this.props.zDepth}dp`]: this.props.zDepth
        });
        return (
            <div className={classes} style={this.getStyle()}>
                {this.props.children}
            </div>
        );
    }
}
