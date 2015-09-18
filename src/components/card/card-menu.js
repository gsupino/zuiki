const React = require('react');
const classnames = require('classnames');

const baseClasses = {
    'mdl-card__menu': true,
};

class CarSubTitle  extends React.Component {


    render() {
        const {
            children,
            className
            } = this.props;

        const classes = classnames('mdl-card__menu', {
        }, className);

        return (
            <div  className={classes}>
                {children}
            </div>
        );
    }
}

CarSubTitle .propTypes = {
    className: React.PropTypes.string,
};

module.exports = CarSubTitle ;