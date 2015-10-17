const React = require('react');
const mergeAndPrefix = require('../../styles/js/autoprefix');
const classnames = require('classnames');

const baseClasses = {
    'mdl-card__media': true
};

class CardMedia extends React.Component {

    static propTypes = {
        className: React.PropTypes.string,
        width: React.PropTypes.string
    }

    static defaultProps = {
        width: '100%'
    }

    getStyle() {
        return mergeAndPrefix({}, this.props.style, {});
    }

    render() {
        const {
            children,
            width,
            className
            } = this.props;

        const classes = classnames('mdl-card__media', {}, className);

        let newChildren = React.Children.map(this.props.children, (currentChildren)=> {
            if (!currentChildren) {
                return null;
            }
            return React.cloneElement(currentChildren, {style: {width: width}})
        }, this)

        return (
            <div className={classes} style={this.getStyle()}>
                {newChildren}
            </div>
        );
    }
}

module.exports = CardMedia;