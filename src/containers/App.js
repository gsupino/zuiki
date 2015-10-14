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

class App extends Component {
    render() {
        return (
            <View style={{backgroundColor:'white'}}>
                <Container>
                    <Icon name='mood'></Icon>
                    <Button id="demo-menu-lower-left" icon='true' iconName='more_vert'></Button>
                    <Menu target="demo-menu-lower-left">
                        <MenuItem>Some Action</MenuItem>
                        <MenuItem>Another Action</MenuItem>
                        <MenuItem disabled={true}>Disabled Action</MenuItem>
                        <MenuItem>Yet Another Action</MenuItem>
                    </Menu>

                    <Grid noSpacing="true" style={{}}>
                        <Cell col={6} tablet={8} style={{border:'1px solid black'}}> 1</Cell>
                        <Cell col={1} offset={1} style={{border:'1px solid black'}}> 1</Cell>
                        <Cell col={1} style={{border:'1px solid black',height:300}}> 1</Cell>
                        <Cell col={1} style={{border:'1px solid black'}}> 1</Cell>
                        <Cell col={1} style={{border:'1px solid black'}}> 1</Cell>
                        <Cell col={1} style={{border:'1px solid black'}}> 1</Cell>
                        <Cell col={1} style={{border:'1px solid black'}}> 1</Cell>
                        <Cell col={1} style={{border:'1px solid black'}}> 1</Cell>
                        <Cell col={1} style={{border:'1px solid black'}}> 1</Cell>
                        <Cell col={1} style={{border:'1px solid black'}}> 1</Cell>
                        <Cell col={1} style={{border:'1px solid black'}}> 1</Cell>
                        <Cell col={1} style={{border:'1px solid black'}}> 1</Cell>
                    </Grid>
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

