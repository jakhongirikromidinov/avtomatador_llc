import { useTranslation } from "next-i18next";

import StyledBanner, {
	Content,
	TitleWrapper,
	Title,
	Subtitle,
	ButtonsWrapper,
	PhoneNumbersList,
	Features,
	Item,
	ItemTop,
	Number,
	ItemList,
	ItemBottom,
	Price,
} from "./Banner.styled";

import Button from "./UI/Buttons/Button";

import { Container, InnerContainer } from "../Common/Common.styled";

const Banner = () => {

	const { t: translate } = useTranslation("banner");
	return (
		<StyledBanner>
			{console.log(result)}
			<video autoPlay loop muted src={"/images/banner_bg_video.mp4"} />
			<InnerContainer>
				<PhoneNumbersList>
					<li>+998 91 323 22 23</li>
					<li>+998 33 323 22 23</li>
					<li>+998 91 700 00 09</li>
				</PhoneNumbersList>
				<Content>
					<TitleWrapper>
						<Title>AVTOMATADOR</Title>
						<Subtitle>{translate("subtitle")}</Subtitle>
					</TitleWrapper>

					<ButtonsWrapper>
						<Button
							text={translate("phone_button")}
							icon="phone"
							type="banner"
						/>
						<Button
							text={translate("prices_button")}
							icon="price"
							type="banner"
						/>
					</ButtonsWrapper>

					<Features>
						<Item>
							<ItemTop>
								<Number>{translate("compounds.paladdiy.number")}</Number>

								<ItemList>
									<li>
										<span>{translate("compounds.paladdiy.key")}</span>
									</li>
									<li>{translate("compounds.paladdiy.name")}</li>
								</ItemList>
							</ItemTop>

							<ItemBottom>
								<Price>{translate("compounds.paladdiy.price")}</Price>
							</ItemBottom>
						</Item>

						<Item>
							<ItemTop>
								<Number>{translate("compounds.patino.number")}</Number>

								<ItemList>
									<li>
										<span>{translate("compounds.patino.key")}</span>
									</li>
									<li>{translate("compounds.patino.name")}</li>
								</ItemList>
							</ItemTop>

							<ItemBottom>
								<Price>{translate("compounds.patino.price")}</Price>
							</ItemBottom>
						</Item>

						<Item>
							<ItemTop>
								<Number>{translate("compounds.rodiy.number")}</Number>

								<ItemList>
									<li>
										<span>{translate("compounds.rodiy.key")}</span>
									</li>
									<li>{translate("compounds.rodiy.name")}</li>
								</ItemList>
							</ItemTop>

							<ItemBottom>
								<Price>{translate("compounds.rodiy.price")}</Price>
							</ItemBottom>
						</Item>
					</Features>
				</Content>
			</InnerContainer>
		</StyledBanner>
	);
};

export default Banner;
