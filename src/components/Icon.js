import React, { Component, PropTypes } from 'react';
import Styles from '../styles';
const mergeAndPrefix = require('../styles/autoprefix');

export default class Icon extends Component {
    static displayName = 'Icon'

    static propTypes = {
        color: React.PropTypes.string,
        hoverColor: React.PropTypes.string
    }


    static defaultProps = {
        hoverColor: Styles.Colors.pink400
    }

    state = {hovered: false};

    getStyles() {
        let {
            color,
            hoverColor,
            style
            } = this.props;
        let spacing = 24;
        let offColor = color ? color :
            style && style.color ? style.color :
                Styles.Colors.darkBlack;
        let onColor = hoverColor ? hoverColor : offColor;

        let mergedStyles = mergeAndPrefix({
            position: 'relative',
            fontSize: spacing,
            display: 'inline-block',
            userSelect: 'none'
        }, style, {
            color: this.state.hovered ? onColor : offColor
        });

        return mergedStyles;
    }

    render() {
        let {
            color,
            hoverColor,
            style,
            ...other,
            } = this.props;
        let styles = this.getStyles();
        return (
            <span
                {...other}
                onMouseLeave={this._handleMouseLeave}
                onMouseEnter={this._handleMouseEnter}
                style={styles}/>
        );
    }

    _handleMouseLeave = ()=> {
        // hover is needed only when a hoverColor is defined
        if (this.props.hoverColor !== undefined)
            this.setState({hovered: false});
    }

    _handleMouseEnter = ()=> {
        // hover is needed only when a hoverColor is defined
        if (this.props.hoverColor !== undefined)
            this.setState({hovered: true});
    }
}
