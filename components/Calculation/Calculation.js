import StyledCalculation, {
	Content,
	Left,
	Right,
	ImageWrapper,
} from "./Calculation.styled";
import { Container, InnerContainer } from "../Common/Common.styled";
import { Title } from "../Common/UI/ui_db";
import { useTranslation } from "next-i18next";
import Image from "next/legacy/image";

const Calculation = () => {
	const { t: translate } = useTranslation("calculation");

	return (
		<StyledCalculation>
			<InnerContainer>
				<Content>
					<Left>
						<Title
							mini
							part_1={translate("title_part_1")}
							part_2={translate("title_part_2")}
							part_3={translate("title_part_3")}
						/>
					</Left>

					<Right>
						<ImageWrapper>
							<Image
								src="/images/calculation_img.png"
								width={438}
								height={256}
								quality={100}
							/>
						</ImageWrapper>
					</Right>
				</Content>
			</InnerContainer>
		</StyledCalculation>
	);
};

export default Calculation;
