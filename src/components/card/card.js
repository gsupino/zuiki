const React = require('react');
const classnames = require('classnames');

const baseClasses = {
    'mdl-card': true
};

class Card extends React.Component {


    render(){
        const {
            children,
            className,
            zDepth
            } = this.props;

        const classes = classnames(baseClasses, {
            [`mdl-shadow--${this.props.zDepth}dp`]: this.props.zDepth
        }, className);

        return (
            <div {...this.props} className={classes}>
                {children}
            </div>
        );
    }
}

Card.propTypes = {
    className: React.PropTypes.string,
    zDepth: React.PropTypes.number,
};

module.exports = Card;