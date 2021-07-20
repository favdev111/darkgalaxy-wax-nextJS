import React from 'react';

import Words from '../../src/Words';
import Appear from '../../src/Appear';

import Link from './Link';

export default function FooterAuthor (props) {
  const { show, onLink, ...etc } = props;
  return (
//    <Link href='https://infocore.com.au' onLink={onLink} {...etc}>
    <Link 
      href='http://dg.darkgalaxies.io:3000' 
      onLink={onLink} {...etc} 
      target='_blank'
    >
      <Appear 
        className='mdi mdi-copyright' 
        animate 
        show={show} 
      />
      <Words 
        animate 
        show={show}
      >
        2021 Dark Galaxies is a division of Infocore Pty Ltd (ABN 74 135 184 600)
      </Words>
    </Link>
  );
}
