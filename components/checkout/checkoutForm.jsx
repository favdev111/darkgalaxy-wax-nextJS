import React, { useState, useEffect, useMemo } from "react";
import { connect } from "react-redux";

import Button from "../../src/Button";
import Words from '../../src/Words';
import ShippingForm from '../../components/checkout/shippingForm'
import PaymentForm from '../../components/checkout/paymentForm'
import { actionCheckout, actionPaypalAuth, actionPaypalCaptureOrder } from '../../redux/pages/checkout/actions';
import { createNotification } from "../../components/products/ProductionNotifications";
import Router from 'next/router';
import Loading from "../../src/Loading";



const CheckoutForm = ({ actionCheckout, actionPaypalAuth, actionPaypalCaptureOrder }) => {

    const [isPaypalAuth, setIsPaypalAuth] = useState(false);

    useEffect(() => {
        let sqPaymentScript = document.createElement('script');
        sqPaymentScript.src = "https://js.squareupsandbox.com/v2/paymentform";
        sqPaymentScript.type = "text/javascript"
        sqPaymentScript.async = false;
        document.getElementsByTagName('head')[0].appendChild(sqPaymentScript);
        
    }, []);
    
    const square = new SqPaymentForm({
        // Initialize the payment form elements
        applicationId: 'sandbox-sq0idb-IMo9sEtWFy6-4Pah3oKshg',
        inputClass: 'sq-input',
        autoBuild: false,
        // Initialize the credit card placeholders
        cardNumber: {
            elementId: 'sq-card-number',
            placeholder: 'Card Number'
        },
        cvv: {
            elementId: 'sq-cvv',
            placeholder: 'CVV'
        },
        expirationDate: {
            elementId: 'sq-expiration-date',
            placeholder: 'MM/YY'
        },
        postalCode: {
            elementId: 'sq-postal-code',
            placeholder: 'Postal Code',
        },
        callbacks: {
            /**
             * Callback function: cardNonceResponseReceived
             * Triggered when: SqPaymentForm completes a card nonce request
             */
            cardNonceResponseReceived: function (errors, nonce, cardData) {
                if (errors) {
                    // Log errors from nonce generation to the browser developer console.
                    console.error('Encountered errors:');
                    errors.forEach(function (error) {
                        console.error('  ' + error.message);
                    });
                    alert('Encountered errors, check browser developer console for more details');
                    return;
                }
                // TODO: Replace alert with code in step 2.1
                alert(`The generated nonce is:\n${nonce}`);
            },
        },
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        if (formData.get('paymentGateway') == 'paypal') {
            setIsPaypalAuth(true);
            const resAuth = await actionPaypalAuth(formData);
            if (resAuth.payment_id) {
                renderPaypalButton(resAuth, formData);
            } else {
                createNotification('error', 'Error Occurred');
                Router.push('/cart');
            }

        } else {
            // if (formData.get('cardNumber') && formData.get('expiredDate') && formData.get('CVC')) {
            //     const res = await actionCheckout(formData);
            //     if (res.id) {
            //         Router.push('/order')
            //     } else {
            //         createNotification('error', 'Error Occurred');
            //     }
            // } else {
            //     createNotification('error', 'Please fill payment details');
            // }
            square.requestCardNonce();

        }
    }

    const renderPaypalButton = (paypalAuth, formData) => {
        paypal.Button.render({
            env: 'production', // Or 'sandbox',
            commit: true, // Show a 'Pay Now' button
            style: {
                color: 'white',
                shape: 'rect',
                label: 'pay',
                size: 'large'
            },
            payment: function () {
                return paypalAuth.payment_id // The payment ID from earlier

            },
            onAuthorize: async function (data, actions) {
                // Handler if customer DOES authorize payment (this is where you get the payment_id & payer_id you need to pass to Chec)
                const res = await actionPaypalCaptureOrder(data, formData);
                if (res.id) {
                    Router.push('/order');
                } else {
                    createNotification('error', 'Error Occurred');
                }
            },
            onCancel: function (data, actions) {
                createNotification('error', 'Process is cancelled');
            }
        },
            '#paypal-button-container'
        );
    }

    const cancelPay = () => {
        setIsPaypalAuth(false)
    }


    if (isPaypalAuth) {
        return <div>
            <div style={{
                display: 'block',
                width: '100vw',
                height: '100vh',
                background: 'radial-gradient(circle at center, rgba(0, 156, 225, 0.75) 0%, rgba(0, 48, 135, 0.9) 100%)',
                position: 'fixed',
                top: 0,
                left: 0,
                opacity: 0.5
            }}>
            </div>
            <div
                style={{
                    display: 'block',
                    width: '100vw',
                    height: '100vh',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                }}
            >
                <button
                    style={{
                        padding: '10px 20px',
                        borderRadius: 20,
                        border: 'none',
                        position: 'absolute',
                        top: 20,
                        right: 20,
                    }}
                    onClick={() => cancelPay()}
                >
                    Cancel
                </button>
                <div
                    id="paypal-button-container"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '40%'
                    }}
                ></div>
            </div>
        </div>
    } else {
        return (
            <React.Fragment>
                <form onSubmit={handleSubmit}>
                    <ShippingForm />
                    <PaymentForm />
                    <Button
                        animate
                        style={{
                            marginBottom: 10,
                            float: 'right'
                        }}
                        type="submit"
                    >
                        <Words>OK</Words>
                    </Button>
                </form>
                <div id="form-container">
                    <div id="sq-card-number"></div>
                    <div className="third" id="sq-expiration-date"></div>
                    <div className="third" id="sq-cvv"></div>
                    <div className="third" id="sq-postal-code"></div>
                </div>
            </React.Fragment>
        )
    }

};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = {
    actionCheckout,
    actionPaypalAuth,
    actionPaypalCaptureOrder
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutForm);