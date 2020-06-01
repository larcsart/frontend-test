import React from 'react';
import {
	Route,
	RouteComponentProps,
	RouteProps,
	Redirect,
} from 'react-router-dom';

import AuthService from '../services/Auth.service';

interface AuthRouteProps extends RouteProps {
	component: React.ComponentType<RouteComponentProps> | React.ComponentType;
}

type RenderComponent = (props: RouteComponentProps) => React.ReactNode;

export class AuthRoute extends Route<AuthRouteProps> {
	render() {
		const { component: Component, ...rest }: AuthRouteProps = this.props;
		const renderComponent: RenderComponent = (props) =>
			AuthService.isAuthenticated() ? (
				<Component {...props} />
			) : (
				<Redirect to="/" />
			);
		return <Route {...rest} render={renderComponent} />;
	}
}
