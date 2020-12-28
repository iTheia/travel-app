import { IUser } from '../../constant/types';

export interface IAuthContext {
	currentUser: IUser | null | false;
	getToken: () => string;
	signUp: (values: ISignUp) => Promise<void>;
	logIn: (values: ILogIn) => Promise<void>;
	logOut: () => Promise<void>;
}

export interface ISignUp {
	email: string;
	password: string;
	confirmPassword: string;
	username: string;
}

export interface ILogIn {
	email: string;
	password: string;
}
