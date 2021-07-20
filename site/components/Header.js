import React from 'react';
import withStyles from '../../src/tools/withStyles';
import ArwesHeader from '../../src/Header';
import Brand from './Brand';
import Navigation from './Navigation';
import CartIcon from '../../components/cart/cartIcon';


const styles = () => ({
  headerWrap: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 800,
    margin: '0 auto',
    padding: 20,
    '@media screen and (max-width: 768px)': {
      flexDirection: 'column',
      padding: '10px 0'
    },
    '@media screen and (max-width: 400px)': {
      padding: '10px 0'
    }
  },
  navWrapper: {
    overflow: 'hidden',
    transition: '0.7s'
  },
});

const Header = props => {
  const {
    onLink,
    classes,
    className,
    ...etc
  } = props;

  return (
    <ArwesHeader {...etc}>
      {anim => (
        <div className={classes.headerWrap}>
          <Brand show={anim.entered} onLink={onLink} />
          <Navigation
            show={anim.entered}
            onLink={onLink}
            className={classes.navWrapper}
          />
          <CartIcon />
        </div>
      )}
    </ArwesHeader>
  );
};


export default withStyles(styles)(Header);

