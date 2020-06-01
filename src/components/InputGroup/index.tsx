import React, { useState } from 'react';

import {
	InputGroupContainer,
	InputLabel,
	InputContainer,
	Input,
	InputLink,
	InputButton,
} from './styles';

import { ReactComponent as IconEye } from '../../assets/images/eye-open.svg';

type InputGroupProps = {
	labelText: string;
	format?: string;
	lastItem?: boolean;
	getValue?: Function;
};

const InputGroup: React.FC<InputGroupProps> = ({
	labelText,
	format = 'text',
	lastItem = false,
	getValue = () => null,
}) => {
	const [typeInput, setTypeInput] = useState('password');
	const [value, setValue] = useState('');

	return (
		<InputGroupContainer className={lastItem ? 'last' : ''}>
			<InputLabel>{labelText}</InputLabel>
			<InputContainer>
				<Input
					type={format === 'password' ? typeInput : format}
					value={value}
					onChange={(e) => {
						setValue(e.target.value);
						getValue(e.target.value);
					}}
				/>

				{format === 'password' && (
					<>
						<InputLink>
							<a href="/">Recuperar senha</a>
						</InputLink>
						<InputButton
							type="button"
							onClick={() => {
								setTypeInput(typeInput === 'password' ? 'text' : 'password');
							}}
							className={typeInput === 'text' ? 'active' : ''}
						>
							<IconEye />
							Mostrar
						</InputButton>
					</>
				)}
			</InputContainer>
		</InputGroupContainer>
	);
};

export default InputGroup;
