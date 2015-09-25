const React = require('react');
const mergeAndPrefix = require('../../styles/autoprefix');
const classnames = require('classnames');

const baseClasses = {
    'material-icons': true
};

class Icon extends React.Component {
    static displayName = 'Icon'

    static propTypes = {
        className: React.PropTypes.string,
        style: React.PropTypes.object,
        name: React.PropTypes.string
    }

    getStyle() {
        return mergeAndPrefix({}, this.props.style, {});
    }

    render() {
        const {
            name,
            className,
            ...other
            } = this.props;
        const classes = classnames(baseClasses, className);
        const style = this.getStyle();

        return <i className={classes} style={style} {...other}>{name}</i>;
    }
}

module.exports = Icon;