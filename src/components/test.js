import React, {PropTypes}from 'react';
const mergeAndPrefix = require('../styles/autoprefix');

export default class Test {
    static displayName = 'Test'

    static propTypes = {
    }

    static defaultProps = {
    }

    getStyle() {
        return mergeAndPrefix({
            paddind:200
        }, this.props.style);
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <p>test</p>
            </div>
        );
    }
}
