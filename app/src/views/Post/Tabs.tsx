import React from 'react';
import { About } from './About';
import { Comments } from './Comments';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const { Navigator, Screen } = createMaterialTopTabNavigator();
export default function Tabs() {
	return (
		<Navigator
			tabBarOptions={{
				style: {},
			}}
		>
			<Screen
				options={{ title: 'Acerca de' }}
				name="About"
				component={About}
			/>
			<Screen
				options={{ title: 'Comentarios' }}
				name="Comments"
				component={Comments}
			/>
		</Navigator>
	);
}
