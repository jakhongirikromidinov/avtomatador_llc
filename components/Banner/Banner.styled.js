import styled from "styled-components";

const StyledBanner = styled.section`
	background: rgba(0, 0, 0, 0.7);
	color: #ffff;
	z-index: 2;
	overflow: hidden;
	height: 100vh;
	video {
		position: absolute;
		width: 100%;
		z-index: -1;
		height: 100%;
		object-fit: cover;
	}
`;

export const Content = styled.div`
	padding: 21rem 0 8rem;
`;

export const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	justify-content: center;
	color: #ffff;
	width: 50%;
	position: relative;
	border-left: 2px solid var(--accent);
	padding-left: 3rem;
	margin-bottom: 7rem;
	/* ::before {
		content: "";
		position: absolute;
        left: -3rem;
		height: 13.9rem;
		width: 0.2rem;
		background-color: var(--accent);
	} */
`;

export const Title = styled.h1`
	font-size: 4.9rem;
`;

export const Subtitle = styled.p`
	font-size: 2rem;
`;

export const ButtonsWrapper = styled.div`
	display: flex;
	gap: 1rem;
	margin-bottom: 12rem;
`;

export const Features = styled.div`
	display: flex;
	gap: 6rem;
`;

export const Item = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.6rem;
`;

export const ItemTop = styled.div`
	display: flex;
	align-items: flex-end;
	gap: 1rem;
`;

export const Number = styled.label`
	font-size: 2.5rem;
	font-weight: 500;
	line-height: 140%;
`;

export const ItemList = styled.ul`
	li {
		span {
			color: var(--accent);
		}
	}
`;

export const ItemBottom = styled.div``;

export const Price = styled.label``;

export const PhoneNumbersList = styled.ul`
	display: flex;
	position: absolute;
	right: 0;
	top: 13rem;
	flex-direction: column;
`;

export default StyledBanner;
