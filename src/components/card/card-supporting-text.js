const React = require('react');
const classnames = require('classnames');

const baseClasses = {
    'mdl-card__supporting-text': true,
};

class CardSupportingText  extends React.Component {


    render() {
        const {
            children,
            className
            } = this.props;

        const classes = classnames('mdl-card__supporting-text', {
        }, className);

        return (
            <div  className={classes}>
                {children}
            </div>
        );
    }
}

CardSupportingText .propTypes = {
    className: React.PropTypes.string,
};

module.exports = CardSupportingText ;