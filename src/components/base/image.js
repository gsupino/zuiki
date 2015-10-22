import React from 'react';
const classnames = require('classnames');

const {PropTypes} = React;0
const {span} = React.DOM;

const Status = {
    PENDING: 'pending',
    LOADING: 'loading',
    LOADED: 'loaded',
    FAILED: 'failed'
};


export default class ImageLoader extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        preloader: PropTypes.func,
        src: PropTypes.string,
        onLoad: PropTypes.func,
        onError: PropTypes.func,
        sizing: React.PropTypes.string
    };

    static defaultProps = {};

    constructor(props) {
        super(props);
        this.state = {status: props.src ? Status.LOADING : Status.PENDING};
    }


    componentDidMount() {
        if (this.state.status === Status.LOADING) {
            this.createLoader();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.src !== nextProps.src) {
            this.setState({
                status: nextProps.src ? Status.LOADING : Status.PENDING
            });
        }
    }

    componentDidUpdate() {
        if (this.state.status === Status.LOADING && !this.img) {
            this.createLoader();
        }
    }

    componentWillUnmount() {
        this.destroyLoader();
    }

    getClassName() {
        let baseClass;
        if(this.props.sizing){
            baseClass='image--background';
        }else{
            baseClass='image';
        }
        let eventClass = `${baseClass}-${this.state.status}`;
        let className=classnames(baseClass,eventClass);

        if (this.props.className) className = `${className} ${this.props.className}`;
        return className;
    }

    createLoader() {
        this.destroyLoader();  // We can only have one loader at a time.

        this.img = new Image();
        this.img.onload =::this.handleLoad;
        this.img.onerror =::this.handleError;
        this.img.src = this.props.src;
    }

    destroyLoader() {
        if (this.img) {
            this.img.onload = null;
            this.img.onerror = null;
            this.img = null;
        }
    }

    handleLoad(event) {
        this.destroyLoader();
        this.setState({status: Status.LOADED});

        if (this.props.onLoad) this.props.onLoad(event);
    }

    handleError(error) {
        this.destroyLoader();
        this.setState({status: Status.FAILED});

        if (this.props.onError) this.props.onError(error);
    }

    renderImg(className,style) {
        const {src, sizing} = this.props;
        if(!sizing){
            return <img src={src} className={className} style={style} />;
        }else{
            let newStyle=style||{}
            newStyle.backgroundImage=`url(${src})`;
            newStyle.backgroundSize=this.props.sizing;
            return <div className={className} style={newStyle}></div>;
        }
    }

    render() {
        let classes =this.getClassName()

        let component;

        switch (this.state.status) {
            case Status.LOADED:
                component=this.renderImg(classes);
                break;
            case Status.FAILED:
                //if (this.props.children) wrapperArgs.push(this.props.children);
                break;
            case Status.LOADING:
                component=this.renderImg(classes);
                break;
            default:
                component=<div></div>
                //if (this.props.preloader) wrapperArgs.push(this.props.preloader());
                break;
        }

        return component;
    }
}