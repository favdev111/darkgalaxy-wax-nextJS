import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import Words from '../../src/Words';
import Frame from "../../src/Frame";
import withStyles from "../../src/tools/withStyles";
import Button from "../../src/Button";
import { Col } from "../../src/Grid";


const styles = () => {
    return {
        nftImg: {
            width: 150,
            height: 150,
            objectFit: 'contain',
        },
        nftImgWrap: {
            width: '100%',
            textAlign: 'center',
            padding: 10,
            display: 'flex',
            alignItems: 'center',
            "@media screen and (max-width: 575px)": {
                display: 'block'
            },
        },
        cartNum: {
            background: 'transparent',
            border: '1px solid #26dafd',
            width: '50%',
            marginLeft: 13,
            color: 'white', 
        }
    }
}

const CartItem = ({ cartContent, classes, removeFromCart, updateCartItem }) => {
    const removeItem = (id) => {
        removeFromCart(id)
    }
    const updateItem = (e) => {
        updateCartItem(cartContent.id, e.target.value);
    }
    return (
        <Frame
            level={0}
            corners={4}
            hover
            noBackground
            layer='primary'
            style={{
                marginBottom: 20
            }}
        >
            <div
                className={classes.nftImgWrap}
            >
                <Col
                    s={12}
                    m={4}
                >
                    <img src={cartContent.media.source}
                        className={classes.nftImg}
                    />
                </Col>
                <Col
                    s={12}
                    m={4}
                >
                    <div className={classes.nftTitle}>
                        {cartContent.name}
                        <div>
                            <span>{cartContent.price.formatted_with_symbol}</span>
                            <input type="number"
                                pattern="[0-9]*" 
                                inputmode="numeric" 
                                defaultValue={cartContent.quantity}
                                onChange={(e)=> updateItem(e)}
                                className={classes.cartNum}
                            />
                        </div>
                    </div>
                </Col>
                <Col
                    s={12}
                    m={4}
                >
                    <Button
                        animate
                        style={{ marginBottom: 10 }}
                        onClick={() => removeItem(cartContent.id)}
                    >
                        <Words>Remove from Cart</Words>
                    </Button>
                </Col>
            </div>
        </Frame>
    );
};

export default withStyles(styles)(CartItem);