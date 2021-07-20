import React from 'react';
import withStyles from '../../src/tools/withStyles';

const styles = () => {
    return {
        timelineContainer: {
            width: '90%',
            margin: '30px 0 50px',
            '@media screen and (min-width: 1681px)': {
                width: '85%'
            },
            '@media screen and (min-width: 1921px)': {
                width: '70%'
            }
        },
        timelineTitle: {
            textAlign: 'center'
        },
        timeline: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            '@media screen and (max-width: 1366px)': {
                flexDirection: 'column'
            }
        },
        quarter: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '@media screen and (max-width: 1366px)': {
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }
        },
        timeEvent: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '100px',
            height: '50px',
            margin: '10px 5px',
            padding: '5px',
            boxShadow: '0px 0px 50px 20px rgba(38, 218, 253, 0.2)',
            background: 'radial-gradient(circle, rgba(0,60,59,1) 70%, rgba(12,71,83,1) 100%)',
            fontSize: '9px',
            fontWeight: 'bold',
            textAlign: 'center',
            textTransform: 'uppercase',
            color: '#26DAFD',
            cursor: 'default',
            '&:after': {
                position: 'absolute',
                zIndex: '-1',
                top: 0,
                left: 0,
                transform: 'translate(-4px, -4px)',
                content: '""',
                display: 'block',
                width: '108px',
                height: '58px',
                border: '2px solid #003C3B',
                borderRadius: '5px',
                backgroundColor: '#26DAFD',
            },
            '@media screen and (max-width: 1366px)': {
                margin: '10px'
            }
        },
        eventTitle: {
            margin: '0px !important'
        },
        eventDescription: {
            margin: '0px !important'
        }
    }
};

const TimeLine = ({ classes }) => {
    return (
        <div className={classes.timelineContainer}>
            <h1 className={classes.timelineTitle}>Timeline</h1>
            <div className={classes.timeline}>
                <div className={classes.quarter}>
                    <div className={classes.timeEvent}>
                        <p className={classes.eventTitle}>Q3'20</p>
                        <p className={classes.eventDescription}>Concept creation</p>
                    </div>
                </div>
                <div className={classes.quarter}>
                    <div className={classes.timeEvent}>
                        <p className={classes.eventTitle}>Q4'20</p>
                        <p className={classes.eventDescription}>Game design beginning</p>
                    </div>
                </div>
                <div className={classes.quarter}>

                    <div className={classes.timeEvent}>
                        <p className={classes.eventTitle}>Q1'21</p>
                        <p className={classes.eventDescription}>Card pack construction</p>
                    </div>
                    <div className={classes.timeEvent}>
                        <p className={classes.eventTitle}>Q1'21</p>
                        <p className={classes.eventDescription}>Website creation</p>
                    </div>
                    <div className={classes.timeEvent}>
                        <p className={classes.eventTitle}>Q1'21</p>
                        <p className={classes.eventDescription}>Card pack sales and marketing development</p>
                    </div>
                </div>
                <div className={classes.quarter}>
                    <div className={classes.timeEvent}>
                        <p className={classes.eventTitle}>Q2'21</p>
                        <p className={classes.eventDescription}>Wax schema and template creation</p>
                    </div>
                    <div className={classes.timeEvent}>
                        <p className={classes.eventTitle}>Q2'21</p>
                        <p className={classes.eventDescription}>Continued game development</p>
                    </div>
                    <div className={classes.timeEvent}>
                        <p className={classes.eventTitle}>Q2'21</p>
                        <p className={classes.eventDescription}>Continued card art creation</p>
                    </div>
                    <div className={classes.timeEvent}>
                        <p className={classes.eventTitle}>Q2'21</p>
                        <p className={classes.eventDescription}>Poker Chip Pack Promorion Give Away</p>
                    </div>                    
                </div>
                <div className={classes.quarter}>
                    <div className={classes.timeEvent}>
                        <p className={classes.eventTitle}>Q3'21</p>
                        <p className={classes.eventDescription}>Card packs available</p>
                    </div>
                    <div className={classes.timeEvent}>
                        <p className={classes.eventTitle}>Q3'21</p>
                        <p className={classes.eventDescription}>Card pack opening available</p>
                    </div>
                </div>
                <div className={classes.quarter}>
                    <div className={classes.timeEvent}>
                        <p className={classes.eventTitle}>Q4'21</p>
                        <p className={classes.eventDescription}>Alpha 1 game release</p>
                    </div>
                    <div className={classes.timeEvent}>
                        <p className={classes.eventTitle}>Q4'21</p>
                        <p className={classes.eventDescription}>Start planning of game tokens</p>
                    </div>
                </div>
                <div className={classes.quarter}>
                    <div className={classes.timeEvent}>
                        <p className={classes.eventTitle}>Q1'22</p>
                        <p className={classes.eventDescription}>Bug fixing from alpha 1 release</p>
                    </div>
                    <div className={classes.timeEvent}>
                        <p className={classes.eventTitle}>Q1'22</p>
                        <p className={classes.eventDescription}>Alpha 2 game release</p>
                    </div>
                    <div className={classes.timeEvent}>
                        <p className={classes.eventTitle}>Q1'22</p>
                        <p className={classes.eventDescription}>Bug fixing from alpha 2 release</p>
                    </div>
                </div>
                <div className={classes.quarter}>
                    <div className={classes.timeEvent}>
                        <p className={classes.eventTitle}>Q2'22</p>
                        <p className={classes.eventDescription}>Beta 1 release</p>
                    </div>
                    <div className={classes.timeEvent}>
                        <p className={classes.eventTitle}>Q2'22</p>
                        <p className={classes.eventDescription}>Bug fixing from beta 1 release</p>
                    </div>
                    <div className={classes.timeEvent}>
                        <p className={classes.eventTitle}>Q2'22</p>
                        <p className={classes.eventDescription}>Start development of game tokens</p>
                    </div>                    
                </div>
                <div className={classes.quarter}>
                    <div className={classes.timeEvent}>
                        <p className={classes.eventTitle}>Q3'22</p>
                        <p className={classes.eventDescription}>Game release</p>
                    </div>
                    <div className={classes.timeEvent}>
                        <p className={classes.eventTitle}>Q3'22</p>
                        <p className={classes.eventDescription}>Start development of land</p>
                    </div>                    
                    <div className={classes.timeEvent}>
                        <p className={classes.eventTitle}>Q3'22</p>
                        <p className={classes.eventDescription}>Start development of Faction Wars</p>
                    </div>                    
                </div>
                <div className={classes.quarter}>
                    <div className={classes.timeEvent}>
                        <p className={classes.eventTitle}>Continued development</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withStyles(styles)(TimeLine);