const React = require('react');
const mergeAndPrefix = require('../../styles/autoprefix');
const classnames = require('classnames');

const baseClasses = {
    'mdl-card__supporting-text': true,
};

class CardSupportingText extends React.Component {
    static propTypes = {
        className: React.PropTypes.string,
    }

    getStyle() {
        return mergeAndPrefix({}, this.props.style, {});
    }

    render() {
        const {
            children,
            className
            } = this.props;

        const classes = classnames('mdl-card__supporting-text', {}, className);

        return (
            <div className={classes} style={this.getStyle()}>
                {children}
            </div>
        );
    }
}

module.exports = CardSupportingText;