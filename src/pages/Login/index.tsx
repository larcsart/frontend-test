import React from 'react';

import { Container } from './styles';
import LoginForm from './LoginForm';
import LoginTour from './LoginTour';

const Home: React.FC = () => {
	return (
		<Container>
			<LoginForm />
			<LoginTour />
		</Container>
	);
};

export default Home;
