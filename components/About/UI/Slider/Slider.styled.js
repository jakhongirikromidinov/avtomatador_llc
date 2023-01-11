import styled from "styled-components";

const StyledSlider = styled.div`
	width: 438px;
	height: 158px;
	color: #fff;
	margin-top: 20.7rem;
	background-color: var(--accent);
	.swiper {
		height: 100%;
		width: 100%;
		&-wrapper {
		}
		&-slide {
			height: 70%;
		}
	}
`;
export const SlideItem = styled.div`
	padding: 2rem;
`;

export const SliderBottom = styled.div`
	position: absolute;
	right: 28px;
	bottom: 14px;
	z-index: 99999;
	display: flex;
	gap: 6rem;
`;

export const ButtonsWrapper = styled.div`
	display: flex;
	gap: 1.8rem;
`;

export const IndexLabel = styled.label`
	font-weight: 500;
	font-size: 2.5rem;
	span {
		font-weight: 400;
		font-size: 1.4rem;
	}
`;

export default StyledSlider;
