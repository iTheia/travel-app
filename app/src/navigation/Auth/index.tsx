import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthParamList } from './types';
import { LoginView } from '../../views/Login';
import { RegisterView } from '../../views/Register';
import { LandingView } from '../../views/Landing';
import { OnBoardingView } from '../../views/OnBoarding';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { Navigator, Screen } = createStackNavigator<AuthParamList>();

export const AuthNavigation: React.FC = () => {
	const [firstTimeLaunch, setFirstTimeLaunch] = useState(true);

	useEffect(() => {
		AsyncStorage.getItem('alredyLaunched').then((value) => {
			if (value == null) {
				AsyncStorage.setItem('alredyLaunched', 'true');
				setFirstTimeLaunch(true);
			}
			/* 			setFirstTimeLaunch(false); */
		});
	}, []);

	if (firstTimeLaunch === false) {
		return (
			<NavigationContainer>
				<Navigator
					initialRouteName="Landing"
					screenOptions={{ headerShown: false }}
				>
					<Screen name="Landing" component={LandingView} />
					<Screen name="Login" component={LoginView} />
					<Screen name="Register" component={RegisterView} />
				</Navigator>
			</NavigationContainer>
		);
	}
	return (
		<NavigationContainer>
			<Navigator
				initialRouteName="OnBoarding"
				screenOptions={{ headerShown: false }}
			>
				<Screen name="OnBoarding" component={OnBoardingView} />
				<Screen name="Landing" component={LandingView} />
				<Screen name="Login" component={LoginView} />
				<Screen name="Register" component={RegisterView} />
			</Navigator>
		</NavigationContainer>
	);
};
