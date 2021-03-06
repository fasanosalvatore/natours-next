const Signup = () => {
	return (
		<main class="main">
			<div class="login-form" id="signup">
				<h2 class="heading-secondary ma-bt-lg">Create new account</h2>
				<form class="form">
					<div class="form__group">
						<label class="form__label" for="name">
							Name
						</label>
						<input
							class="form__input"
							id="name"
							type="text"
							placeholder="Name"
							required="required"
						/>
					</div>
					<div class="form__group">
						<label class="form__label" for="email">
							Email address
						</label>
						<input
							class="form__input"
							id="email"
							type="email"
							placeholder="you@example.com"
							required="required"
						/>
					</div>
					<div class="form__group">
						<label class="form__label" for="phone">
							Phone Number
						</label>
						<input
							class="form__input"
							id="phone"
							type="tel"
							placeholder="0000000000"
							required="required"
						/>
					</div>
					<div class="form__group ma-bt-md">
						<label class="form__label" for="password">
							Password
						</label>
						<input
							class="form__input"
							id="password"
							type="password"
							placeholder="••••••••"
							required="required"
							minlength="8"
						/>
					</div>
					<div class="form__group ma-bt-md">
						<label class="form__label" for="confirmPassword">
							Password
						</label>
						<input
							class="form__input"
							id="confirmPassword"
							type="password"
							placeholder="••••••••"
							required="required"
							minlength="8"
						/>
					</div>
					<div class="form__group">
						<button class="btn btn--green">Register</button>
					</div>
				</form>
			</div>
		</main>
	);
};

export default Signup;
