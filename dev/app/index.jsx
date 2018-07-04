import React from 'react';
import SignUp from './components/SignUp/index.jsx'
import Styles from './styles/styles.scss'

const App = () => (
	<div>
		<h1>Welcome to Cloud Save</h1>
		<h2>A simple web app to store your files in the cloud</h2>
		<SignUp />
	</div>
);

export default App;