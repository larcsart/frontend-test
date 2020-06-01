import styled from 'styled-components';

const LoginTourContainer = styled.div`
	background: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.white};
	display: table-cell;
	padding: 80px;
	width: 50%;
`;

const ToutNavigation = styled.nav`
	margin-bottom: 53px;
	span {
		background: ${(props) => props.theme.colors.white};
		border-radius: 50%;
		display: inline-flex;
		height: 8px;
		margin-right: 20px;
		opacity: 0.16;
		transition: ${(props) => props.theme.defaults.transition};
		width: 8px;

		&.active {
			opacity: 1;
		}
	}
`;

const ButtonClose = styled.button`
	align-items: center;
	background: rgba(255, 255, 255, 0.3);
	border: none;
	border-radius: 100%;
	display: flex;
	height: 64px;
	position: absolute;
	right: 80px;
	top: 52px;
	justify-content: center;
	width: 64px;
`;

const Title = styled.h3`
	color: ${(props) => props.theme.colors.white};
	font-size: ${(props) => props.theme.fonts.sizes.xl};
	font-weight: bold;
	letter-spacing: -0.02em;
	line-height: 32px;
	margin-bottom: 23px;
	max-width: 380px;
`;

const Text = styled.div`
	color: ${(props) => props.theme.colors.white};
	font-size: ${(props) => props.theme.fonts.sizes.normal};
	font-weight: 500;
	letter-spacing: -0.001em;
	line-height: 24px;
	margin-bottom: 72px;
	max-width: 380px;
	opacity: 0.7;
`;

const TourSlide = styled.div`
	position: relative;
`;

const TourSliderExemple = styled.div`
	height: 272px;
	position: relative;
	width: 528px;
	.cicle {
		left: 50%;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
	}
`;

const TourCads = styled.img`
	position: absolute;

	&.pedidos {
		left: -16px;
		top: -8px;
	}

	&.comissao {
		bottom: -24px;
		right: -16px;
	}
`;

export {
	LoginTourContainer,
	ToutNavigation,
	ButtonClose,
	Title,
	Text,
	TourSlide,
	TourSliderExemple,
	TourCads,
};
