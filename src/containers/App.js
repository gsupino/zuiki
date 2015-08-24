/*global __CLIENT__*/
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import {loadImages} from '../actions/imageActions';
import {loadUsers} from '../actions/userActions';
import View from '../components/View';
import Container from '../components/Container';
import Block from '../components/Block';
import Icon from '../components/Icon';
import {Toolbar} from '../components/toolbar';

class App extends Component {
    render() {
        return (
            <View>
                <Container width='100%' height='50%'>
                    <Toolbar zDepth={5}></Toolbar>
                </Container>

                <Container width='100%' height='50%' zDepth={5}>
                    <Block flex='1 0 0px' alignSelf='center' height='30%' zDepth={5} >
                        <p className='vertical-align'>Home ciao</p>
                    </Block>
                    <Block flex='2 0 0px' zDepth={5}>
                        <Icon className="material-icons">face</Icon>
                        <p>Home </p>
                    </Block>

                    {this.props.children}
                </Container>
            </View>
        );
    }

    static fetchData(store) {
        const promises=[];
        promises.push(store.dispatch(loadImages()));
        promises.push(store.dispatch(loadUsers()));
        return Promise.all(promises)
    }
}

export default connect()(App);

