const React = require('react');
const mergeAndPrefix = require('../../styles/autoprefix');
const classnames = require('classnames');

const baseClasses = {
    'mdl-badge': true
};

class Badge extends React.Component {
    static displayName = 'Badge'

    static propTypes = {
        children: React.PropTypes.oneOfType([
            React.PropTypes.element,
            React.PropTypes.string
        ]).isRequired,
        text: React.PropTypes.string.isRequired
    }

    getStyle() {
        return mergeAndPrefix({}, this.props.style, {});
    }

    render() {
        const {
            text,
            className,
            children,
            ...other
            } = this.props;
        let element;
        const classes = classnames(baseClasses, className);
        const style = this.getStyle();

        if (typeof children === 'string') {
            element = <span>{children}</span>;
        }
        else {
            element = React.Children.only(this.props.children);
        }

        return React.cloneElement(element, {
            className: classes,
            'data-badge': this.props.text
        });
    }
}

module.exports = Badge;