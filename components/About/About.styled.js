import styled from "styled-components";

const StyledAbout = styled.section``;

export const Content = styled.div`
	padding: 6rem 0 6rem;
    display: flex;
`;

export const Left = styled.div`
    width: 50%;
`;

export const Subtitle = styled.h3`
	font-weight: 500;
	font-size: 2.5rem;
    margin-bottom: 1rem;
	span {
		color: var(--accent);
	}
`;

export const Descr = styled.p`
	color: var(--textAccent100);
	line-height: 150%;
`;

export const ImageWrapper = styled.div`
	margin-bottom: 6rem;
`;

export const Right = styled.div`
    width: 50%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 10.6rem;
`;

export default StyledAbout;
