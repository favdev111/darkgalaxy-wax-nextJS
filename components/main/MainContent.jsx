import React from 'react';
import withStyles from '../../src/tools/withStyles';
import Words from '../../src/Words';
import Paragraph from '../../src/Paragraph';

const styles = () => {
    return {
        main: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 75
        },
        logo: {
            width: '660px',
            height: '240px',
            '@media screen and (max-width: 768px)': {
                width: '500px',
                height: 'auto'
            },
            '@media screen and (max-width: 576px)': {
                width: '400px',
                height: 'auto'
            },
            '@media screen and (max-width: 440px)': {
                width: '300px',
                height: 'auto'
            },
            '@media screen and (max-width: 330px)': {
                width: '200px',
                height: 'auto'
            }
        },
        mainDescription: {
            margin: '20px 0 !important',
            '@media screen and (max-width: 768px)': {
                fontSize: '18px !important'
            }
        },
        paragraph: {
            width: '80%', 
            textAlign: 'center' 
        }
    };
};

const MainContent = ({ classes, anim, showPopup, togglePopup }) => {
    return (
        <React.Fragment>
            <div className={classes.main}>
                <img
                    src='../../static/img/Logo.png'
                    alt='logo'
                    className={classes.logo}
                />
                <h1 className={classes.mainDescription}>
                    <Words
                        animate
                        show={anim.entered}
                    >
                        Where Worlds Collide
                    </Words>
                </h1>
                <Paragraph className={classes.paragraph}>
                    In the year 2028, after much turmoil and strife humanity finally attained world unity. 
                    After an unprecedented age of global rebellion humanity managed to look past the scars of 
                    the past and move onto greater things. By the year 2032, humans completed their first space station. 
                    It was a huge achievement from every nation on earth who finally realised what could be achieved 
                    when everyone worked together in the pursuit of bettering the species. By the year 2036 humanity was
                    now moving beyond the planet earth and sailing the stars.
                </Paragraph>
                <Paragraph className={classes.paragraph}>
                    Stewards of exploration, humanity soon began to come into contact with several species of life. 
                    They learned and traded knowledge and grew even more with the knowledge they had gained from many 
                    varied other alien species.
                </Paragraph>
                <Paragraph className={classes.paragraph}>
                    As the humans ventured further to the outer reaches of space it soon became apparent that they needed to 
                    colonise more planets so live and exists beyond the constraints of Earth.
                </Paragraph>
                <Paragraph className={classes.paragraph}>
                    They soon found out that they were not the only species trying to populate new home worlds and found themselves 
                    in conflict with other races.
                </Paragraph>
            </div>
        </React.Fragment>
    );
};

export default withStyles(styles)(MainContent);