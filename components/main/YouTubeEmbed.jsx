import React from 'react';
import withStyles from '../../src/tools/withStyles';
import PropTypes from "prop-types";

const styles = () => {
  return {
    youtubeEmbedContainer: {
      margin: '30px 0'
    },
    youtubeEmbed: {
      width: '850px',
      height: '476px',
      '@media screen and (max-width: 1024px)': {
        width: '700px',
        height: '392px'
      },
      '@media screen and (max-width: 962px)': {
        width: '550px',
        height: '308px'
      },
      '@media screen and (max-width: 575px)': {
        width: '96vw',
        height: 'calc(96vw * 0.56)'
      }
    }
  }
};

const YouTubeEmbed = ({ embedId, classes }) => (
  <div className={classes.youtubeEmbedContainer}>
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Dark Galaxies"
      className={classes.youtubeEmbed}
    />
  </div>
);

YouTubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default withStyles(styles)(YouTubeEmbed);
