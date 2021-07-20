import React from 'react';
import cx from 'classnames';

import withStyles from '../../src/tools/withStyles';
import ArwesFooter from '../../src/Footer';
import { Row } from '../../src/Grid';

import Wrap from './Wrap';
import FooterGitHub from './FooterGitHub';
import FooterAuthor from './FooterAuthor';

const styles = () => ({
  root: {
    textAlign: 'center'
  },
  wrap: {
    padding: '15px 0'
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media screen and (max-width: 575px)': {
      flexDirection: 'column'
    }
  },
  footerItem: {
    fontSize: 20,
    '@media screen and (max-width: 768px)': {
      fontSize: 19
    },
    '@media screen and (max-width: 575px)': {
      fontSize: 18
    },
    '@media screen and (max-width: 360px)': {
      fontSize: 17
    }
  }
});

const Footer = props => {
  const {
    onLink,
    classes,
    className,
    ...etc
  } = props;

  const cls = cx(classes.root, className);

  return (
    <ArwesFooter className={cls} {...etc}>
      {anim => (
      <Wrap className={classes.wrap}>
        <Row noMargin col s={12}>
          <div className={classes.content}>
            <FooterGitHub 
              show={anim.entered} 
              onLink={onLink} 
              className={classes.footerItem} 
            />
            <FooterAuthor 
              show={anim.entered} 
              onLink={onLink} 
              className={classes.footerItem} 
            />
          </div>
        </Row>
      </Wrap>
      )}
    </ArwesFooter>
  );
};

export default withStyles(styles)(Footer);
