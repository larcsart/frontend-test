import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import InputGroup from '../../../components/InputGroup';

import {
	LoginFormContainer,
	LoginContainer,
	LoginLogo,
	LoginTitle,
	LineLabel,
	CreateAccount,
} from './styles';

import { ReactComponent as LogoImage } from '../../../assets/images/logo.svg';
import { ReactComponent as LogoGoogle } from '../../../assets/images/logo-google.svg';
import { Button } from '../../../styles/global';

import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { toast } from 'react-toastify';
import AuthService from '../../../services/Auth.service';

const LoginForm: React.FC = () => {
	const GET_LOGIN = gql`
		mutation($input: SignInInput!) {
			signIn(input: $input) {
				token
				user {
					username
				}
			}
		}
	`;

	const [signIn, { loading }] = useMutation(GET_LOGIN);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const history = useHistory();

	const onSubmit = async (e: any) => {
		e.preventDefault();
		try {
			const response = await signIn({
				variables: {
					input: { email, password },
				},
			});
			localStorage.setItem('xpUsername', response.data.signIn.user.username);
			AuthService.registerToken(response.data.signIn.token);
			history.push('/dashboard');
		} catch (e) {
			if (e.graphQLErrors) {
				e.graphQLErrors.forEach((item: any) => {
					toast.error(item.message);
				});
			}
		}
	};

	return (
		<LoginFormContainer>
			<LoginContainer>
				<LoginLogo>
					<LogoImage />
				</LoginLogo>
				<LoginTitle>Olá! Que bom ter você de volta.</LoginTitle>

				<form onSubmit={onSubmit}>
					<InputGroup
						labelText="E-mail"
						getValue={(value: any) => {
							setEmail(value);
						}}
					/>

					<InputGroup
						labelText="Senha"
						format="password"
						lastItem
						getValue={(value: any) => {
							setPassword(value);
						}}
					/>

					<Button
						className={`primary block ${loading && 'loading'}`}
						type="submit"
					>
						Entrar
					</Button>
				</form>

				<LineLabel>
					<span>ou</span>
				</LineLabel>

				<Button className="block with-icon">
					<LogoGoogle /> Entrar com Google
				</Button>

				<CreateAccount>
					Ainda não possui uma conta?{' '}
					<a
						href="https://www.b8one.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Crie agora
					</a>
				</CreateAccount>
			</LoginContainer>
		</LoginFormContainer>
	);
};

export default LoginForm;
