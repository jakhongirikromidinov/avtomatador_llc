import StyledFeatures, {
	Content,
	Left,
	Subtitle,
	Right,
	FeaturesWrapper,
} from "./Features.styled";
import { Container, InnerContainer } from "../Common/Common.styled";
import { Title } from "../Common/UI/ui_db";
import { useTranslation } from "next-i18next";
import { FeatureItem } from "../Common/UI/ui_db";

const Features = () => {
	const { t: translate } = useTranslation("features");
	return (
		<StyledFeatures>
			<InnerContainer>
				<Content>
					<Left>
						<Title
							part_1={translate("title_part_1")}
							part_2={translate("title_part_2")}
							marginBottom="10"
						/>
						<img src="https://unsplash.com/photos/QSeqxmpOT3Y" alt="" />
						<Subtitle>{translate("subtitle")}</Subtitle>
					</Left>

					<Right>
						<FeaturesWrapper>
							<FeatureItem features type_1 />
							<FeatureItem features type_2 />
							<FeatureItem features type_3 />
							<FeatureItem features type_4 />
						</FeaturesWrapper>
					</Right>
				</Content>
			</InnerContainer>
		</StyledFeatures>
	);
};

export default Features;
