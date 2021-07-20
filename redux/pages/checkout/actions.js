import Commerce from '@chec/commerce.js';
// const commerce = new Commerce('pk_test_2961373003a78896d8537538484528c419c5a481edd85');
const commerce = new Commerce('pk_296130580df9d56a07bdca0a258a20972b98ac58fe3b7');
import store from "../../store"

export const actionCheckout = (formData) => {
    return (dispatch, getState) => {
        dispatch({ type: 'PENDING_CHECKOUT' });
        const checkoutId = localStorage.getItem('checkoutId')
        return commerce.checkout.capture(checkoutId, {
            "customer": {
                "email": formData.get('email')
            },
            "shipping": {
                name: formData.get('name'),
                street: formData.get('shippingAddress'),
                town_city: formData.get('town'),
                county_state: formData.get('privince'),
                postal_zip_code: formData.get('zipCode'),
                country: formData.get('country')
            },
            "fulfillment": {
                shipping_method: formData.get('shippingMethod')
            },
            "payment": {
                // gateway: 'test_gateway',
                gateway: formData.get('paymentGateway'),
                card: {
                    number: formData.get('cardNumber'),
                    expiry_month: formData.get('expiredDate').split('/')[0],
                    expiry_year: formData.get('expiredDate').split('/')[1],
                    cvc: formData.get('CVC'),
                    postal_zip_code: formData.get('zipCode'),
                },
            },
        }).then((res) => {
            dispatch({
                type: 'SUCCESS_CHECKOUT_PROCESS',
                payload: res
            })
            return res;
        }).catch((e) => {
            return e
        })
    };
};

export const actionPaypalAuth = (formData) => {
    return (dispatch, getState) => {
        dispatch({ type: 'PENDING_PAYPALAUTH' });
        const checkoutId = localStorage.getItem('checkoutId')
        return commerce.checkout.capture(checkoutId, {
            "customer": {
                "email": formData.get('email')
            },
            "shipping": {
                name: formData.get('name'),
                street: formData.get('shippingAddress'),
                town_city: formData.get('town'),
                county_state: formData.get('privince'),
                postal_zip_code: formData.get('zipCode'),
                country: formData.get('country')
            },
            "fulfillment": {
                shipping_method: formData.get('shippingMethod')
            },
            "payment": {
                gateway: 'paypal',
                paypal: {
                    action: 'authorize',
                },
            },
        }).then((res) => {
            dispatch({
                type: 'SUCCESS_PAYPAL_AUTH'
            })
            return res;
        }).catch((e) => {
            return e
        })
    };
};

export const actionPaypalCaptureOrder = (paypalAuth, formData) => {
    return (dispatch, getState) => {
        dispatch({ type: 'PENDING_PAYPALCAPTURE' });
        
        try {
            const checkoutId = localStorage.getItem('checkoutId')
            return commerce.checkout.capture(checkoutId, {
                "customer": {
                    "email": formData.get('email')
                },
                "shipping": {
                    name: formData.get('name'),
                    street: formData.get('shippingAddress'),
                    town_city: formData.get('town'),
                    county_state: formData.get('privince'),
                    postal_zip_code: formData.get('zipCode'),
                    country: formData.get('country')
                },
                "fulfillment": {
                    shipping_method: formData.get('shippingMethod')
                },
                "payment": {
                    gateway: 'paypal',
                    paypal: {
                        action: 'capture',
                        payment_id: paypalAuth.paymentID,
                        payer_id: paypalAuth.payerID,
                    },
                },
            }).then((res) => {
                dispatch({
                    type: 'SUCCESS_PAYPAL_CAPTURE',
                    payload: res
                })
                return res;
            }).catch((e) => {
                return e
            })
        } catch (e) {
            console.log(e)
        }

    };
};

export const actionGetToken = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'PENDING_GET_TOKEN' });
        return commerce.checkout
            .generateToken(store.getState().cartPage.cartId, { type: 'cart' })
            .then((tokens) => {
                dispatch({
                    type: 'SUCCESS_GET_TOKEN',
                    payload: tokens.id
                })
                return tokens
            })
    };
};

export const actionAvaialbleCountry = () => {
    return (dispatch, getState) => {
        try {
            dispatch({ type: 'PENDING_AVAIALABLE_COUNTRY' });
            return commerce.services
                .localeListShippingCountries(store.getState().checkoutPage.checkoutId)
                .then((response) => {
                    return response
                }).catch((e) => {
                });
        } catch (e) {
        }

    };
};

export const actionAvaialbleSubdivision = (country) => {
    return (dispatch, getState) => {
        try {
            dispatch({ type: 'PENDING_AVAIALABLE_COUNTRY_SUBDIVISION' });
            return commerce.services
                .localeListSubdivisions(country)
                .then((response) => {
                    return response
                }).catch((e) => {
                });
        } catch (e) {
        }

    };
};

export const actionShippingMethod = (country, subDiv) => {
    return (dispatch, getState) => {
        dispatch({ type: 'PENDING_AVAIALABLE_COUNTRY_SUBDIVISION' });
        return commerce.checkout
            .getShippingOptions(store.getState().checkoutPage.checkoutId, {
                country: country,
                region: subDiv,
            }).then((response) => {
                return response
            });

    };
};

// export const actionGetOrder = async () => {
//     const customId = await commerce.customers.id();
//     console.log(customId)
//     return (dispatch, getState) => {
//         try {
//             dispatch({ type: 'PENDING_GET_ORDER' });
//             return commerce.customer
//                 .getOrder(localStorage.getItem('orderId'), null)
//                 .then((res) => {
//                     dispatch({ type: 'SUCESS_GET_ORDER' });
//                     console.log(res)
//                     return res
//                 }).catch((e) => {
//                     return e
//                 });
//         } catch (e) {
//             console.log(e)
//         }
//     };
// };