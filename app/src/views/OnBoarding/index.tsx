import React from 'react';
import { AuthNavProps } from '../../navigation/Auth/types';
import OnBoarding from 'react-native-onboarding-swiper';
import { Pages } from './pages';

export const OnBoardingView: React.FC<AuthNavProps<'OnBoarding'>> = ({
	navigation,
}) => {
	return (
		<OnBoarding
			skipLabel="Omitir"
			nextLabel="Siguiente"
			onDone={() => navigation.navigate('Landing')}
			onSkip={() => navigation.replace('Landing')}
			pages={Pages}
		/>
	);
};
