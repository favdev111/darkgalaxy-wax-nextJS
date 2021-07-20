import React from 'react';

import withStyles from '../src/tools/withStyles';
import Arwes from '../src/Arwes';
import ArwesContent from '../src/Content';
import { Provider } from 'react-redux';
import MainPageNav from '../components/main/MainPageNav';
import MainContent from '../components/main/MainContent';
import TimeLine from '../components/main/TimeLine';
import Subscribe from '../components/main/Subscribe';
import MainFooter from '../components/main/MainFooter';
import YouTubeEmbed from "../components/main/YouTubeEmbed";
import Selector from '../components/main/Selector';
import SocialLinks from '../components/main/SocialLinks';
import { withUAL } from 'ual-reactjs-renderer'
import withTemplate from '../site/withTemplate';
import store from '../redux/store';

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


class Main extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
    };
  }
  addAccount = () => {
    this.props.ual.showModal()
  }
  onLink = () => {
    this.setState({ show: false });
  }
  render() {
    const { classes, resources, show } = this.props;
    return (
        <Provider store={store}>
          <Arwes
            animate
            show={show}
            showResources={show}
            background={resources.background}
            pattern={resources.pattern}
          >
            {anim => (
              <ArwesContent className={classes.root}>

                <MainPageNav
                  classes={classes}
                  onLink={this.onLink}
                  anim={anim}
                  ual={this.props.ual}
                />
                <MainContent
                  classes={classes}
                  anim={anim}
                />
                <YouTubeEmbed 
                  embedId="cCH0jTUSPsI"
                  classes={classes}
                />
                <Selector 
                  classes={classes} 
                  onLink={this.onLink}
                />
                <TimeLine
                  classes={classes}
                />
                <Subscribe classes={classes} />
                <SocialLinks classes={classes} />
                <MainFooter
                  classes={classes}
                  anim={anim}
                  onLink={this.onLink}
                />
              </ArwesContent>
            )}
          </Arwes>
        </Provider>
    );
  }
}


export default withTemplate(withStyles(styles)(withUAL(Main)));