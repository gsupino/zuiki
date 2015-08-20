import React, {Component, PropTypes} from 'react';
import serialize from 'serialize-javascript';

/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
export default class Html extends Component {
    static propTypes = {
        fonts: PropTypes.string,
        css: PropTypes.string,
        js: PropTypes.string,
        icons:PropTypes.string,
        component: PropTypes.object,
        store: PropTypes.object
    }

    render() {
        const {fonts,css,js, icons,component, store} = this.props;
        const title = 'Zuiki bakery';
        const description = 'All the modern best practices in one example.';
        const image = 'https://react-redux.herokuapp.com/logo.jpg';

        return (
            <html lang="en-us">
            <head>
                <meta charSet="utf-8"/>
                <title>{title}</title>
                <meta property="og:site_name" content={title}/>
                <meta property="og:image" content={image}/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:title" content={title}/>
                <meta property="og:description" content={description}/>
                <meta name="twitter:card" content="summary"/>
                <meta property="twitter:site" content="@erikras"/>
                <meta property="twitter:creator" content="@erikras"/>
                <meta property="twitter:image" content={image}/>
                <meta property="twitter:image:width" content="200"/>
                <meta property="twitter:image:height" content="200"/>
                <meta property="twitter:title" content={title}/>
                <meta property="twitter:description" content={description}/>

                <link rel="shortcut icon" href="/favicon.ico" />
                <link href={fonts} media="screen, projection" rel="stylesheet" type="text/css" />
                <link href={icons} media="screen, projection" rel="stylesheet" type="text/css" />
                <link href={css} media="screen, projection" rel="stylesheet" type="text/css"/>
            </head>
            <body>
            <div id="content" dangerouslySetInnerHTML={{__html: React.renderToString(component)}}/>
            <script dangerouslySetInnerHTML={{__html: `window.__data=${serialize(store.getState())};`}} />
            <script src={js}/>
            </body>
            </html>
        );
    }
}
