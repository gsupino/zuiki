const React = require('react');
const classnames = require('classnames');

const baseClasses = {
    'mdl-card__actions': true
};

class CardActions extends React.Component {


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
            <div  className={classes}>
                {children}
            </div>
        );
    }
}

CardActions.propTypes = {
    className: React.PropTypes.string,
    border: React.PropTypes.bool
};

module.exports = CardActions;