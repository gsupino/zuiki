import React, {PropTypes}from 'react';
const mergeAndPrefix = require('../styles/autoprefix');

export default class View {
    static displayName = 'View'

    static propTypes = {
        width: PropTypes.string,
        height: PropTypes.string
    }

    static defaultProps = {
        width: '100vw',
        height: '100vh'
    }

    getStyle() {
        return mergeAndPrefix({
            height: this.props.height,
            width: this.props.width,
            position: 'relative',
            top: 0,
            left: 0
        }, {});
    }

    render() {
        return (
            <div style={this.getStyle()}>
                {this.props.children}
            </div>
        );
    }
}
