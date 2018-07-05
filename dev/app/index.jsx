import React from 'react';
import { SignUp, SplashPage } from './components/index.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Styles from './styles/styles.scss'

const App = () => (
	<Router>
		<Switch>
			<Route path='/signup' component={SignUp} />
			<Route path='/' component={SplashPage} />
		</Switch>
	</Router>
);

export default App;