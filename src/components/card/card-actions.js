const React = require('react');
const mergeAndPrefix = require('../../styles/autoprefix');
const classnames = require('classnames');

const baseClasses = {
    'mdl-card__actions': true
};

class CardActions extends React.Component {
    static propTypes = {
        className: React.PropTypes.string,
        border: React.PropTypes.bool,
        style: React.PropTypes.object
    }

    getStyle() {
        return mergeAndPrefix({}, this.props.style, {});
    }

    render() {
        const {
            children,
            border,
            className
            } = this.props;

        const classes = classnames('mdl-card__actions', {
            'mdl-card--border': border
        }, className);
        return (
            <div  className={classes} style={this.getStyle()}>
                {children}
            </div>
        );
    }
}

module.exports = CardActions;