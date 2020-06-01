import styled from 'styled-components';

const LoginFormContainer = styled.div`
	display: table-cell;
	padding: 64px;
	width: 50%;
`;

const LoginContainer = styled.div`
	margin: 0 auto;
	max-width: 416px;
	width: 100%;
`;

const LoginLogo = styled.div`
	margin-bottom: 36px;
	svg {
		height: auto;
		width: 46px;
	}
`;

const LoginTitle = styled.h2`
	font-size: 40px;
	font-weight: bold;
	letter-spacing: -0.02em;
	line-height: 48px;
	margin-bottom: 48px;
	width: 320px;
`;

const LineLabel = styled.div`
	color: ${(props) => props.theme.colors.text.darker};
	font-size: ${(props) => props.theme.fonts.sizes.md};
	margin: 32px 0 27px;
	position: relative;
	text-align: center;

	span {
		background: ${(props) => props.theme.colors.white};
		display: inline-block;
		position: relative;
		z-index: 3;
		padding: 0 8px;
	}

	&:before {
		border-bottom: ${(props) => props.theme.line.light};
		height: 1px;
		content: '';
		display: block;
		left: 0;
		position: absolute;
		top: 50%;
		width: 100%;
	}
`;

const CreateAccount = styled.div`
	color: ${(props) => props.theme.colors.text.darker};
	font-size: ${(props) => props.theme.fonts.sizes.normal};
	font-weight: 500;
	letter-spacing: -0.01em;
	padding-top: 86px;
	text-align: center;

	a {
		color: ${(props) => props.theme.colors.primary};
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}
`;

export {
	LoginFormContainer,
	LoginContainer,
	LoginLogo,
	LoginTitle,
	LineLabel,
	CreateAccount,
};
