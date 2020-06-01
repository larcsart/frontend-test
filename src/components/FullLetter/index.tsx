import React from 'react';
import { ReactComponent as LogoImage } from '../../assets/images/logo.svg';

import { FullLetterContainer } from './styles';

type FullLetterProps = {
	title?: string;
	subtitle?: string;
	dark?: boolean;
};

const FullLetter: React.FC<FullLetterProps> = ({
	title,
	subtitle,
	dark = false,
}) => {
	return (
		<FullLetterContainer className={dark ? 'dark' : ''}>
			<aside>
				<LogoImage />
				{title && <h1>{title}</h1>}
				{subtitle && <h2>{subtitle}</h2>}
			</aside>
		</FullLetterContainer>
	);
};

export default FullLetter;
