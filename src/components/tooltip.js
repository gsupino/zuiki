const React = require('react');
const classnames = require('classnames');

const baseClasses = {
    'mdl-tooltip': true
};

class Tooltip extends React.Component {

    static propTypes = {
        className: React.PropTypes.string,
        htmlFor: React.PropTypes.string.isRequired,
        large: React.PropTypes.bool
    }

    componentDidMount() {
        const node = React.findDOMNode(this);
        window.componentHandler.upgradeElement(node, 'MaterialTooltip');
    }

    componentWillUnmount() {
        const node = React.findDOMNode(this);
        window.componentHandler.downgradeElements(node);
    }

    render() {
        const {
            children,
            className,
            large
            } = this.props;

        const classes = classnames(baseClasses, {
            'mdl-tooltip--large': large
        }, className);

        return (
            <span {...this.props} className={classes}>
                {children}
            </span>
        );
    }
}

module.exports = Tooltip;