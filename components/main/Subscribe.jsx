import React from 'react';
import withStyles from '../../src/tools/withStyles';
import Button from '../../src/Button';
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

const styles = () => {
    return {
        mailchimpWrap: {
            minHeight: '180px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
        },
        mailchimpForm: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        mailchimpInput: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            border: '2px solid #26DAFD',
            borderRadius: '5px',
            marginBottom: '20px',
            padding: '10px 15px',
            color: '#26DAFD',
            fontSize: '18px',
            '&:focus': {
                outline: 'none'
            }
        },
        mailchimpBtn: {
            marginBottom: '10px'
        },
        loadingMsg: {
            color: '#0652DD'
        },
        errorMsg: {
            color: '#ED4C67'
        },
        successMsg: {
            color: '#009432'
        }
    }
};

const Subscribe = ({ classes }) => {
    const url = "https://darkgalaxies.us1.list-manage.com/subscribe/post?u=67f162b49d570e6da8b765ee2&amp;id=ba9c23d6bd";
    const { loading, error, success, message, handleSubmit } = useMailChimpForm(url);
    const { fields, handleFieldChange } = useFormFields({ EMAIL: "" });

    let errorMessage;
    if (message && message.includes('Please enter a value')) {
        errorMessage = 'You need an email address if you want to receive newsletters :)';
    } else if (message && message.includes('already subscribed')) {
        errorMessage = 'You must really love Dark Galaxies as you are trying to subscribe twice!';
    } else {
        errorMessage = 'Splick - broke a plasma conduit somewhere!';
    }

    React.useEffect(() => {
        if (success) {
            setTimeout(() => {
                document.location.reload();
            }, 3000);
        }
    });

    return (
        <div className={classes.mailchimpWrap}>
            <form
                onSubmit={event => { 
                    event.preventDefault();
                    handleSubmit(fields);
                }}
                className={classes.mailchimpForm}
            >
                Subscribe Today
                <input
                    id="EMAIL"
                    type="email"
                    value={fields.EMAIL}
                    onChange={handleFieldChange}
                    className={classes.mailchimpInput}
                    autoComplete='off'
                    autoCapitalize='off'
                    placeholder='enter email address'
                />
                <Button 
                    className={classes.mailchimpBtn} 
                    disabled={success ? true : false}
                >
                    I Want The News
                </Button>
            </form>
            {loading && <p className={classes.loadingMsg}>Sending at the speed of light...</p>}
            {error && <p className={classes.errorMsg}>{errorMessage}</p>}
            {success && <p className={classes.successMsg}>Thank you for being awesome - watch our for news in your InBox!</p>}
        </div>
    );
}

export default withStyles(styles)(Subscribe);