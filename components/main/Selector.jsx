import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleSelector } from '../../redux/pages/characters/actions';
import Link from '../../site/components/Link';
import Button from '../../src/Button';
import withStyles from '../../src/tools/withStyles';

const styles = () => ({
    selectorItemWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20
    },
    selectorItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    selectorItemImg: {
        width: 337,
        height: 450,
        border: '5px solid #26DAFD',
        borderRadius: 15,
        '@media screen and (max-width: 768px)': {
            width: 300,
            height: 400
        },
        '@media screen and (max-width: 400px)': {
            width: 225,
            height: 300
        }
    },
    selectorItemRace: {
        margin: '15px 0',
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    selectorItemRaceDescription: {
        height: 60,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        '@media screen and (max-width: 768px)': {
            width: '90%',
            height: 75,
            fontSize: 16
        }
    },
    selectorRaceSwitches: {
        display: 'flex',
        '@media screen and (max-width: 768px)': {
            flexDirection: 'column',
            alignItems: 'center'
        }
    },
    selectorRaceBtn: {
        width: 120,
        margin: '0 5px',
        textAlign: 'center',
        '@media screen and (max-width: 768px)': {
            margin: '5px 0'
        },
        '&:first-child': {
            margin: '0 5px 0 0',
            '@media screen and (max-width: 768px)': {
                margin: '0 0 5px 0'
            }
        },
        '&:last-child': {
            margin: '0 0 0 5px',
            '@media screen and (max-width: 768px)': {
                margin: '5px 0 0 0'
            }
        }
    }
});

class Selector extends Component {
    componentDidMount() {
        this.selectorSwitch();
    }

    selectorSwitch = () => {
        this.selectorInterval = setInterval(() => {
            const { 
                artPage: {
                    selectorItems
                }, 
                toggleSelector 
            } = this.props;
            const currentItemId = selectorItems.find(item => item.display === true).id;
            const itemsLength = selectorItems.length;
            const nextId = currentItemId === itemsLength ? 1 : currentItemId + 1;
            toggleSelector(nextId);
        }, 10000);
    }

    startSelector = () => {
        this.selectorSwitch();
    }
    
    stopSelector = () => {
        clearInterval(this.selectorInterval);
    }

    selectorHandler = id => {
        const { toggleSelector } = this.props;
        toggleSelector(id);
        this.stopSelector();
        this.startSelector();
    }

    render() {
        const { 
            artPage: { 
                selectorItems 
            },
            classes, 
            onLink 
        } = this.props;
        const currentSelectorItem = selectorItems.find(item => item.display === true);
        return (
            <div className={classes.selectorItemWrapper}>
                <h2>Choose your race</h2>
                {currentSelectorItem && (
                    <div className={classes.selectorItem}>
                        <Link href={currentSelectorItem.link} onLink={onLink}>
                            <img className={classes.selectorItemImg} src={currentSelectorItem.src} />
                        </Link>
                        <div className={classes.selectorItemRace}>{currentSelectorItem.race}</div>
                        <div className={classes.selectorItemRaceDescription}>{currentSelectorItem.description}</div>
                    </div>
                )}
                {selectorItems && currentSelectorItem && (
                    <div className={classes.selectorRaceSwitches}>
                        {selectorItems.map(item => (
                            <Button
                                className={classes.selectorRaceBtn}
                                disabled={item.id === currentSelectorItem.id ? true : false}
                                onClick={() => this.selectorHandler(item.id)}
                                key={item.race}
                            >
                                {item.race}
                            </Button>
                        ))}
                    </div>
                )}
            </div>
        )
    };
};

const mapStateToProps = state => ({
    artPage: state.artPage
});

const mapDispatchToProps = {
    toggleSelector
};

const connectedSelector = connect(mapStateToProps, mapDispatchToProps)(Selector);

export default withStyles(styles)(connectedSelector);