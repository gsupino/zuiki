const React = require('react');
const mergeAndPrefix = require('../../styles/autoprefix');
const classnames = require('classnames');

export default class Grid extends React.Component {
    displayName = 'Grid'

    static propTypes = {
        noSpacing: React.PropTypes.bool,
        className: React.PropTypes.string,
        style: React.PropTypes.object
    }

    static defaultProps = {
        noSpacing: false
    }

    getStyle() {
        return mergeAndPrefix({}, this.props.style, {});
    }

    render() {
        var { className,noSpacing } = this.props;
        var classes = classnames('grid', {
            ['grid--no-spacing']: noSpacing
        }, className);
        const style = this.getStyle();

        return (
            <div className={classes} style={style}>
                {this.props.children}
            </div>
        );
    }
}

class Cell extends React.Component {
    displayName = 'Cell'

    static propTypes = {
        col: React.PropTypes.number,
        colDesktop: React.PropTypes.number,
        colTablet: React.PropTypes.number,
        colPhone: React.PropTypes.number,
        isHideDesktop: React.PropTypes.bool,
        isHideTablet: React.PropTypes.bool,
        isHidePhone: React.PropTypes.bool,
        isStretch: React.PropTypes.bool,
        align: React.PropTypes.oneOf(['top', 'middle', 'bottom', 'stretch']),
        style: React.PropTypes.object,

    }

    static defaultProps = {
        col: 0,
        colDesktop: 0,
        colTablet: 0,
        colPhone: 0,
    }

    getStyle() {
        return mergeAndPrefix({}, this.props.style, {});
    }

    render() {
        const classes = {
            'cell': true
        };
        if (this.props.col != 0) {
            classes['cell--' + this.props.col + '-col'] = true;
        }
        if (this.props.colDesktop != 0) {
            classes['cell--' + this.props.colDesktop + '-col-desktop'] = true;
        }
        if (this.props.colTablet != 0) {
            classes['cell--' + this.props.colTablet + '-col-tablet'] = true;
        }
        if (this.props.colPhone != 0) {
            classes['cell--' + this.props.colPhone + '-col-phone'] = true;
        }
        if (this.props.isHideDesktop) {
            classes['cell--hide-desktop'] = true;
        }
        if (this.props.isHideTablet) {
            classes['cell--hide-tablet'] = true;
        }
        if (this.props.isHidePhone) {
            classes['cell--hide-phone'] = true;
        }
        if (this.props.isStretch) {
            classes['cell--stretch'] = true;
        }
        if (typeof this.props.align !== 'undefined') {
            classes[`cell--${this.props.align}`] = true;
        }
        var newClasses = classnames(classes, this.props.className);

        const style = this.getStyle();

        return (
            <div className={newClasses} style={style}>
                {this.props.children}
            </div>
        );
    }
}

export default Grid;
export { Cell };