import { useSwiper } from "swiper/react";
import { PrevArrow, NextArrow } from "../../../Common/svg_db";
import StyledButton from "./Buttons.styled";
import Image from "next/legacy/image";
export function SlideNextButton() {
	const swiper = useSwiper();

	return (
		<StyledButton onClick={() => swiper.slideNext()}>
			{/* <Image
				src="/images/about_next_arrow_icon.png"
				width="16"
				height="15.56"
			/> */}
			<NextArrow />
		</StyledButton>
	);
}
export function SlidePrevButton() {
	const swiper = useSwiper();

	return (
		<StyledButton onClick={() => swiper.slidePrev()}>
			{/* <Image
				src="/images/about_prev_arrow_icon.png"
				width="16"
				height="15.56"
				quality={100}
			/> */}
			<PrevArrow />
		</StyledButton>
	);
}
