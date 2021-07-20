import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getNftAssets } from "../../redux/pages/myAssets/actions";
import { cloudWalletLogin } from "../../redux/pages/login/actions"

import CusCard from "./CusCard";
import { Row, Col } from "../../src/Grid";

const NftCardList = ({ getNftAssets, loginPage }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [nftAssets, setNftAssets] = useState(null);

	useEffect(() => {
		const asyncGetAssets = async () => {
			try {
				const nftArr = await getNftAssets();
				setNftAssets(nftArr);
				setIsLoading('false')
			} catch (e) {

			}
		}
		if (isLoading) {
			asyncGetAssets();
		}
	}, [isLoading]);
	
	const renderNft = nftAssets && nftAssets.map((asset, index) => 
		<Col s={12} m={6} l={4} xl={4} key={index}>
			<CusCard 
//				imgSrc={`https://ipfs.atomichub.io/ipfs/${asset.data.img}`}
				imgSrc={`https://gateway.pinata.cloud/ipfs/${asset.data.img}`}
				name={asset.collection.name}
				nftLink={`https://wax.atomichub.io/explorer/asset/${asset.asset_id}`}
			/>
		</Col>
	)
	return (
		<Row>
			{renderNft}
		</Row>
	)
};
const mapStateToProps = (state) => ({
	isAssetsLoading: state.isAssetsLoading,
	loginPage: state.loginPage
});

const mapDispatchToProps = {
	getNftAssets,
	cloudWalletLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(NftCardList);
