import React, { Component, PropTypes } from 'react';
const mergeAndPrefix = require('../../styles/js/autoprefix');
const classnames = require('classnames');
import Grid from '../base/grid';

export default class Toolbar extends Component {
    static displayName = 'Toolbar'

    static propTypes = {
        height:PropTypes.string,
        className: React.PropTypes.string,
        style: PropTypes.object,
        zDepth: PropTypes.number
    }

    static defaultProps = {
        height:'100px'
    }

    getStyle() {
        let newStyle=this.props.style||{};
        newStyle.height=this.props.height;
        return mergeAndPrefix({}, newStyle);
    }

    render() {
        let {zDepth}=this.props;
        const classes = classnames('toolbar',
            {[`shadow--${this.props.zDepth}dp`]: this.props.zDepth},
            this.props.className);
        const style = this.getStyle();

        return (
            <Grid className={classes} style={style} noSpacing='true'>
                {this.props.children}
            </Grid>

        )
    }

}
