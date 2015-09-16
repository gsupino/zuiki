import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import Styles from '../styles';
const mergeAndPrefix = require('../styles/autoprefix');

@Radium
export default class Icon extends Component {
    static displayName = 'Icon'

    static propTypes = {
        color: React.PropTypes.string,
        hoverColor: React.PropTypes.string
    }


    static defaultProps = {
        hoverColor: Styles.Colors.pink400
    }





    getStyles() {
        let {
            color,
            hoverColor,
            } = this.props;
        return mergeAndPrefix({
            base:{
                position: 'relative',
                fontSize: 24,
                display: 'inline-block',
                userSelect: 'none',
                padding:10,
                color:color,
                ':hover':{
                    color:hoverColor
                }
            }
        });
    }

    render() {
        let {style,...other} = this.props;
        let styles = this.getStyles();
        return (
            <span
                {...other}
                className="material-icons"
                style={[styles.base, style]}/>
        );
    }


}
