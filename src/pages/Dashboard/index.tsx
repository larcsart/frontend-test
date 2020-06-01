import React, { useState, useEffect } from 'react';
import FullLetter from '../../components/FullLetter';

const Dashboard: React.FC = () => {
	const steps = [
		{
			dark: false,
			title: 'Bem vindo, ' + localStorage.xpUsername,
			subtitle: 'Estamos carregando suas informações',
		},
		{
			dark: true,
			title: 'Bem vindo, ' + localStorage.xpUsername,
			subtitle: 'Estamos carregando suas informações',
		},
		{
			dark: false,
			title: 'Estamos prontos.',
			subtitle: 'Boas vendas!',
		},
	];

	const [count, setCount] = useState(0);

	useEffect(() => {
		const changeStep = () => {
			setCount((count) => {
				if (count < 2) {
					return count + 1;
				} else {
					clearInterval(interval);
					return count;
				}
			});
		};
		const interval = setInterval(changeStep, 2000);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<FullLetter
				dark={steps[count].dark}
				title={steps[count].title}
				subtitle={steps[count].subtitle}
			/>
		</>
	);
};

export default Dashboard;
