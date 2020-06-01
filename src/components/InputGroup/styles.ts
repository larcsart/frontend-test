import styled from 'styled-components';

const InputGroupContainer = styled.div`
	margin-bottom: 20px;

	&.last {
		margin-bottom: 32px;
	}
`;

const InputLabel = styled.label`
	color: ${(props) => props.theme.colors.text.dark};
	display: block;
	font-size: ${(props) => props.theme.fonts.sizes.normal};
	font-weight: 500;
	letter-spacing: -0.01em;
	margin-bottom: 8px;
`;

const InputContainer = styled.div`
	position: relative;
`;

const Input = styled.input`
	background: ${(props) => props.theme.colors.white};
	border-radius: 8px;
	border: ${(props) => props.theme.line.dark};
	color: ${(props) => props.theme.colors.text.dark};
	font-size: ${(props) => props.theme.fonts.sizes.normal};
	font-weight: 500;
	height: 56px;
	letter-spacing: -0.001em;
	padding: 0 20px;
	width: 100%;

	&:focus {
		border-color: ${(props) => props.theme.colors.primary};
		box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.04),
			0px 0px 12px rgba(0, 71, 255, 0.08);
		outline: none;
	}
`;

const InputLink = styled.div`
	bottom: 100%;
	margin-bottom: 8px;
	position: absolute;
	right: 0;

	a {
		color: ${(props) => props.theme.colors.primary};
		font-weight: normal;
		letter-spacing: -0.001em;
		font-size: ${(props) => props.theme.fonts.sizes.md};
		text-decoration: none;
	}
`;

const InputButton = styled.button`
	align-items: center;
	background: transparent;
	border: none;
	color: ${(props) => props.theme.colors.text.placeholder};
	display: inline-flex;
	font-size: ${(props) => props.theme.fonts.sizes.xs};
	font-weight: 500;
	position: absolute;
	right: 20px;
	top: 50%;
	transform: translateY(-50%);
	svg {
		margin-right: 8px;
		width: 20px;
		path{
			fill: ${(props) => props.theme.colors.text.placeholder};
		}
	}

	&.active{
		color: ${(props) => props.theme.colors.primary};
		svg{
			path {
				fill: ${(props) => props.theme.colors.primary};
			}
		}
	}

	&:focus{
		outline: none;
	}
`;

export {
	InputGroupContainer,
	InputLabel,
	InputContainer,
	Input,
	InputLink,
	InputButton,
};
