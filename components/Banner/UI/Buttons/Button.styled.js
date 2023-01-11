import styled from "styled-components";

const StyledButton = styled.button`
	padding: ${({ type }) => (type === "banner" ? "1rem 3rem" : "")};
	background: ${({ type }) => (type === "banner" ? "transparent" : "")};
	color: ${({ type }) => (type === "banner" ? "#ffff" : "")};
	outline: ${({ type }) => (type === "banner" ? "1px solid #ffff" : "")};
	font-size: ${({ type }) => (type === "banner" ? "2rem" : "")};

	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.2rem;
	transition: 0.3s ease-in-out;
	cursor: pointer;
	svg {
		path {
			transition: 0.3s ease-in-out;
			fill: #ffff;
		}
	}
	:hover {
		background-color: #ffff;
		color: var(--textAccent);
		svg {
			path {
				fill: var(--accent);
			}
		}
	}
`;

export default StyledButton;
