import { rgba } from 'polished';

export default (theme) => {
  return {
    root: {
      display: 'block',
      verticalAlign: 'middle',
      padding: 0,
      '@media screen and (max-width: 600px)': {
        width: '200px',
        margin: '0 auto'
      },
      '@media screen and (max-width: 400px)': {
        width: '150px',
      },

      '&$exiting, &$exited': {
        '& $header, & $children': {
          backgroundColor: 'transparent',
        },
        '& $icon': {
          opacity: 0,
        },
        '& $separator': {
          width: 0,
        },
      },

      '&:hover': {
        '& $separator': {
          borderColor: theme.color.primary.base,
          boxShadow: `0 0 ${theme.shadowLength}px `
            + rgba(theme.color.primary.base, theme.alpha),
        },
      },
    },
    staffProfileWrap: {
      display: 'flex',
      padding: 7,
      '@media screen and (max-width: 600px)': {
        flexDirection: 'column-reverse',
        alignItems: 'center',
        padding: 0
      }
    },
    staffInfoWrap: {
      display: 'flex', 
      flexDirection: 'column', 
      width: 'calc(100% - 127px)',
      '@media screen and (max-width: 600px)': {
        width: '100%'
      }
    },
    staffName: {
      padding: 20,
      transition: `all ${theme.animTime}ms ease-out`,
      backgroundColor: rgba(theme.background.primary.level1, theme.alpha),
      borderWidth: '0 0 1px',
      borderStyle: 'solid',
      borderColor: theme.color.primary.dark,
      '@media screen and (max-width: 400px)': {
        padding: '15px 10px'
      },

      '& h1, & h2, & h3, & h4, & h5, & h6': {
        margin: 0,
        fontSize: 24,
        '@media screen and (max-width: 600px)': {
          textAlign: 'center'
        },
        '@media screen and (max-width: 400px)': {
          fontSize: 20
        },
      }
    },
    icon: {
      position: 'absolute',
      right: theme.margin,
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: props => theme.typography.headerSizes[props.headerSize],
      color: theme.color.header.base,
      textShadow: `0 0 ${theme.shadowLength}px ` + rgba(theme.color.header.base, theme.alpha),
      transition: `all ${theme.animTime}ms ease-out`,
      opacity: 1,
    },
    staffPosition: {
      transition: `all ${theme.animTime}ms ease-out`,
      backgroundColor: rgba(theme.background.primary.level0, theme.alpha),
      padding: 20,
      '@media screen and (max-width: 400px)': {
        padding: 10
      },

      '& p, & ul, & ol, & dl, & blockquote': {
        margin: 0,
        fontSize: 24,
        '@media screen and (max-width: 600px)': {
          textAlign: 'center'
        },
        '@media screen and (max-width: 400px)': {
          fontSize: 20
        },
      },
    },
    staffPicWrap: {
      width: '127px',
      height: '153px',
      transition: `all ${theme.animTime}ms ease-out`,
      opacity: 0.7,
      '@media screen and (max-width: 600px)': {
        width: '200px',
        height: '230px'
      },
      '@media screen and (max-width: 400px)': {
        width: '150px',
        height: '180px'
      }
    },
    staffPic: {
      width: '127px',
      height: '153px',
      '@media screen and (max-width: 600px)': {
        width: '200px',
        height: '230px'
      },
      '@media screen and (max-width: 400px)': {
        width: '150px',
        height: '180px'
      }
    },

    entering: {},
    entered: {},
    exiting: {},
    exited: {},
  };
};
