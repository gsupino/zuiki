import React, { Component, PropTypes } from 'react';
import Styles from '../../styles';
const mergeAndPrefix = require('../../styles/js/autoprefix');
import Block from '../Block';

export default class ToolbarSpace extends Component {
    static displayName = 'ToolbarSpace'

    getStyle() {
        return mergeAndPrefix({
            flex:'1 0 auto',
            height:'100%'
        });
    }

    render() {
        return (
            <Block style={this.getStyle()}> </Block>
        );
    }

}
