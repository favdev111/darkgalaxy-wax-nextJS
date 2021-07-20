import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setResponsiveMode } from '../../redux/pages/resp/actions';
import withStyles from "../../src/tools/withStyles";


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

const CusCard = ({
	setResponsiveMode,
	imgSrc,
	name,
	responsivePage: {
		responsiveMode
	},
	nftLink,
	classes
}) => {
	useEffect(() => {
		let widthOfScreen = document.documentElement.clientWidth;
		setResponsiveMode(widthOfScreen);
	}, []);

	return (
		<div
			className={classes.nftImgWrap}
		>
			<a href={nftLink} target="_blink">
				<img src={imgSrc}
					className={classes.nftImg}
				/>
				<div className={classes.nftTitle}>

				</div>
			</a>
		</div>
	);
};

const mapStateToProps = state => ({
	responsivePage: state.responsivePage
});

const mapDispatchToProps = {
	setResponsiveMode,
};

const connectedCusCard = connect(
	mapStateToProps,
	mapDispatchToProps
)(CusCard);

export default withStyles(styles)(connectedCusCard);
