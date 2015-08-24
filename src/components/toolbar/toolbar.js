import React, { Component, PropTypes } from 'react';
import Styles from '../../styles';
const mergeAndPrefix = require('../../styles/autoprefix');

export default class Toolbar extends Component {
    static displayName = 'Toolbar'

    static propTypes = {
        style: React.PropTypes.object,
        zDepth: React.PropTypes.number
    }


    static defaultProps = {
        style: {}
    }

    state = {hovered: false};

    getStyle() {
        let shadow = 0;
        if (this.props.zDepth) {
            shadow = Styles.Paper.getZDepthShadows(this.props.zDepth);
        }
        return mergeAndPrefix({
            boxSizing: 'border-box',
            WebkitTapHighlightColor: 'rgba(0,0,0,0)',
            backgroundColor: Styles.Colors.yellow400,
            height: 100,
            width: '100%',
            boxShadow: shadow
            //padding: this.props.noGutter ? 0 : '0px ' + this.context.muiTheme.spacing.desktopGutter + 'px',
        }, this.props.style);
    }

    render() {
        return (
            <div style={this.getStyle()}>
                {this.props.children}
            </div>
        )
    }

}
