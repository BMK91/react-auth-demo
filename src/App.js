import { Switch, Route } from 'react-router-dom';
import { Home, SignIn, SignUp, Stations, Users } from "./components/index";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

import './App.css';

function App() {
	return (
		<Switch>
			<PublicRoute restricted={false} component={Home} path="/" exact />
			<PublicRoute restricted={false} component={Home} path="/home" exact />
			<PublicRoute restricted={true} component={SignIn} path="/sign-in" exact />
			<PublicRoute restricted={true} component={SignUp} path="/sign-up" exact />
			<PrivateRoute component={Stations} path="/stations" exact />
			<PrivateRoute component={Users} path="/users" exact />
		</Switch>
	);
}

export default App;
