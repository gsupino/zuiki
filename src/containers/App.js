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
import {Toolbar, ToolbarGroup,ToolbarTitle,ToolbarSpace} from '../components/toolbar';
import Image from '../components/Image';
import Text from '../components/Text';
import Badge from '../components/badge';
import Avatar from '../components/avatar';

class App extends Component {
    render() {
        return (
            <View>
                <Container width="100%" height="100%">
                    <Toolbar zDepth={3} height="100px">
                        <ToolbarGroup width="20%">
                            <Image src='/public/image/brand/logo.gif' sizing="contain"></Image>
                        </ToolbarGroup>
                        <ToolbarSpace></ToolbarSpace>
                        <ToolbarGroup>
                            <Link to="/about">About</Link>
                            <ToolbarTitle text="ciao"></ToolbarTitle>
                            <ToolbarTitle text="ciao"></ToolbarTitle>
                            <ToolbarTitle text="ciao"></ToolbarTitle>
                            <ToolbarTitle text="ciao"></ToolbarTitle>
                            <ToolbarTitle text="ciao"></ToolbarTitle>

                            <Icon>loop</Icon>
                        </ToolbarGroup>
                    </Toolbar>
                    <Container width='100%' height='100%' style={{paddingTop:'100px',zIndex:-1000}}>
                        <Block flex='1 0 0px' alignSelf='center' height='100%' >
                            <a >Home ciao</a>
                            <Badge notification="5" isIcon="true">account_box</Badge>
                            <Avatar src="/public/image/user.jpg" />

                        </Block>
                        <Block flex='2 0 0px' >
                            <Icon>face</Icon>
                            <Text size="display-4-color-contrast" align="right" transform="capitalize">ciao</Text>
                        </Block>
                        {this.props.children}
                    </Container>
                </Container>

            </View>
        );
    }

    static fetchData(store) {
        const promises = [];
        promises.push(store.dispatch(loadImages()));
        promises.push(store.dispatch(loadUsers()));
        return Promise.all(promises)
    }
}

export default connect()(App);

