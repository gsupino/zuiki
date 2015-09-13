import React, { Component, PropTypes } from 'react';
import Styles from '../../styles';
const mergeAndPrefix = require('../../styles/autoprefix');
import Container from '../Container';

export default class Toolbar extends Component {
    static displayName = 'Toolbar'

    static propTypes = {
        height:PropTypes.string,
        style: PropTypes.object,
        zDepth: PropTypes.number
    }


    static defaultProps = {
        style: {},
        height:'100px'
    }


    getStyle() {
        return mergeAndPrefix({
            boxSizing: 'border-box',
            WebkitTapHighlightColor: 'rgba(0,0,0,0)',
            backgroundColor: Styles.Colors.yellow400,
            height: 100,
            width: '100%',
            position:'fixed',
            top:0,
            left:0
            //padding: this.props.noGutter ? 0 : '0px ' + this.context.muiTheme.spacing.desktopGutter + 'px',
        }, this.props.style);
    }

    render() {
        let {height,zDepth}=this.props;
        return (
            <Container alignItems='center' height={height} zDepth={zDepth} style={this.getStyle()}>
                {this.props.children}
            </Container>
        )
    }

}
