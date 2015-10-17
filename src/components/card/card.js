const React = require('react');
const mergeAndPrefix = require('../../styles/js/autoprefix');
const classnames = require('classnames');

const baseClasses = {
    'mdl-card': true
};

class Card extends React.Component {
    static propTypes = {
        className: React.PropTypes.string,
        zDepth: React.PropTypes.number,
        style: React.PropTypes.object
    }

    getStyle() {
        return mergeAndPrefix({}, this.props.style, {});
    }

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
            <div {...this.props} className={classes} style={this.getStyle()}>
                {children}
            </div>
        );
    }
}

module.exports = Card;