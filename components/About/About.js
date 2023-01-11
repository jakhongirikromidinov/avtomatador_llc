import StyledAbout, {
	Content,
	Left,
	ImageWrapper,
	Right,
	Subtitle,
	Descr,
} from "./About.styled";
import { Container, InnerContainer } from "../Common/Common.styled";
import { ButtonCTA, Title } from "../Common/UI/ui_db";
import { useTranslation } from "next-i18next";
import Image from "next/legacy/image";
import Slider from "./UI/Slider/Slider";

const About = () => {
	const { t: translate } = useTranslation("about");
	return (
		<StyledAbout>
			<InnerContainer>
				<Content>
					<Left>
						<Title
							part_1={translate("title_part_1")}
							part_2={translate("title_part_2")}
							marginBottom="20"
						/>
						<ImageWrapper>
							<Image src="/images/about_img.png" width="437" height="258" />
						</ImageWrapper>

						<Subtitle>
							{translate("subtitle")}
							<span>?</span>
						</Subtitle>
						<Descr>{translate("descr")}</Descr>
					</Left>

					<Right>
						<Slider />

						<ButtonCTA type="phone" text={translate("CTA_button")} />
					</Right>
				</Content>
			</InnerContainer>
		</StyledAbout>
	);
};

export default About;
