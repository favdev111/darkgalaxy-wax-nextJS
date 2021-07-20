import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { actionRetrieveCart } from "../../redux/pages/cart/actions";
import { actionGetToken, actionAvaialbleCountry, actionAvaialbleSubdivision, actionShippingMethod } from "../../redux/pages/checkout/actions";
import CommonInput from "./commonInput";
import { Row, Col } from "../../src/Grid";
import Loading from "../../src/Loading";



const ShippingForm = ({
    actionRetrieveCart,
    actionGetToken,
    actionAvaialbleCountry,
    actionAvaialbleSubdivision,
    actionShippingMethod
}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [cartContents, setCartContents] = useState();
    const [countries, setCountries] = useState();
    const [subdivisions, setSubdivisions] = useState();
    const [shippingMethod, setShippingMethod] = useState();

    useEffect(() => {
        const asyncGetCarts = async () => {
            try {
                const cartContentArr = await actionRetrieveCart();
                await actionGetToken();
                const countryList = await actionAvaialbleCountry();
                setCartContents(cartContentArr);
                setCountries(countryList.countries);
                setIsLoading("false");
            } catch (e) { }
        };
        asyncGetCarts();
    }, [isLoading]);

    const changeCountry = async (e) => {
        if (e.target.value) {
            const result = await actionAvaialbleSubdivision(e.target.value);
            setSubdivisions(result.subdivisions);
        }
    }

    const changeSubDiv = async (e) => {
        const countryList = document.querySelector('#availableCountry').value;
        if (countryList && e.target.value) {
            const result = await actionShippingMethod(countryList, e.target.value);
            setShippingMethod(result);
        }
    }

    if (cartContents) {
        return (
            <React.Fragment>
                <Row>
                    <Col s={12} m={6}>
                        <h3 style={{
                            margin: 0
                        }}>Shipping Detail</h3>
                    </Col>
                    <Col
                        s={12} m={6}
                        style={{
                            textAlign: 'right'
                        }}>
                        {cartContents.total_unique_items} items &nbsp; &nbsp;
                        {cartContents.subtotal.formatted_with_symbol}
                    </Col>
                </Row>
                <Row
                    style={{
                        padding: '0 10px'
                    }}
                >
                    <CommonInput
                        label="Name"
                        name="name"
                        required={true}
                    />
                </Row>
                <Row style={{
                    padding: '0 10px'
                }}>
                    <CommonInput
                        label="Email Address"
                        name="email"
                        required={true}
                    />
                </Row>
                <Row style={{
                    padding: '0 10px'
                }}>
                    <CommonInput
                        label="Shipping Address"
                        name="shippingAddress"
                        required={true}
                    />
                </Row>
                <Row style={{
                    padding: '0 10px'
                }}>
                    <label>Country</label>
                    <select
                        name="country"
                        id="availableCountry"
                        style={{
                            width: '100%',
                            background: 'transparent',
                            height: 30,
                            border: '1px solid #26dafd',
                            color: '#26dafd'
                        }}
                        onChange={(e) => changeCountry(e)}
                        required
                    >
                        {countries && (
                            Object.keys(countries).map(function (key) {
                                return <option value={key} key={key} style={{color:'black'}}>{countries[key]}</option>
                            })
                        )}
                    </select>
                </Row>
                
                <Row>
                    <Col s={12} m={4}>
                        <CommonInput
                            label="Town/City"
                            name="town"
                            required={true}
                        />
                    </Col>
                    <Col s={12} m={4}>
                        <label>
                            Country/State/Province
                        </label>
                        <select
                            name="privince"
                            style={{
                                width: '100%',
                                background: 'transparent',
                                height: 30,
                                border: '1px solid #26dafd',
                                color: '#26dafd'
                            }}
                            onChange={(e) => changeSubDiv(e)}
                            required
                        >
                            <option>
                                Please choose Country/State/Province
                            </option>
                            {subdivisions && (
                                Object.keys(subdivisions).map(function (key) {
                                    return <option value={key} key={key} style={{color: 'black'}}>{subdivisions[key]}</option>
                                })
                            )}
                        </select>
                    </Col>
                    <Col s={12} m={4}>
                        <CommonInput
                            label="Zipcode"
                            name="zipCode"
                            required={true}
                        />
                    </Col>

                </Row>
                <Row style={{
                    padding: '0 10px'
                }}>
                    <label>
                        Shipping Method
                    </label>
                    <select
                        name="shippingMethod"
                        style={{
                            width: '100%',
                            background: 'transparent',
                            height: 30,
                            border: '1px solid #26dafd',
                            color: '#26dafd'
                        }}
                        required
                    >   
                        {shippingMethod && (
                            shippingMethod.map((item, key) => {
                                return <option value={item.id} key={key} style={{color: 'black'}}>{item.description}({item.price.formatted_with_symbol})</option> 
                            })
                        )}
                    </select>
                </Row>
            </React.Fragment>
        )
    } else {
        return <div>
            <Loading animate />
            <Loading animate small />
            <div style={{ position: 'relative', width: 200, height: 200 }}>
                <Loading animate full />
            </div>
        </div>
    }
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    actionRetrieveCart,
    actionGetToken,
    actionAvaialbleCountry,
    actionAvaialbleSubdivision,
    actionShippingMethod
};

export default connect(mapStateToProps, mapDispatchToProps)(ShippingForm);
