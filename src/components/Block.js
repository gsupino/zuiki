import React, {PropTypes}from 'react';
import Styles from '../styles';
const mergeAndPrefix = require('../styles/autoprefix');

export default class Block {
    static displayName = 'Block'

    static propTypes = {
        order: React.PropTypes.number,
        flex: React.PropTypes.string,//none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
        basis: React.PropTypes.number,//auto | flex-start | flex-end | center | baseline | stretch
        wrap: React.PropTypes.bool,//default is to wrap
        width: React.PropTypes.number,
        height: React.PropTypes.number,
        style: React.PropTypes.object,
        zDepth:React.PropTypes.number
    }

    getStyle(){
        let {order,flex,basis,wrap,width,height} = this.props;
        let shadow=0;
        if (this.props.zDepth){
            shadow=Styles.Paper.getZDepthShadows(this.props.zDepth);
        }

        //verifico se è presente un width ed lo fisso come prioritatio
        let styles={};
        if (width) {
            styles.flex = '0 1 auto'
        }

        return mergeAndPrefix({
            order,
            flex: flex ? flex : 0,
            basis,
            height,
            boxSizing:'border-box',
            flexWrap: wrap ? wrap : 'wrap',
            backgroundColor:Styles.Colors.cyan500,
            margin:0,
            padding:0,
            position:'relative',
            boxShadow:shadow
        },this.props.style,styles);
    }


    render() {
        return (
            <div style={this.getStyle()}>
                {this.props.children}
            </div>
        );
    }
}
