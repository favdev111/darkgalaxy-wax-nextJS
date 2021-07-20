import React from 'react';

import Words from '../../src/Words';
import Appear from '../../src/Appear';
import Link from './Link';

export default function FooterGitHub (props) {
  const { show, onLink, ...etc } = props;
  return (
    <Link 
      href='https://github.com/dharry1968/DarkGalaxies/wiki' 
      onLink={onLink} {...etc} 
      target='_blank'
    >
      <Appear 
        className='mdi mdi-github-circle' 
        animate 
        show={show} 
      />
      <Words 
        animate 
        show={show}
      >
        GitHub
      </Words>
    </Link>
  );
}
