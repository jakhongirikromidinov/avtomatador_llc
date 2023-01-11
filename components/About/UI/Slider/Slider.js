import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

import StyledSlider, {
	SlideItem,
	ButtonsWrapper,
	SliderBottom,
	IndexLabel,
} from "./Slider.styled";
import { SlideNextButton, SlidePrevButton } from "./Buttons";
import { useState } from "react";
import { useTranslation } from "next-i18next";

const Slider = () => {
	const swiper = useSwiper();
	const [index, setIndex] = useState(null);
	const { t: translate } = useTranslation("about");
	return (
		<StyledSlider>
			<Swiper
				spaceBetween={100}
				slidesPerView={1}
				onSwiper={(swiper) => setIndex(swiper.realIndex + 1)}
				onSlideChange={(swiper) => setIndex(swiper.realIndex + 1)}
				speed={400}
			>
				{translate("slider_text", { returnObjects: true }).map(
					(item, index) => (
						<SwiperSlide key={index}>
							<SlideItem>{item}</SlideItem>
						</SwiperSlide>
					)
				)}

				<SliderBottom>
					<IndexLabel>
						{"0" + index}
						<span> /03</span>
					</IndexLabel>

					<ButtonsWrapper>
						<SlidePrevButton />
						<SlideNextButton />
					</ButtonsWrapper>
				</SliderBottom>
			</Swiper>
		</StyledSlider>
	);
};

export default Slider;
