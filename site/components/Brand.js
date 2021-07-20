import React from 'react';
import cx from 'classnames';

import withStyles from '../../src/tools/withStyles';
import Logo from '../../src/Logo';
import Words from '../../src/Words';

import Link from './Link';

const styles = () => ({
  root: {
    textAlign: 'left',
    '@media screen and (max-width: 600px)': {
      textAlign: 'center',
    },
    '& h1': {
      margin: '5px 0 0 0'
    }
  }
});

function Brand (props) {
  const { theme, classes, show, onLink, className, ...etc } = props;
  const cls = cx(classes.root, className);
  return (
    <Link href='/' onLink={onLink} className={cls} {...etc}>
      <h1 className={classes.brandTitle}>
        <Words animate show={show}>
          Dark Galaxies
        </Words>
      </h1>
    </Link>
  );
}

export default withStyles(styles)(Brand);
