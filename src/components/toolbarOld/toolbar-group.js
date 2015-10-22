import React, { Component, PropTypes } from 'react';
import Styles from '../../styles';
const mergeAndPrefix = require('../../styles/js/autoprefix');
import Block from '../Block';

export default class ToolbarGroup extends Component {
    static displayName = 'ToolbarGroup'

    static propTypes = {
        style: PropTypes.object,
        width: PropTypes.string
    }

    getStyle() {
        let styles = {
            root: {
                boxSizing: 'border-box',
                position: 'relative',
                flex: this.props.width ? '' : '0 1 auto'
            },
            rootWithImage: {
                boxSizing: 'border-box',
                height: '100%',
                position: 'relative',
                flex: this.props.width ? '' : '0 1 auto'
            },
            image: {},
            link: {
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '24px',
                margin: 0,
                display: 'inline-block',
                position: 'relative',
                float: 'left',
                padding: '10px'
            }
        };
        return styles;
    }

    getStyle1() {
        //verifico se e' presente un Image nel qual caso imposto la height al 100%
        let checkImage = false;
        let newChildren;
        React.Children.map(this.props.children, (currentChild)=> {
            if (!currentChild) {
                return null;
            }
            if (currentChild.type.displayName === 'Image') {
                return checkImage = true;
            } else if (currentChild.type.displayName === 'Link') {


            }
        }, this);
        return mergeAndPrefix({
            boxSizing: 'border-box',
            height: checkImage ? '100%' : '',
            position: 'relative',
            flex: this.props.width ? '' : '0 1 auto'
        }, this.props.style);
    }

    render() {
        let styles = this.getStyle();
        //verifico se e' presente un Image nel qual caso imposto la height al 100%
        let checkImage = false;
        let newChildren = React.Children.map(this.props.children, (currentChild)=> {
            if (!currentChild) {
                return null;
            }
            switch (currentChild.type.displayName) {
                case 'Image':
                    checkImage = true;
                    return currentChild;
                case 'Link':
                    return React.cloneElement(currentChild, {
                        style: mergeAndPrefix(styles.link, currentChild.props.style)
                    });
                default:
                    return currentChild;
            }
        }, this);
        let rootStyle = checkImage ? styles.rootWithImage : styles.root;
        return (
            <Block width={this.props.width} style={rootStyle}>
                {newChildren}
            </Block>
        )
    }

}
