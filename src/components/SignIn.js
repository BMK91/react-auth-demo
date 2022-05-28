import { Button } from "reactstrap";

import { login } from '../utils';

export default function SignIn(props) {

	return (
		<div>
			<h1>Sign In</h1>

			<Button onClick={() => {
				login();
				props.history.push('/stations');
			}}>Sign In!</Button>
		</div>
	);
}