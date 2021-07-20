import Commerce from "@chec/commerce.js";
import React, { useState, useEffect } from "react";
import Link from "../../site/components/Link";
import withStyles from "../../src/tools/withStyles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const styles = () => {
    return {
        badge: {
            position: "absolute",
            top: -5,
            right: -5,
            borderRadius: '50%',
            fontSize: 11,
            backgroundColor: 'red',
            color: 'white',
            width: 17,
            height: 17,
            textAlign: 'Center'
        },
        removeBadge: {
            background: 'transparent',
            width: 0,
            height: 0
        }
    }
}

const cartIcon = ({ classes }) => {
    const [cartContents, setCartContents] = useState(null);

    useEffect(() => {
        const asyncGetCarts = async () => {
            try {
                setCartContents(localStorage.getItem('cartNum'));
            } catch (e) { }
        }
        setInterval(() => { asyncGetCarts(); }, 1000)
    });

    return (
        <Link
            href="/cart"
            className={classes.option}
            style={{
                position: 'absolute',
                right: 30,
            }}
        >
            <FontAwesomeIcon icon={faShoppingCart} />
            {
                // (cartContents != 0 ) && (
                //     <div
                //         className={cartContents !=0 ? classes.badge: null }
                //     >{cartContents}</div>
                // )
                (cartContents != 0 && cartContents != null) ?
                    (<div className={classes.badge}>
                        {cartContents}
                    </div>)
                    : (<div className={classes.removeBadge}></div>)
            }
        </Link>
    )
}

export default withStyles(styles)(cartIcon);