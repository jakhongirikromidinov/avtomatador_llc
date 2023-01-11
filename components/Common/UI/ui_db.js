import {
	StyledTitle,
	StyledItem,
	ItemLogo,
	ItemText,
	StyledButtonCTA,
} from "./ui_db.styled.";

import {
	FeaturesItemLogo_1,
	FeaturesItemLogo_2,
	FeaturesItemLogo_3,
	FeaturesItemLogo_4,
	BannerPhoneButtonIcon,
	TelegramIcon,
	ChevronRight,
} from "../svg_db";

import { useTranslation } from "next-i18next";

export const Title = ({ part_1, part_2, part_3, marginBottom, mini }) => {
	return (
		<StyledTitle marginBottom={marginBottom} mini={mini}>
			<h2>
				{part_1}
				<br />
				{part_2}
				{mini && <br />}
				{mini && part_3}
				{mini || <span>.</span>}
				{mini && <span>!</span>}
			</h2>
		</StyledTitle>
	);
};

export const FeatureItem = ({ features, type_1, type_2, type_3, type_4 }) => {
	const { t: translate } = useTranslation("features");
	return (
		<StyledItem>
			<ItemLogo>
				{features && type_1 && <FeaturesItemLogo_1 />}
				{features && type_2 && <FeaturesItemLogo_2 />}
				{features && type_3 && <FeaturesItemLogo_3 />}
				{features && type_4 && <FeaturesItemLogo_4 />}
			</ItemLogo>

			<ItemText>
				<h3>
					{features && type_1 && translate("feature_item_1_title")}
					{features && type_2 && translate("feature_item_2_title")}
					{features && type_3 && translate("feature_item_3_title")}
					{features && type_4 && translate("feature_item_4_title")}
				</h3>
				<p>
					{features && type_1 && translate("feature_item_1_descr")}
					{features && type_2 && translate("feature_item_2_descr")}
					{features && type_3 && translate("feature_item_3_descr")}
					{features && type_4 && translate("feature_item_4_descr")}
				</p>
			</ItemText>
		</StyledItem>
	);
};
export const ButtonCTA = ({ type, text }) => {
	return (
		<StyledButtonCTA type={type}>
			{type === "telegram" && <TelegramIcon />}
			{type === "phone" && <BannerPhoneButtonIcon/>}

			{text}

			<ChevronRight />
		</StyledButtonCTA>
	);
};
