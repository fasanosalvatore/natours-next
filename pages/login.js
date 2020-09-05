import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import { useAuth } from '../context/auth-context';
import { publicFetch } from '../utils/publicFetch';

const Login = () => {
	const router = useRouter();
	const { register, handleSubmit } = useForm();
	const setUser = useAuth((state) => state.setUser);
	const onSubmit = async (data) => {
		const user = await publicFetch('/users/login', {
			method: 'POST',
			data,
		});
		setUser(user.data.data.user);
		router.push('/me');
	};

	return (
		<main className="main">
			<div className="login-form" id="login">
				<h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
				<form className="form" onSubmit={handleSubmit(onSubmit)}>
					<div className="form__group">
						<label className="form__label" for="email">
							Email address
						</label>
						<input
							className="form__input"
							name="email"
							type="email"
							placeholder="you@example.com"
							required="required"
							ref={register}
						/>
					</div>
					<div className="form__group ma-bt-md">
						<label className="form__label" for="password">
							Password
						</label>
						<input
							className="form__input"
							name="password"
							type="password"
							placeholder="••••••••"
							required="required"
							minLength="8"
							ref={register}
						/>
					</div>
					<div className="form__group">
						<button className="btn btn--green" type="submit">
							Login
						</button>
					</div>
				</form>
			</div>
		</main>
	);
};

export default Login;