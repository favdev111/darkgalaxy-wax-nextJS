import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { actionGetCart, actionRemoveCart, actionUpdateCartItem } from "../../redux/pages/cart/actions";
import Loading from "../../src/Loading";
import CartItem from "./cartItem";
import Button from "../../src/Button";
import Words from '../../src/Words';
import Link from "../../site/components/Link";



const CartList = ({ actionGetCart, actionRemoveCart, actionUpdateCartItem }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [cartContents, setCartContents] = useState();

    useEffect(() => {
        const asyncGetCarts = async () => {
            try {
                const cartContentArr = await actionGetCart();
                setCartContents(cartContentArr);
                setIsLoading("false");
            } catch (e) { }
        };
        asyncGetCarts();
    }, [isLoading]);

    const removeFromCart = async (id) => {
        const remainItems = await actionRemoveCart(id);
        setCartContents(remainItems.cart.line_items);
    }

    const updateCartItem = async (id, num) => {
        const updateItems = await actionUpdateCartItem(id, num);
        setCartContents(updateItems.cart.line_items);
    }

    if (cartContents) {
        return (
            <React.Fragment>
                {
                    cartContents.map((content, index) => (
                        <CartItem
                            key={index}
                            cartContent={content}
                            removeFromCart={removeFromCart}
                            updateCartItem={updateCartItem}
                        />
                    ))
                }

                <Link href="/checkout">
                    <Button
                        animate
                        style={{
                            float: 'right',
                            marginBottom: 20
                        }}
                    >
                        <Words>Check out</Words>
                    </Button>
                </Link>
            </React.Fragment>
        );
    } else {
        return (
            <div>
                <Loading animate />
                <Loading animate small />
                <div style={{ position: "relative", width: 200, height: 200 }}>
                    <Loading animate full />
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    actionGetCart,
    actionRemoveCart,
    actionUpdateCartItem
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
