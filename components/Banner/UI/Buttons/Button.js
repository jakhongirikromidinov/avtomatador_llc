import StyledButton, { Content } from "./Button.styled";

import {
	BannerPricesButtonIcon,
	BannerPhoneButtonIcon,
} from "../../../Common/svg_db";

const Button = ({ text, icon, type }) => {
	return (
		<StyledButton type={type}>
			{text}
			{icon === "phone" ? (
				<BannerPhoneButtonIcon />
			) : icon === "price" ? (
				<BannerPricesButtonIcon />
			) : (
				<></>
			)}
		</StyledButton>
	);
};

export default Button;
