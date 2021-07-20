import React from 'react';
import withStyles from '../../src/tools/withStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTelegram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const styles = () => {
    return {
        socialLinksBar: {
            position: 'fixed',
            top: '50%',
            left: 0,
            transform: 'translate(25%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            '@media screen and (max-width: 1024px)': {
                position: 'static',
                transform: 'none',
                flexDirection: 'row',
                marginBottom: 30
            }
        },
        socialLink: {
            marginBottom: 20,
            '@media screen and (max-width: 1024px)': {
                marginRight: 10,
                marginBottom: 0,
                marginLeft: 10
            },
            '&:last-child': {
                marginBottom: 0,
                '@media screen and (max-width: 1024px)': {
                    marginRight: 0
                }
            },
            '&:first-child': {
                '@media screen and (max-width: 1024px)': {
                    marginLeft: 0
                }
            }
        }
    }
};

const SocialLinks = ({ classes }) => {
    const [isOver, setOver] = React.useState(false);
    const [socialLink, setSocialLink] = React.useState(null);
    return (
        <div className={classes.socialLinksBar}>
            <a 
                href='https://discord.gg/YJCsSzh5w2' 
                target='_blank' 
                className={classes.socialLink}
                onMouseEnter={() => {
                    setSocialLink('discord');
                    setOver(true);
                }}
                onMouseLeave={() => {
                    setOver(false);
                    setSocialLink(null);
                }}
            >
                <FontAwesomeIcon 
                    icon={faDiscord} 
                    size='2x' 
                    color={isOver && socialLink === 'discord' ? '#a1ecfb' : '#26dafd'}
                />
            </a>
            <a 
                href='https://t.me/darkgalaxiesannouce' 
                target='_blank' 
                className={classes.socialLink}
                onMouseEnter={() => {
                    setSocialLink('telegram');
                    setOver(true);
                }}
                onMouseLeave={() => {
                    setOver(false);
                    setSocialLink(null);
                }}
            >
                <FontAwesomeIcon 
                    icon={faTelegram} 
                    size='2x' 
                    color={isOver && socialLink === 'telegram' ? '#a1ecfb' : '#26dafd'}
                />
            </a>
            <a 
                href='https://twitter.com/galaxies_dark' 
                target='_blank' 
                className={classes.socialLink}
                onMouseEnter={() => {
                    setSocialLink('twitter');
                    setOver(true);
                }}
                onMouseLeave={() => {
                    setOver(false);
                    setSocialLink(null);
                }}
            >
                <FontAwesomeIcon 
                    icon={faTwitter} 
                    size='2x' 
                    color={isOver && socialLink === 'twitter' ? '#a1ecfb' : '#26dafd'}
                />
            </a>
            <a 
                href='https://www.facebook.com/darkgalaxiesofficial' 
                target='_blank' 
                className={classes.socialLink}
                onMouseEnter={() => {
                    setSocialLink('facebook');
                    setOver(true);
                }}
                onMouseLeave={() => {
                    setOver(false);
                    setSocialLink(null);
                }}
            >
                <FontAwesomeIcon 
                    icon={faFacebook} 
                    size='2x' 
                    color={isOver && socialLink === 'facebook' ? '#a1ecfb' : '#26dafd'}
                />
            </a>
        </div>
    );
};

export default withStyles(styles)(SocialLinks);
