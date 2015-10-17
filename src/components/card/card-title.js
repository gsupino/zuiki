const React = require('react');
const mergeAndPrefix = require('../../styles/js/autoprefix');
const classnames = require('classnames');

const baseClasses = {
    'mdl-card__title': true,
    'mdl-card__text': true
};

class CardTitle extends React.Component {
    static propTypes = {
        className: React.PropTypes.string,
        headType: React.PropTypes.string,
        border: React.PropTypes.bool
    }

    getStyle() {
        return mergeAndPrefix({}, this.props.style, {});
    }

    render() {
        const {
            children,
            headType,
            border,
            className
            } = this.props;

        const classes = classnames('mdl-card__title', {
            'mdl-card--border': border
        }, className);

        let newChildren = React.DOM[`${headType}`]({className: 'mdl-card__title-text'}, children);
        return (
            <div className={classes} style={this.getStyle()}>
                {newChildren}
            </div>
        );
    }
}

module.exports = CardTitle;