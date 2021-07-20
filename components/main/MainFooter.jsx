import React from 'react';
import withStyles from '../../src/tools/withStyles';
import FooterAuthor from '../../site/components/FooterAuthor';

const styles = theme => {
    return {
        footer: {
            opacity: theme.alpha / 2,
            fontSize: '20px',
            paddingBottom: '10px'
        },
        author: {
            '@media screen and (max-width: 440px)': {
                fontSize: '16px'
            }
        }
    };
};

const MainFooter = ({ classes, anim, onLink }) => {
    return (
        <footer className={classes.footer}>
            <FooterAuthor
                show={anim.entered}
                onLink={onLink}
                className={classes.author}
                target='_blank'
            />
        </footer>
    );
};

export default withStyles(styles)(MainFooter);