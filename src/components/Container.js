import React, {PropTypes}from 'react';
import Styles from '../styles';
const mergeAndPrefix = require('../styles/autoprefix');

export default class Container {
    static displayName='Container'

    static propTypes = {
        column: React.PropTypes.bool,//defaults to row layout
        wrap: React.PropTypes.bool,//default is to wrap
        justifyContent: React.PropTypes.string,//flex-start | flex-end | center | space-between | space-around
        alignItems: React.PropTypes.string,//flex-start | flex-end | center | baseline | stretch
        width: React.PropTypes.string,
        height: React.PropTypes.string,
        style: React.PropTypes.object,

    }

    getStyle(){
        let props = this.props;
        return mergeAndPrefix({
            display: 'flex',
            flexDirection : props.column ? 'column' : 'row',
            flexWrap: props.wrap ? props.wrap : 'wrap',
            justifyContent:props.justifyContent ? props.justifyContent : 'flex-start',
            alignItems: props.alignItems ? props.alignItems : 'stretch',
            width : props.width,
            height : props.height,
            boxSizing: 'border-box',
            backgroundColor:Styles.Colors.cyan300,
            //margin:0,
            //padding:0
        },props.style);
    }

    render() {

        return (
            <div style={this.getStyle()}>
                {this.props.children}
            </div>
        );
    }
}
