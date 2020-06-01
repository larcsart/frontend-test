import styled from 'styled-components';

export const Container = styled.div`
	background: ${(props) => props.theme.colors.white};
	align-items: center;
	display: table;
	min-height: 100vh;
	width: 100%;
`;
