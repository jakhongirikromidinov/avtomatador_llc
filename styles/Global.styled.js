import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	:root {
		--accent: #E94A46;
		--textAccent: #323131;
		--textAccent100: #8D8D8D;
	}
	*,
	&::before,
	&::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	* {
		user-select: none;
	}
	html,
	body {
		height: 100%;
		font-size: 62.5%;
	}

	body {
		font-weight: 400;
		font-family: 'Inter', sans-serif;
		font-style: normal;
		font-size: 1.6rem;
	}

	#__next {
		// Pushing the footer to the bottom of the page
		height: 100%;
		display: flex;
		flex-flow: column nowrap;
	}

	main {
		flex: 1;
	}

	a {
		font-weight: inherit;
		font-size: inherit;
		text-decoration: none;
		color: inherit;
	}	

	img {
		width: 100%;
		display: block;
	}
	h1, h2, h3 {
		line-height: 110%;
	}
	h1 {
		font-weight: 700;
	}
	p {
		font-weight: 400;
	}
	ul {
		list-style-type: none;
	}
	button {
		border: none;
		color: inherit;
	}
	footer {
		margin-top: auto;
	}
	.hidden {
		overflow: hidden;
	}
	p {
		line-height: 145%;
	}
`;

export default GlobalStyle;
