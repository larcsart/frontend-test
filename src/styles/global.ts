import styled, { createGlobalStyle, keyframes } from 'styled-components';

export default createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: ${(props) => props.theme.fonts.family};
        margin: 0;
        padding: 0;
    }

    body {
        color: ${(props) => props.theme.colors.text.darker};
        font-size: ${(props) => props.theme.fonts.sizes.normal};
    }
`;

const LoadingButtonAnimate = keyframes`  
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Button = styled.button`
	align-items: center;
	background: transparent;
	border-radius: 6px;
	border: 1px solid transparent;
	cursor: pointer;
	display: inline-flex;
	font-size: ${(props) => props.theme.fonts.sizes.lg};
	font-weight: 500;
	letter-spacing: -0.01em;
	height: 56px;
	justify-content: center;
	transition: ${(props) => props.theme.defaults.transition};

	&.block {
		display: flex;
		width: 100%;
	}

	&.primary {
		background: ${(props) => props.theme.colors.primary};
		border-color: ${(props) => props.theme.colors.primary};
		color: ${(props) => props.theme.colors.white};

		&:hover {
			background: ${(props) => props.theme.colors.primaryLight};
			border-color: ${(props) => props.theme.colors.primaryLight};
		}

		&:focus {
			outline: none;
			box-shadow: 0 0 4px rgba(0, 0, 0, 0.12), 0 0 12px rgba(50, 107, 255, 0.2);
		}
	}

	&.with-icon {
		border: ${(props) => props.theme.line.light};
		box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.02),
			0px 8px 16px rgba(0, 0, 0, 0.02), inset 0px 2px 0px #ffffff;
		color: ${(props) => props.theme.colors.text.darker};
		font-size: ${(props) => props.theme.fonts.sizes.normal};
		font-weight: 600;
		letter-spacing: 0;

		svg,
		img {
			margin-right: 16px;
			max-height: 24px;
			max-width: 24px;
		}
	}

	&.loading {
		position: relative;
		&:after,
		&:before {
			content: '';
			display: block;
			position: absolute;
		}

		&:before {
			background-color: ${(props) => props.theme.colors.primary};
			height: 100%;
			left: 0;
			top: 0;
			width: 100%;
			z-index: 1;
		}

		&:after {
			animation: ${LoadingButtonAnimate} 1.1s infinite linear;
			border-radius: 50%;
			border-bottom: 2px solid rgba(255, 255, 255, 0.2);
			border-left: 2px solid #fff;
			border-right: 2px solid rgba(255, 255, 255, 0.2);
			border-top: 2px solid rgba(255, 255, 255, 0.2);
			height: 20px;
			left: 50%;
			margin: -10px 0 0 -10px;
			top: 50%;
			width: 20px;
			z-index: 2;
		}
	}
`;
