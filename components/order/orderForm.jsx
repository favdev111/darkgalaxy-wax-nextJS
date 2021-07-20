import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Button from "../../src/Button";
import Words from '../../src/Words';
// import { action } from '../../redux/pages/checkout/actions';
import Router from 'next/router';
import { Row, Col } from "../../src/Grid";
import Image from '../../src/Image';
import withStyles from "../../src/tools/withStyles";
import Link from "../../site/components/Link";
import Loading from "../../src/Loading";


const styles = () => {
    return {
        headerDes: {
            textAlign: 'left'
        },
        hrColor: {
            background: '#26dafd',
            height: 1,
            border: 'none'
        },
        textWrap: {
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            "&::before, &::after": {
                content: `''`,
                flex: 1,
                borderBottom: '1px solid #26dafd'
            },
            "&:not(:empty)::before": {
                marginRight: 10
            },
            "&:not(:empty)::after": {
                marginLeft: 10
            }
        },

    }
}

const OrderForm = ({ order, classes }) => {

    const [orderList, setOrderList] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const orderFromLocal = JSON.parse(localStorage.getItem('order'));
        if (orderFromLocal) {
            setOrderList(orderFromLocal);
            setIsLoading(false)
        }
    }, [isLoading]);

    if (orderList) {
        return (
            <React.Fragment>
                <div style={{ margin: 20 }}>
                    <Row>
                        <Col s={12} m={8} >
                            <header style={{ textAlign: "center" }}>
                                <h1>Your order {orderList.customer_reference} is complete</h1>
                                <p className={classes.headerDes}>
                                    Thanks for shopping at Dark Galaxies - we sent an email to {orderList.customer.email} with your
                                    full receipt. Please check spam if the email has not arrived within 5 minutes.
                                </p>
                                <hr className={classes.hrColor} />
                            </header>
                            {
                                orderList.order.line_items.map((item, key) => (
                                    <Row key={key}>
                                        <Col s={12} m={8}>
                                            <h4 style={{ margin: 0 }}>{item.product_name}</h4>
                                            <div style={{ fontSize: 18 }}>quantity: {item.quantity}</div>
                                        </Col>
                                        <Col s={12} m={4}>
                                           {item.price.formatted_with_symbol}
                                        </Col>
                                    </Row>
                                ))
                            }

                            <Row>
                                <h4>
                                    Shipping: {orderList.order.shipping.price.formatted_with_symbol}
                                </h4>
                                <h3>
                                    Total: {orderList.order.total_with_tax.formatted_with_symbol}
                                </h3>
                            </Row>

                        </Col>
                        <Col s={12} m={4}>
                            <Image animate resources='/static/img/CircleLogo.png'>
                                Dark Galaxies
                            </Image>
                        </Col>
                    </Row>
                    <Row>
                        <div
                            className={classes.textWrap}
                        >
                            SHIPPING TO
                        </div>
                        <div style={{ marginBottom: 20 }}>
                            {orderList.shipping.name} &nbsp;
                            {orderList.shipping.street}, &nbsp;
                            {orderList.shipping.town_city}, &nbsp;
                            {orderList.shipping.postal_zip_code}, &nbsp;
                            {orderList.shipping.country}
                        </div>
                        <Link href="/products">
                            <Button
                                animate
                            >
                                <Words>Shop Again</Words>
                            </Button>
                        </Link>
                    </Row>

                </div>
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

const mapStateToProps = (state) => ({
    order: state.order
});

const mapDispatchToProps = {

};

const connectedOrderForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderForm);

export default withStyles(styles)(connectedOrderForm);
