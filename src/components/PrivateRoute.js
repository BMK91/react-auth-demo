import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Button } from "reactstrap";

import { isLogin, logout } from '../utils';


const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		isLogin()
			? <div>
				<Button onClick={() => {
					logout();
					props.history.push('/');
				}}>Logout</Button>

				<Component {...props} />
			</div>
			: <Redirect to={{ pathname: '/sign-in', state: { from: props.location } }} />
	)} />
);

export default PrivateRoute;