import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { setResponsiveMode } from '../../redux/pages/resp/actions';
import { actionAddCart } from '../../redux/pages/cart/actions';
import withStyles from "../../src/tools/withStyles";
import Button from "../../src/Button";
import Words from "../../src/Words";
import { createNotification } from "./ProductionNotifications.jsx";

const styles = () => {
    return {
        nftImg: {
            width: 150,
            height: 150,
            objectFit: 'contain',
            marginTop: 10
        },
        nftImgWrap: {
            border: '3px solid #029DBB',
            borderRadius: 5,
            cursor: 'pointer',
            width: '100%',
            textAlign: 'center',
            marginBottom: 10,
        },
        nftTitle: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical'
        }
    }
};

const ProductsCards = ({
    setResponsiveMode,
    actionAddCart,
    product,
    classes
}) => {

    useEffect(() => {
        let widthOfScreen = document.documentElement.clientWidth;
        setResponsiveMode(widthOfScreen);
    }, []);

    const handleAddToCart = () => {
        createNotification('info', '1 item is added')
        actionAddCart(product.id, 1);
    }
    return (
        <div
            className={classes.nftImgWrap}
        >
            <img src={product.media.source}
                className={classes.nftImg}
                alt={product.seo.description}
            />
            <div className={classes.nftTitle}>
                {product.name}
            </div>
            <p>
                {product.price.formatted_with_symbol}
            </p>
            <Button
                animate
                style={{ marginBottom: 10 }}
                onClick={() => handleAddToCart()}
            >
                <Words>Add to Cart</Words>
            </Button>
        </div>
    );
};

const mapStateToProps = state => ({
    responsivePage: state.responsivePage
});

const mapDispatchToProps = {
    setResponsiveMode,
    actionAddCart
};

const connectedProductsCard = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsCards);

export default withStyles(styles)(connectedProductsCard);
