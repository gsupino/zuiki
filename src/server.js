import Express from 'express';
import React from 'react';
import Router from 'react-router';
import Location from 'react-router/lib/Location';
import routes from './routes';
import favicon from 'serve-favicon';
import compression from 'compression';
import path from 'path';
import createStore from './redux/create';
import { Provider } from 'react-redux';
import Html from './Html';
import 'isomorphic-fetch';
const appRoot = require('app-root-path').path;
const UAParser = require('ua-parser-js');

const app = new Express();
let port = '3000';

app.use(compression());
app.use(favicon(path.join(__dirname, '..', 'favicon.ico')));
app.use('/public', Express.static(appRoot + '/static'));

//html setting
const fonts='http://fonts.googleapis.com/css?family=Roboto:400,300,500';
const css='public/dist/app.css';
const js='public/dist/app.js';
const icons='https://fonts.googleapis.com/icon?family=Material+Icons';

const getFetchData = (component={}) => {
  return component.WrappedComponent ?
    getFetchData(component.WrappedComponent) :
    component.fetchData;
};


app.use((req, res) => {
    //verifico il tipo di device che effettua la richiesta
    const parser = new UAParser();
    let ua = parser.setUA(req.headers['user-agent']).getResult();
    let deviceType = "";
    if (ua.device.type === undefined) {
        deviceType = "desktop";
    } else {
        deviceType = ua.device.type;
    }

    //creo un instanza di redux
    const store = createStore();
    const location = new Location(req.path, req.query);
    Router.run(routes, location, (error, initialState) => {
        if (error) {
            res.status(500).send(error);
        } else {
            Promise.all(initialState.components
                .filter((component) => getFetchData(component))//prendo solo i componenti con un static methond fetchData
                .map(getFetchData)
                .map(fetchData => fetchData(store)))
                .then(() => {
                    let component=(
                        <Provider {...{ store }}>
                            {() => <Router location={location} {...initialState}/>}
                        </Provider>
                    )
                    //render page
                    res.send('<!doctype html>\n' +
                        React.renderToString(<Html fonts={fonts} css={css} js={js} icons={icons} component={component} store={store}/>));
                }).catch((err) => {
                    res.status(500).send(err.stack);
                });
        }
    });
});

if (port) {
    app.listen(port, (err) => {
        console.log('server running');
        if (err) {
            console.error(err);
        }
    })
} else {
    console.error('==>     ERROR: No PORT environment variable has been specified');
}
