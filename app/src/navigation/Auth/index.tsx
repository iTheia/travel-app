import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthParamList } from './types';
import { LoginView } from '../../views/Login';
import { RegisterView } from '../../views/Register';
import { LandingView } from '../../views/Landing';

const { Navigator, Screen } = createStackNavigator<AuthParamList>();

export const AuthNavigation: React.FC = () => {
	return (
		<NavigationContainer>
			<Navigator screenOptions={{ headerShown: false }}>
				<Screen name="Landing" component={LandingView} />
				<Screen name="Login" component={LoginView} />
				<Screen name="Register" component={RegisterView} />
			</Navigator>
		</NavigationContainer>
	);
};
