import React, {PropTypes}from 'react';
import Styles from '../styles';
const mergeAndPrefix = require('../styles/js/autoprefix');
import classNames from 'classnames';

/*
flex-grow default 0 (no grow)
flex-shrink default 1 (no shrink)
flex-basis default
 */

export default class Block {
    static displayName = 'Block'

    static propTypes = {
        order: React.PropTypes.number,
        flex: React.PropTypes.string,//none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
        basis: React.PropTypes.number,//auto | flex-start | flex-end | center | baseline | stretch
        wrap: React.PropTypes.bool,//default is to wrap
        width: React.PropTypes.string,
        height: React.PropTypes.string,
        style: React.PropTypes.object,
        zDepth:React.PropTypes.number
    }

    getStyle(){
        let {order,flex,basis,wrap,width,height} = this.props;

        //verifico se è presente un width ed lo fisso come prioritatio
        let styles={};
        if (width) {
            styles.flex = `0 1 ${width}`
        }
        return mergeAndPrefix({
            order,
            flex: flex ? flex : 0,
            basis,
            height,
            boxSizing:'border-box',
            flexWrap: wrap ? wrap : 'wrap',
            margin:0,
            padding:0,
            position:'relative'
        },this.props.style,styles);
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
