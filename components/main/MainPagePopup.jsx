import React from 'react';
import Button from '../../src/Button';
import withStyles from '../../src/tools/withStyles';

const styles = () => {
    return {
        popup: {
            position: 'fixed',
            top: 0,
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.2)'
        },
        popupInner: {
            position: 'relative',
            padding: '32px',
            width: '100%',
            maxWidth: '640px',
            backgroundColor: '#FFF'
        },
        popupCloseBtn: {
            position: 'absolute',
            top: '16px',
            right: '16px',
            backgroundColor: 'rgba(2, 17, 20, 0.7)'
        }
    }
};

const MainPagePopup = ({ classes, togglePopup }) => {
    return (
        <div className={classes.popup}>
            <div className={classes.popupInner}>
                <Button 
                    className={classes.popupCloseBtn} 
                    onClick={togglePopup}
                >
                    Close
                </Button>
            </div>
        </div>
    );
};

export default withStyles(styles)(MainPagePopup);