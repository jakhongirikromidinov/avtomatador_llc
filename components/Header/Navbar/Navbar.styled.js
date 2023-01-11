import styled from "styled-components";

const StyledNavbar = styled.nav`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 3;
	background-color: #fff;
`;

export const Content = styled.div`
	display: flex;
	padding: 2rem 0;
	justify-content: space-between;
`;

export const Logo = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	font-size: 2.5rem;
`;

export const LogoImageWrapper = styled.div`
	position: relative;
	width: 4rem;
	height: 4rem;
`;

export const LogoText = styled.label`
	font-weight: 500;
	span {
		color: var(--accent);
	}
`;

export const List = styled.ul`
	display: flex;
	align-items: center;
	gap: 3rem;
`;

export const LangSwitcher = styled.div`
	display: flex;
	gap: 0.6rem;
	align-items: center;
	color: #8d8d8d;
	ul {
		display: flex;
		gap: 1rem;
		.active {
			color: var(--textAccent);
		}
	}
`;

export default StyledNavbar;
