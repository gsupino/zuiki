const React = require('react');
const classnames = require('classnames');

const baseClasses = {
    'mdl-card__subtitle-text': true,
};

class CardSubTitle  extends React.Component {


    render() {
        const {
            children,
            className
            } = this.props;

        const classes = classnames('mdl-card__subtitle-text', {
        }, className);

        return (
            <div  className={classes}>
                {children}
            </div>
        );
    }
}

CardSubTitle .propTypes = {
    className: React.PropTypes.string,
};

module.exports = CardSubTitle ;