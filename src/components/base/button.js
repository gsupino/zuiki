const React = require('react');
const mergeAndPrefix = require('../../styles/autoprefix');
const classnames = require('classnames');
import Icon from './icon';

const baseClasses = {
    'mdl-button': true,
    'mdl-js-button': true
};

class Button extends React.Component {

    static propTypes = {
        className: React.PropTypes.string,
        style: React.PropTypes.object,
        raised: React.PropTypes.bool,
        fab: React.PropTypes.bool,
        colored: React.PropTypes.bool,
        ripple: React.PropTypes.bool,
        primary: React.PropTypes.bool,
        accent: React.PropTypes.bool,
        icon: React.PropTypes.bool,
        iconName: React.PropTypes.string,
        mini: React.PropTypes.bool,
        onClick: React.PropTypes.func
    }

    componentDidMount() {
        const { ripple } = this.props;
        const node = React.findDOMNode(this);
        window.componentHandler.upgradeElement(node, 'MaterialButton');
        if (ripple) {
            window.componentHandler.upgradeElement(node, 'MaterialRipple');
        }
    }

    componentWillUnmount() {
        const node = React.findDOMNode(this);
        window.componentHandler.downgradeElements(node);
    }

    getStyle() {
        return mergeAndPrefix({}, this.props.style, {});
    }

    handlerClick = (e)=> {
        e.preventDefault();
        if (this.props.onClick) {
            this.props.onClick(e);
        }
    }

    render() {
        const {
            children,
            className,
            fab,
            colored,
            ripple,
            raised,
            primary,
            accent,
            icon,
            iconName,
            mini
            } = this.props;

        const classes = classnames(baseClasses, {
            'mdl-button--fab': fab,
            'mdl-button--colored': colored,
            'mdl-js-ripple-effect': ripple,
            'mdl-button--raised': raised,
            'mdl-button--primary': primary,
            'mdl-button--accent': accent,
            'mdl-button--icon': icon,
            'mdl-button--mini-fab': fab && mini
        }, className);
        const style = this.getStyle();
        let newChildren=children;
        if (icon || iconName) {
            newChildren = <Icon name={iconName}></Icon>;
        }
        return (
            <button {...this.props} className={classes} onClick={::this.handlerClick}>
                {newChildren}
            </button>
        );
    }
}

module.exports = Button;