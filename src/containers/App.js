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
import Button from '../components/button';
import Tooltip from '../components/tooltip';
import {Card,CardTitle, CardMedia,CardSupportingText,CardSubTitle, CardMenu,CardActions} from '../components/card';
import IconNew from '../components/base/icon';
import TooltipNew from '../components/base/tooltip';
import BadgeNew from '../components/base/badge';


class App extends Component {
    render() {
        return (
            <View>
                <Container width="100%" height="100%">
                    <Toolbar zDepth={3} height="100px" style={{zIndex:10}}>
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

                            <Icon key={1}>loop</Icon>
                        </ToolbarGroup>
                    </Toolbar>
                    <Container key={3} width='100%' height='100%' style={{paddingTop:'100px',zIndex:1}}>
                        <Block key={4} flex='1 0 0px' alignSelf='center' height='100%'>
                            <a >Home ciao</a>
                            <Badge text="5" isIcon="true">account_box</Badge>
                            <Avatar src="/public/image/user.jpg"/>
                            <Icon key={22}>loop</Icon>
                            <Button onClick={e=>{console.log('yes')}}>test</Button>
                            <p id="tt1">HTML</p>
                            <Tooltip htmlFor="tt1">HyperText Markup Language</Tooltip>
                            <Card zDepth={2}>
                                <CardTitle headType="h3" border='true'> questa è una prova test</CardTitle>
                                <CardSubTitle>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris sagittis pellentesque lacus eleifend lacinia...
                                </CardSubTitle>
                                <CardMedia>
                                    <img src='/public/image/brand/logo.gif' alt=""/>
                                </CardMedia>
                                <CardSupportingText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Mauris sagittis pellentesque lacus eleifend lacinia...
                                </CardSupportingText>
                                <CardActions border='true'>
                                    <Button colored='true' ripple='true'>
                                        get
                                    </Button>
                                </CardActions>
                                <CardMenu>
                                    <Button icon='true'>
                                        <i className="material-icons">share</i>
                                    </Button>
                                </CardMenu>
                            </Card>
                        </Block>
                        <Block flex='2 0 0px'>
                            <IconNew name='loop'></IconNew>
                            <div>
                                <TooltipNew label="Follow">
                                    <IconNew name="add" />
                                </TooltipNew>

                                <TooltipNew label="Print" large={true}>
                                    <p>ciao</p>
                                </TooltipNew>


                                <TooltipNew label={<span>Upload <strong>file.zip</strong></span>}>
                                    <IconNew name="cloud_upload" />
                                </TooltipNew>

                                <TooltipNew label={<span>Share your content<br />via social media</span>}>
                                    <IconNew name="share" />
                                </TooltipNew>
                            </div>
                            <div>
                                <p>Number badge on icon</p>
                                <BadgeNew text="1">
                                    <Icon name="account_box" />
                                </BadgeNew>
                                <p>Icon badge on icon</p>
                                <BadgeNew text="♥">
                                    <Icon name="account_box" />
                                </BadgeNew>

                                <p>Number badge</p>
                                <BadgeNew text="4">Inbox</BadgeNew>
                                <p>Icon badge</p>
                                <BadgeNew text="♥">Mood</BadgeNew>
                            </div>
                            <Text size="display-4-color-contrast" align="right" transform="capitalize">ciao</Text>
                        </Block>
                        {this.props.children}
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
App.childContextTypes = {
    muiTheme: React.PropTypes.object
}


export default connect()(App);

