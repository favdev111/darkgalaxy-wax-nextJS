import React from 'react';

import withStyles from '../../src/tools/withStyles';
import { getResponsiveResource } from '../../src/tools/utils';
import createLoader from '../../src/tools/createLoader';
import createResponsive from '../../src/tools/createResponsive';
import Arwes from '../../src/Arwes';
import ArwesContent from '../../src/Content';
import Words from '../../src/Words';
import Button from '../../src/Button';
import Logo from '../../src/Logo';
import Loading from '../../src/Loading';
import Image from '../../src/Image';
import Project from '../../src/Project';
import withTemplate from '../../site/withTemplate';
import { getTitle } from '../../site/utils';
import Link from '../../site/components/Link';
import FooterGitHub from '../../site/components/FooterGitHub';
import FooterAuthor from '../../site/components/FooterAuthor';

const styles = (theme) => {
    return {
      root: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        '& h1': {
          margin: [0, 0, theme.margin / 2],
          fontSize: 40,
        },
        '& p': {
          margin: [0, 0, theme.margin],
          maxWidth: 500,
        },
        '& $option + $option': {
          marginLeft: theme.padding / 2,
        },
      },
      main: {
        flex: 1,
        display: 'flex',
      },
      content: {
        margin: 'auto',
        padding: [0, theme.padding],
        textAlign: 'center',
      },
      option: {
        display: 'inline-block',
      },
      footer: {
        opacity: theme.alpha / 2,
      },
      footerContent: {
        display: 'flex',
        padding: theme.padding / 2,
        fontSize: '80%',
      },
      footerLeft: {
        flex: '1 1 auto',
      },
      footerRight: {
        flex: '1 1 auto',
        textAlign: 'right',
        '& a': {
          textAlign: 'left',
        },
      },
    };
  };

  class Team extends React.Component {

    constructor () {
      super(...arguments);
      this.state = {
        show: false,
        loaded: false
      };
  
      this.loader = createLoader();
      this.responsive = createResponsive({
        getTheme: () => this.props.theme
      });
    }
  
    componentDidMount () {
      window.document.title = getTitle(window.location.pathname);
      this.startLoading();
    }
  
    render () {
      const { classes, resources } = this.props;
      const { show, loaded } = this.state;
  
      return (
        <div>
          <Loading
            full
            animate
            show={!show && !loaded}
            animation={{
              unmountOnExit: true
            }}
          />
          <Arwes
            animate
            show={show}
            showResources={show}
            background={resources.background}
            pattern={resources.pattern}
          >
            {anim => (
            <ArwesContent className={classes.root}>
              <div className={classes.main}>
                <div className={classes.content}>
                  <header style={{textAlign: "center"}}>
                    <h1><Words animate show={anim.entered} >Docs</Words></h1>
                  </header>
                  <main >
                    
                  </main>
  
                  <nav>
                    <Link className={classes.option} href='/docs' onLink={this.onLink}>
                        <Project
                            animate
                            header='Dean Harry'
                            icon='mdi-account-alert'
                         >
                            {anim => (
                                <p><Words animate show={anim.entered}>
                                    CEO
                                </Words></p>
                            )}
                        </Project>
                    </Link>
                    {' '}
                    <Link className={classes.option} href='/api' onLink={this.onLink}>
                      <Button animate show={anim.entered}>
                        {btnAnim => (
                          <Words animate show={btnAnim.entered}>Characters</Words>
                        )}
                      </Button>
                    </Link>
                    {' '}
                    <Link className={classes.option} href='/play' onLink={this.onLink}>
                      <Button animate show={anim.entered}>
                        {btnAnim => (
                          <Words animate show={btnAnim.entered}>Wiki</Words>
                        )}
                      </Button>
                    </Link>
                  </nav>
  
                </div>
              </div>
  
              <footer className={classes.footer}>
                <div className={classes.footerContent}>
                  <div className={classes.footerLeft}>
  
                  </div>
                  <div className={classes.footerRight}>
                    <FooterAuthor show={anim.entered} onLink={this.onLink} />
                  </div>
                </div>
              </footer>
  
            </ArwesContent>
            )}
          </Arwes>
        </div>
      );
    }
  
    startLoading () {
      const responsive = this.responsive.get();
      const bg = getResponsiveResource(this.props.resources.background, responsive);
  
      this.loader.load({ images: [bg] }, { timeout: 5 * 1000 }).
        then(() => {}, () => {}).
        then(() => this.setState({ show: true, loaded: true }));
    }
  
    onLink = () => {
      this.setState({ show: false });
    }
  }
  
  export default withTemplate(withStyles(styles)(Team));
  
