import React, {PropTypes}from 'react';
const mergeAndPrefix = require('../../styles/js/autoprefix');
const classnames = require('classnames');

const baseClasses = {
    'mdl-menu': true,
    'mdl-js-menu': true
};


export default class Menu {
    static displayName = 'Menu'

    static propTypes = {
        align: PropTypes.oneOf(['left', 'right']),
        className: PropTypes.string,
        ripple: PropTypes.bool,
        target: PropTypes.string.isRequired,
        valign: PropTypes.oneOf(['bottom', 'top']),
        style: React.PropTypes.object
    }

    componentDidMount() {
        const node = React.findDOMNode(this);
        window.componentHandler.upgradeElement(node, 'MaterialMenu');
    }

    componentWillUnmount() {
        const node = React.findDOMNode(this);
        window.componentHandler.downgradeElements(node);
    }


    getStyle() {
        return mergeAndPrefix({}, this.props.style, {});
    }

    render() {
        const style = this.getStyle();

        let { align, className, ripple, target, valign, ...otherProps} = this.props;

        align = align || 'left';
        valign = valign || 'bottom';
        // enable ripple by default
        ripple = ripple !== false;

        let classes = classnames(baseClasses, {
            [`mdl-menu--${valign}-${align}`]: true,
            'mdl-js-ripple-effect': ripple
        }, className);

        return (
            <ul className={classes} style={style} htmlFor={target} {...otherProps}>
                {this.props.children}
            </ul>
        );
    }
}
