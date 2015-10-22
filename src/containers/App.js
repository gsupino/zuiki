/*global __CLIENT__*/
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import {loadImages} from '../actions/imageActions';
import {loadUsers} from '../actions/userActions';
import View from '../components/base/view';
import Grid,{Cell} from '../components/base/grid';
import Container from '../components/base/container';
import Icon from '../components/base/icon';
import Button from '../components/base/button';
import Menu from '../components/menu/menu';
import MenuItem from '../components/menu/menu-item';
import Avatar from '../components/base/avatar';
import Image from '../components/base/image';
import {Toolbar,ToolbarGroup} from '../components/toolbar'

class App extends Component {
    render() {
        return (
            <View style={{backgroundColor:'white'}}>
                <Container>
                <Toolbar height={100} zDepth={2}>
                        <Cell  col={3} style={{border:'1px solid black'}}>
                            <Image sizing='contain' src="/public/image/user.jpg"></Image>
                        </Cell>
                        <Button id="demo-menu-lower-left" icon='true' iconName='more_vert'></Button>
                        <Menu target="demo-menu-lower-left">
                            <MenuItem>Some Action</MenuItem> <MenuItem>Another Action</MenuItem>
                            <MenuItem disabled={true}>Disabled Action</MenuItem>
                            <MenuItem>Yet Another Action</MenuItem>
                        </Menu>

                </Toolbar>


                <Container style={{paddingTop:'100'}}>
                    <Icon name='mood'></Icon>

                    <Avatar src="/public/image/user.jpg"/>

                    <Grid height='50%' noSpacing="true" style={{}}>
                        <Cell height='50%' col={6} tablet={8} style={{border:'1px solid black'}}>
                            <Image sizing='cover' src="/public/image/user.jpg"></Image>
                        </Cell>
                        <Cell col={1}  isSpacer='true'style={{border:'1px solid black'}}> 1</Cell>
                        <Cell col={1} style={{border:'1px solid black'}}>2</Cell>
                        <Cell col={1} style={{border:'1px solid black'}}> 3</Cell>
                        <Cell col={1} style={{border:'1px solid black'}}> 4</Cell>
                        <Cell col={1} style={{border:'1px solid black'}}> 5</Cell>
                        <Cell col={1} style={{border:'1px solid black'}}> 6</Cell>

                    </Grid>


                </Container>

            </Container>

            </View>
        );
    }

    static
    fetchData(store) {
        const promises = [];
        promises.push(store.dispatch(loadImages()));
        promises.push(store.dispatch(loadUsers()));
        return Promise.all(promises)
    }
}


export default connect()(App);

