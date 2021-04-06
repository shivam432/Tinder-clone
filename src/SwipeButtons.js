import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";
const styles = {
	button: {
		width: 40,
		height: 40,
		padding: 0,
	},
	icon: {
		width: 40,
		height: 40,
	},
};
const SwipeButtons = () => {
	return (
		<div className="swipeButtons">
			<IconButton
				style={styles.button}
				iconStyle={styles.icon}
				className="swipeButtons__repeat">
				<ReplayIcon fontSize="large" />
			</IconButton>
			<IconButton
				style={styles.button}
				iconStyle={styles.icon}
				className="swipeButtons__left">
				<CloseIcon fontSize="large" />
			</IconButton>
			<IconButton
				style={styles.button}
				iconStyle={styles.icon}
				className="swipeButtons__star">
				<StarRateIcon fontSize="large" />
			</IconButton>
			<IconButton
				style={styles.button}
				iconStyle={styles.icon}
				className="swipeButtons__right">
				<FavoriteIcon fontSize="large" />
			</IconButton>
			<IconButton
				style={styles.button}
				iconStyle={styles.icon}
				className="swipeButtons__lightning">
				<FlashOnIcon fontSize="large" />
			</IconButton>
		</div>
	);
};

export default SwipeButtons;
