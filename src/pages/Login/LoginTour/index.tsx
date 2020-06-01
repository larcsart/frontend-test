import React from 'react';

import {
	LoginTourContainer,
	ToutNavigation,
	ButtonClose,
	Title,
	Text,
	TourSlide,
	TourSliderExemple,
	TourCads,
} from './styles';

import { ReactComponent as CloseIcon } from '../../../assets/images/close-icon.svg';
import { ReactComponent as CircleCards } from '../../../assets/images/background-cards.svg';
const CardPedidos = require('../../../assets/images/card-pedidos.png');
const CardComissao = require('../../../assets/images/card-comissao.png');

const LoginTour: React.FC = () => {
	return (
		<LoginTourContainer>
			<ButtonClose>
				<CloseIcon />
			</ButtonClose>

			<ToutNavigation className="navigation">
				<span className="active"></span>
				<span></span>
				<span></span>
			</ToutNavigation>

			<TourSlide>
				<Title>Confira seus relatórios de venda e resgate suas comissões</Title>

				<Text>
					Confira a evolução das suas vendas, veja sua comissão aumentar e
					encontre novos caminhos para vender mais.
				</Text>

				<TourSliderExemple>
					<CircleCards className="cicle" />
					<TourCads src={CardPedidos} alt="Pedidos" className="pedidos" />
					<TourCads src={CardComissao} alt="Comisssão" className="comissao" />
				</TourSliderExemple>
			</TourSlide>
		</LoginTourContainer>
	);
};

export default LoginTour;
