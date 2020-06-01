import decode from 'jwt-decode';

const LOCALNAME = 'b8Corp';

const AuthService = {
	isAuthenticated: (): boolean => {
		const token = localStorage.getItem(LOCALNAME);
		if (!token) {
			return false;
		}
		try {
			const { exp } = decode(token);
			if (exp < new Date().getTime() / 1000) {
				return false;
			}
		} catch (e) {
			return false;
		}
		return true;
	},
	registerToken: (token: string): void => {
		localStorage.setItem(LOCALNAME, token);
	},
};

export default AuthService;
