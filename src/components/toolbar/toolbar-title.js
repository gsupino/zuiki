import React, { Component, PropTypes } from 'react';
import Styles from '../../styles';
const mergeAndPrefix = require('../../styles/autoprefix');
import Block from '../Block';

export default class ToolbarTitle extends Component {
    static displayName = 'ToolbarTitle'

    static propTypes = {
        text: PropTypes.toLocaleString,
        style: PropTypes.object,
    }


    static defaultProps = {
        style: {}
    }


    getStyle() {
        return mergeAndPrefix({
            //color: rgb(66, 66, 66),
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '24px',
            margin: 0,
            display: 'inline-block',
            position: 'relative',
            float:'left',
            padding:'10px'
        }, this.props.style);
    }

    render() {
        let {style, text, ...other} = this.props;

        return (
            <span style={this.getStyle()} {...other}>
                {text}
            </span>
        );
    }

}
