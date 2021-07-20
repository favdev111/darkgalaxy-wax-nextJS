import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../redux/pages/products/actions";
import ProductsCards from "./ProductsCards";
import { Row, Col } from "../../src/Grid";
import Loading from "../../src/Loading";

const ProductList = ({ getProducts }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState();

    useEffect(() => {
        const asyncGetProducts = async () => {
            try {
                const productsArr = await getProducts();
                setProducts(productsArr);
                setIsLoading("false");
            } catch (e) { }
        };
        asyncGetProducts();
    }, [isLoading]);

    if (products) {
        return <React.Fragment>
            {products.data.map((product, index) => (
                <Col s={12} m={6} l={4} xl={4} key={index}>
                    <ProductsCards product={product} />
                </Col>
            ))}
        </React.Fragment>
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
    isProductsLoading: state.isProductsLoading,
});

const mapDispatchToProps = {
    getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
