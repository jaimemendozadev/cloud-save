import React from 'react';
import { SignIn, SplashPage, Loading, Homepage, ProtectedRoute } from './components/index.jsx'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import Store from './services/redux/';
import Styles from './styles/styles.scss';

let persistor = persistStore(Store);


const App = () => (
	<Provider store={Store}>
		<PersistGate loading={Loading} persistor={persistor}>
			<Router>
				<Switch>
					{/* <Route path='/homepage' component={Homepage} /> */}

					<Route exact path='/' component={SplashPage} />
					<Route path='/signin' component={SignIn} />
					<ProtectedRoute component={Homepage} />

				</Switch>
			</Router>
		</PersistGate>
	</Provider>
)
export default App;