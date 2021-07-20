import React from 'react';
import cx from 'classnames';

import withStyles from '../../src/tools/withStyles';
import Words from '../../src/Words';
import Highlight from '../../src/Highlight';
import Appear from '../../src/Appear';
import Link from './Link';

const staticLinks = [
  {
    id: 1,
    name: 'Team',
    icon: 'account',
    href: '/team'
  },
  {
    id: 2,
    name: 'Characters',
    icon: 'code-brackets',
    href: '/characters'
  },
  {
    id: 3,
    name: 'Shop',
    icon: 'shopping-bag',
    href: '/products'
  }
];

const dynamicLinks = [
  {
    id: 3,
    name: 'Wiki',
    icon: 'beaker',
    href: 'https://github.com/dharry1968/DarkGalaxies/wiki',
    target: '_blank'
  }
];

const styles = () => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 5,
    '@media screen and (max-width: 600px)': {
      justifyContent: 'space-around',
      marginRight: 0
    },
    '@media screen and (max-width: 400px)': {
      flexDirection: 'column',
      justifyContent: 'flex-start'
    }
  },
  link: {
    zIndex: 1,
    marginLeft: 20,
    fontSize: 21,
    lineHeight: '45px',
    '&:first-child': {
      marginLeft: 0
    },
    '@media screen and (max-width: 400px)': {
      fontSize: 21,
      marginLeft: 0
    }
  },
  buttonIcon: {
    marginRight: 3,
    fontSize: 23,
    '@media screen and (max-width: 768px)': {
      fontSize: 23
    }
  },
});

function Navigation(props) {
  const { theme, classes, show, onLink, className, ...etc } = props;
  const cls = cx(classes.root, className);

  return (
    <nav className={cls} {...etc}>
      {staticLinks.map(linkItem => (
        <Link
          key={linkItem.id}
          className={classes.link}
          href={linkItem.href}
          onLink={onLink}
        >
          <Highlight
            animate 
            layer='header'
          >
            <Appear 
              className={`mdi mdi-${linkItem.icon} ${classes.buttonIcon}`} 
              animate 
              show={show}
            />
            <Words 
              animate 
              show={show}
            >
              {linkItem.name}
            </Words>
          </Highlight>
        </Link>
      ))}

      {dynamicLinks.map(linkItem => (
        <Link
          key={linkItem.id}
          className={classes.link}
          href={linkItem.href}
          onLink={onLink}
          target='_blank'
        >
          <Highlight 
            animate 
            layer='header'
          >
            <Appear 
              className={`mdi mdi-${linkItem.icon} ${classes.buttonIcon}`} 
              animate 
              show={show} 
            />
            <Words 
              animate 
              show={show}
            >
              {linkItem.name}
            </Words>
          </Highlight>
        </Link>
      ))}
    </nav>
  );
}

export default withStyles(styles)(Navigation);
