import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/*
SIZE PROPS
display-4
display-4-color-contrast
display-3
display-3-color-contrast
display-2
display-2-color-contrast
display-1
display-1-color-contrast
headline
headline-color-contrast
title
title-color-contrast
subhead
subhead-color-contrast
body-2
body-2-color-contrast
body-1
body-1-color-contrast
caption
caption-color-contrast
menu
menu-color-contrast
button
button-color-contrast

ALIGN
left
right
center
justify

nowrap

TRANSFORM
lowercase
uppercase
capitalize
 */


export default class Text extends Component {
    static displayName = 'Text'

    static propTypes = {
        size: PropTypes.string,
        align: PropTypes.toLocaleString,
        nowrap: PropTypes.bool,
        transform: PropTypes.string
    }

    render() {
        let classes = classNames({
            [`${this.props.size}`]: this.props.size,
            [`${this.props.align}`]: this.props.align,
            nowrap: this.props.nowrap,
            [`${this.props.transform}`]: this.props.transform
        });
        return (
            <p className={classes}>
                {this.props.children}
            </p>
        )
    }

}
