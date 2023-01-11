import styled from "styled-components";

//title
export const StyledTitle = styled.div`
	h2 {
		line-height: 140%;
		font-size: ${({ mini }) => (mini ? "2.5rem" : "3.1rem")};
		font-weight: ${({ mini }) => (mini ? "500" : "600")};
		padding-left: 2.7rem;
		border-left: 3px solid var(--accent);
		color: var(--textAccent);

		margin-bottom: ${({ marginBottom }) =>
			marginBottom === "10" ? "1rem" : marginBottom === "20" ? "2rem" : ""};
		span {
			color: var(--accent);
		}
	}
`;
//feature item
export const StyledItem = styled.div`
	display: flex;
	gap: 1.4rem;
`;

export const ItemLogo = styled.div`
	position: relative;
	::after {
		content: "";
		position: absolute;
		width: 3.6rem;
		height: 3.4rem;
		background-color: var(--accent);
		opacity: 0.5;
		top: -4px;
		right: -4px;
		z-index: -1;
	}
`;

export const ItemText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	h3 {
		font-size: 2rem;
		font-weight: 400;
	}
	p {
		width: 17rem;
		color: var(--textAccent100);
	}
`;

//CTA button
export const StyledButtonCTA = styled.button`
	color: var(--textAccent);
	font-weight: 400;
	display: flex;
	gap: 1.3rem;
	align-items: center;
	padding: 1.2rem 1.7rem;
	background: #ffff;
	box-shadow: 4px 4px 8px rgba(123, 123, 123, 0.1);
	.icon {
		width: ${({ type }) => (type === "phone" ? "1.8rem" : "")};
		height: ${({ type }) => (type === "phone" ? "1.8rem" : "")};
		path {
			fill: ${({ type }) => (type === "phone" ? "var(--accent)" : "")};
		}
	}
`;
