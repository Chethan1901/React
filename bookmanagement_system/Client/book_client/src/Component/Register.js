// import Topheader from "./Topheader"
import Header from "./Header";
// import Footer from "./Footer"
const Login = () => {
	return (
		<>
			<h1>Register components</h1>
			<Header />
			<div>
				<form>
					<input type="text" id="fname" name="fname" placeholder="Firstname" />
					<input type="text" id="lname" name="lname" placeholder="Lastname" />
					<br />

					<input type="email" id="email" name="email" placeholder="Email" />
					<br />

					<input
						type="password"
						id="password"
						name="password"
						placeholder="Password"
					/>
					<br />

					<input
						type="password"
						id="password2"
						name="password2"
						placeholder="Password2"
					/>
					<br />
				</form>
			</div>
		</>
	);
};
export default Login;
