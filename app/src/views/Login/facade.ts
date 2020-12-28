import { useState, useContext } from 'react';
import { useTheme } from 'react-native-paper';
import { AuthContext } from '../../providers/Auth';
import { ILogIn } from '../../providers/Auth/types';

export default () => {
	const [secureTextEntry, setSecureTextEntry] = useState(true);

	const { colors } = useTheme();

	const { logIn } = useContext(AuthContext);

	const handleSubmit = (user: ILogIn, { setSubmitting }: any) => {
		try {
			console.log('object');
			setSubmitting(true);
			logIn(user);
			setSubmitting(false);
		} catch (error) {}
	};

	const updateSecureTextEntry = () => setSecureTextEntry((prev) => !prev);

	return {
		form: {
			handleSubmit,
			updateSecureTextEntry,
			secureTextEntry,
		},
		colors,
	};
};
