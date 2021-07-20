import React from 'react';

import ThemeProvider from '../src/ThemeProvider';
import createTheme from '../src/tools/createTheme';
import SoundsProvider from '../src/SoundsProvider';
import createSounds from '../src/tools/createSounds';

import Template from './components/Template';

const resources = {
  background: {
    small: '/static/img/wallpaper.jpg',
    medium: '/static/img/wallpaper.jpg',
    large: '/static/img/wallpaper.jpg',
    xlarge: '/static/img/wallpaper.jpg'
  },
  pattern: '/static/img/glow.png',
};

const sounds = {
  shared: {
    volume: 0.5,
  },
  players: {
    click: {
      sound: { src: ['/static/sound/click.mp3'] },
      settings: { oneAtATime: true }
    },
    typing: {
      sound: { src: ['/static/sound/typing.mp3'] },
      settings: { oneAtATime: true }
    },
    deploy: {
      sound: { src: ['/static/sound/deploy.mp3'] },
      settings: { oneAtATime: true }
    },
  }
};

export default (App) => {
  return (props) => (
    <ThemeProvider theme={createTheme()}>
      <SoundsProvider sounds={createSounds(sounds)}>
        <Template>
          <App resources={resources} {...props} />
        </Template>
      </SoundsProvider>
    </ThemeProvider>
  );
};
