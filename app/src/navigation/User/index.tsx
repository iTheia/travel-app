import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './Drawer';

export const UserNavigation: React.FC = () => {
	return (
		<NavigationContainer>
			<DrawerNavigator />
		</NavigationContainer>
	);
};
