import React from 'react';

import withStyles from '../src/tools/withStyles';
import { getResponsiveResource } from '../src/tools/utils';
import createLoader from '../src/tools/createLoader';
import createResponsive from '../src/tools/createResponsive';
import Loading from '../src/Loading';
import Main from './main';

import withTemplate from '../site/withTemplate';
import { getTitle } from '../site/utils';
import CookieConsent from "react-cookie-consent";
import { Provider } from 'react-redux';
import store from '../redux/store';
import { UALProvider } from 'ual-reactjs-renderer'
import { Ledger } from 'ual-ledger'
import { Scatter } from 'ual-scatter'
import { Wax } from '@eosdacio/ual-wax';
import { Anchor } from 'ual-anchor'
import { find } from 'lodash'
import blockchains from '../static/blockchains.json'

const appName = 'ual-reactjs-renderer-auth'

const styles = () => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      height: '100vh'
    }
  }
};

class Home extends React.Component {
  constructor() {
    super(...arguments);
    this.loader = createLoader();
    this.responsive = createResponsive({
      getTheme: () => this.props.theme
    });
    const chainId = '1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4'
    this.state = {
      chainId,
      show: false,
      loaded: false,
    }
  }

  getAuthenticators = (chainId) => {
    const [chain] = blockchains.filter((c) => c.chainId === chainId)
    const anchor = new Anchor([chain], {
      appName,
    })
    const wax = new Wax([chain], {
      appName,
    })
    const ledger = new Ledger([chain])
    const scatter = new Scatter([chain], {
      appName
    })
    return [
      anchor,
      wax,
      // ledger,
      // scatter
    ]
  }

  componentDidMount() {
    window.document.title = getTitle(window.location.pathname);
    this.startLoading();
  }

  startLoading() {
    const responsive = this.responsive.get();
    const bg = getResponsiveResource(this.props.resources.background, responsive);

    this.loader.load({ images: [bg] }, { timeout: 5 * 1000 }).
      then(() => { }, () => { }).
      then(() => this.setState({ show: true, loaded: true }));
  }

  render() {
    const { classes, resources } = this.props;
    const { show, loaded, chainId } = this.state;
    const chain = find(blockchains, { chainId });
    const authenticators = this.getAuthenticators(chainId)
    return (
      <Provider store={store}>
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          cookieName="DarkGalaxiesCookie"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
          expires={150}
          enableDeclineButton="true"
          onDecline={() => {
            alert("Please do not continue using our site if you don't accept our cookies.");
          }}
        >
          This website uses cookies to enhance the user experience.
        </CookieConsent>
        <Loading
          full
          animate
          show={!show && !loaded}
          animation={{
            unmountOnExit: true
          }}
        />
        <UALProvider
          appName={appName}
          authenticators={authenticators}
          chains={blockchains}
          key={chain.chainId}
        >
          <Main
            classes={classes}
            resources={resources}
            show={show}
            appName={appName}
            chain={chain}
            setChainId='0db13ab9b321c37c0ba8481cb4681c2788b622c3abfd1f12f0e5353d44ba6e72'
            key={chain.chainId}
          />
        </UALProvider>
      </Provider>
    );
  }
}


export default withTemplate(withStyles(styles)(Home));