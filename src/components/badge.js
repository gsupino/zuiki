import React, {PropTypes}from 'react';
const mergeAndPrefix = require('../styles/autoprefix');
import classNames from 'classnames';


export default class Badge {
    static displayName = 'Badge'

    static propTypes = {
        style: React.PropTypes.object,
        notification: React.any,
        isIcon: PropTypes.bool
    }

    getStyle() {

        return mergeAndPrefix({}, this.props.style, {});
    }


    render() {
        let classes = classNames({
            'material-icons': this.props.isIcon,
            'badge':true
        });

        return (
            <span className={classes} data-badge={this.props.notification} style={this.getStyle()}>
                {this.props.children}
            </span>
        );
    }
}
