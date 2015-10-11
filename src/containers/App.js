/*global __CLIENT__*/
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import {loadImages} from '../actions/imageActions';
import {loadUsers} from '../actions/userActions';
import View from '../components/base/view';
import Grid,{Cell} from '../components/base/grid';


class App extends Component {
    render() {
        return (
            <View style={{backgroundColor:'pink'}}>
                <Grid noSpacing="true">
                    <Cell col={6} tablet={8} style={{border:'1px solid black'}}> 1</Cell>
                    <Cell col={1} style={{border:'1px solid black'}}> 1</Cell>
                    <Cell col={1} style={{border:'1px solid black'}}> 1</Cell>
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

