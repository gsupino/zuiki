import React, {PropTypes}from 'react';
const mergeAndPrefix = require('../../styles/js/autoprefix');
const classnames = require('classnames');


export default class Image {
    static displayName = 'Image'

    static propTypes = {
        src: React.PropTypes.string,
        width: React.PropTypes.string,
        height: React.PropTypes.string,
        sizing: React.PropTypes.string,
        className: React.PropTypes.string,
        style:React.PropTypes.object
    }

    static defaultProps = {
        height: 'auto'
    }

    getStyle() {
        let style = {};
        if (this.props.sizing) {
            style = {
                backgroundSize: this.props.sizing,
                //backgroundPosition: 'center center',
                backgroundImage: 'url(' + this.props.src + ')',
                backgroundRepeat: 'no-repeat',
                height: this.props.height,
                width: this.props.width
            }
        }else{
            style={
                height: this.props.height,
                width: this.props.width,
                maxWidth:'100%',
                position: 'relative',
                top: 0,
                left: 0
            }
        }
        return mergeAndPrefix(style, this.props.style);
    }

    render() {
        let imgComponent='';
        if(!this.props.sizing){
            imgComponent= <img src={this.props.src} alt="" style={this.getStyle()}/>;

        }else{
            imgComponent=<div style={this.getStyle()}></div>;
        }
        return (
            imgComponent
        );
    }
}
