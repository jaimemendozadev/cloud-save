import React from 'react';
import { SignUp, SplashPage } from './components/index.jsx'
import Styles from './styles/styles.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => (
	<Router>
		<Switch>
			<Route path='/signup' component={SignUp} />
			<Route path='/' component={SplashPage} />
		</Switch>
	</Router>
);

export default App;