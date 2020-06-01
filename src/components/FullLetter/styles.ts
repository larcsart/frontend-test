import styled from 'styled-components';

const FullLetterContainer = styled.div`
	align-items: center;
	background: ${(props) => props.theme.colors.white};
	display: flex;
	height: 100vh;
	transition: ${(props) => props.theme.defaults.transition};
	width: 100%;

	aside {
		max-width: 1250px;
		margin: 0 auto;
		padding: 0 80px 200px;
		width: 100%;
	}

	svg {
		margin-bottom: 26px;
		width: 110px;
		path {
			fill: ${(props) => props.theme.colors.primary};
			transition: ${(props) => props.theme.defaults.transition};
		}
	}

	h1 {
		color: ${(props) => props.theme.colors.text.darker};
		font-size: 40px;
		font-weight: bold;
		letter-spacing: -0.02em;
		line-height: normal;
		margin: 0 0 12px;
		transition: ${(props) => props.theme.defaults.transition};
	}

	h2 {
		color: ${(props) => props.theme.colors.text.dark};
		font-size: 16px;
		font-weight: 600;
		letter-spacing: -0.02em;
		line-height: normal;
		transition: ${(props) => props.theme.defaults.transition};
	}

	&.dark {
		background: ${(props) => props.theme.colors.primary};

		svg {
			path {
				fill: ${(props) => props.theme.colors.white};
			}
		}

		h1,
		h2 {
			color: ${(props) => props.theme.colors.white};
		}
	}
`;

export { FullLetterContainer };
