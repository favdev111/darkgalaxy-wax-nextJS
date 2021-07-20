import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { actionRetrieveCart } from "../../redux/pages/cart/actions";
import CommonInput from "./commonInput";
import { Row, Col } from "../../src/Grid";
import Loading from "../../src/Loading";



const PaymentForm = ({ actionRetrieveCart }) => {
    const [isPaypal, setIsPaypal] = useState(true);
    const changePayment = () => {
        setIsPaypal(!isPaypal);
    }

    return (
        <React.Fragment>
            <Row style={{
                marginTop: 30
            }}>
                <Col s={12} m={6}>
                    <h3 style={{
                        margin: 0
                    }}
                    >Payment Detail</h3>
                </Col>
                <Col s={12} m={6}>
                    <div>
                        <input 
                            type="radio" 
                            value="square" 
                            name="paymentGateway" 
                            onChange={() => changePayment()} /> 
                            Credit/Debit Card
                        <input 
                            type="radio" 
                            value="paypal" 
                            name="paymentGateway"
                            onChange={() => changePayment()} 
                            checked={isPaypal}
                        /> 
                            Paypal
                    </div>
                </Col>
            </Row>
            <div
                style={{
                    display: isPaypal ? 'none': 'block'
                }}
            >
                <Row style={{
                    padding: '0 10px'
                }}>
                    <CommonInput
                        label="Card Number"
                        name="cardNumber"
                        required={false}
                    />
                </Row>
                <Row>
                    <Col s={12} m={6}>
                        <CommonInput
                            label="Expired Date"
                            placeholder="MM/YY"
                            name="expiredDate"
                            required={false}
                        />
                    </Col>
                    <Col s={12} m={6}>
                        <CommonInput
                            label="CVC"
                            name="CVC"
                            required={false}
                        />
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    actionRetrieveCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentForm);
