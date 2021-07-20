import React from 'react';
import { JssProvider, SheetsRegistry } from 'react-jss';
import Document, { Head, Main, NextScript } from 'next/document';
import '@babel/polyfill'
import { getTitle } from '../site/utils';

export default class AppDocument extends Document {

  static getInitialProps ({ renderPage, pathname }) {

    const sheets = new SheetsRegistry();
    const decoratePage = Page => props => (
      <JssProvider registry={sheets}>
        <Page {...props} />
      </JssProvider>
    );

    const renderedPage = renderPage(decoratePage);

    const styles = (
      <style type='text/css' id='pages-styles'>
        {sheets.toString()}
      </style>
    );

    return { ...renderedPage, styles, pathname };
  }

  render () {
    const title = getTitle(this.props.pathname);

    return (
      <html lang='en'>
        <Head>
          {/* <script async src='https://www.googletagmanager.com/gtag/js?id=G-19HN7ZC1M7'></script>
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-19HN7ZC1M7');

              gtag('event', 'page_view', {
                page_location: 'https://darkgalaxies.io/'
              });
            `}
          </script> */}

          <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' />
          <meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1' />
          <title>{title}</title>

          <meta name='description' content='Where Worlds collide' />
          <meta name='keywords' content='CCG, Dark Galaxies, Trading Cards, WAX, Blockchain, Tokens, TCG, dark galaxies, dark galaxies game' />
          <meta name='robots' content='index, follow' />

          <meta property='og:title' content={title} />
          <meta property='og:site_name' content={title} />
          <meta property='og:description' content='Where Worlds collide' />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='http://darkgalaxies.io' />
          <meta property='og:image' content='http://darkgalaxies.io:3000/static/img/favicon.png' />

          <meta name='theme-color' content='#000000' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-title' content={title} />
          <meta name='apple-mobile-web-app-status-bar-style' content='#000000' />
          <meta name='msapplication-TileColor' content='#000000' />

          <link rel='shortcut icon' href='/static/img/favicon.png' />
          <link rel='stylesheet' href='//fonts.googleapis.com/css?family=Titillium+Web:400,600' />
          <link rel='stylesheet' href='//fonts.googleapis.com/css?family=Electrolize' />
          <style type='text/css'>
          {`
            html, body {
              background-color: #000000;
            }
            body {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
            }
            *, *:before, *:after {
              box-sizing: inherit;
            }
          `}
          </style>
          <script type="text/javascript" src="https://js.squareupsandbox.com/v2/paymentform"></script>
          {/* <script type="text/javascript" src="https://js.squareup.com/v2/paymentform"></script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <link rel='stylesheet' href='//cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css' />
          <script src='https://cdn.paddle.com/paddle/paddle.js'></script>
          <script type='text/javascript'>
            {`Paddle.Setup({ vendor: 125007 })`}
          </script>
          <script src="https://www.paypalobjects.com/api/checkout.js" />
        </body>
      </html>
    );
  }
}
