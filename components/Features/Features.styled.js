import styled from "styled-components";

const StyledFeatures = styled.section``;

export const Content = styled.div`
	padding: 9rem 0 6rem;
	display: flex;
	justify-content: space-between;
`;

export const Subtitle = styled.div`
	padding-left: 3rem;

	color: var(--textAccent100);
	width: 38rem;
	line-height: 150%;
`;

export const Left = styled.div`
	width: 55%;
`;

export const Right = styled.div`
	width: 60%;
`;

export const FeaturesWrapper = styled.div`
	display: flex;
	gap: 6rem;
	flex-wrap: wrap;
`;

export default StyledFeatures;
