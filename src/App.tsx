import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Theme Styles
import { ThemeProvider } from 'styled-components';
import xpTheme from './styles/theme';
import GlobalStyle from './styles/global';

// Routes
import { AuthRoute } from './pages/AuthRoute';
import Home from './pages/Login';
import Dashboard from './pages/Dashboard';

// Apollo Client
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
const client = new ApolloClient({
	uri: 'https://api-staging.plugone.io/graphql',
});

function App() {
	return (
		<ApolloProvider client={client}>
			<ApolloHooksProvider client={client}>
				<ThemeProvider theme={xpTheme}>
					<GlobalStyle />
					<ToastContainer />
					<BrowserRouter>
						<Switch>
							<Route exact path="/" component={Home} />
							<AuthRoute exact path="/dashboard" component={Dashboard} />
						</Switch>
					</BrowserRouter>
				</ThemeProvider>
			</ApolloHooksProvider>
		</ApolloProvider>
	);
}

export default App;
