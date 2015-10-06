import React, { Component, PropTypes } from 'react';
const mergeAndPrefix = require('../styles/autoprefix');
//test github
export default class Avatar extends Component {
    static displayName = 'Avatar'

    static propTypes = {
        backgroundColor: React.PropTypes.string,
        color: React.PropTypes.string,
        icon: React.PropTypes.element,
        size: React.PropTypes.number,
        src: React.PropTypes.string,
        style: React.PropTypes.object
    }

    static defaultProps = {
        backgroundColor: 'grey',
        color: 'white',
        size: 40
    }

    getStyles() {
        let {
            backgroundColor,
            color,
            icon,
            size,
            src,
            style
            } = this.props;

        let styles = {
            root: {
                borderColor: 'rgba(0, 0, 0, 0.08)',
                height: size - 2,
                width: size - 2,
                userSelect: 'none',
                borderRadius: '50%',
                display: 'inline-block',
                border: 'solid 1px rgba(0, 0, 0, 0.08)'

            }
        };
        let mergedStyles = mergeAndPrefix(styles.root, style);
        return mergedStyles;
    }

    render() {
        return <img src={this.props.src} style={this.getStyles()}/>;
    }
}
