import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TabsNavigator } from './Tabs';
import { PostProvider } from '../../providers/Post';
import { FavoritesView } from '../../views/Favorites';
import HeaderRigth from '../../views/Post/HeaderRigth';
const Stack = createStackNavigator();

export const MainStack = () => (
	<Stack.Navigator>
		<Stack.Screen
			options={{ headerShown: false }}
			name="Home"
			component={TabsNavigator}
		/>
		<Stack.Screen
			name="Post"
			options={({ route }) => {
				return {
					headerTitle: route.params.post.title,
					headerTransparent: true,
					headerTitleStyle: {
						fontSize: 20,
						fontWeight: 'bold',
					},
					headerTitleAlign: 'center',
					headerTintColor: '#fff',
					headerRightContainerStyle: {
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: 50,
						height: '100%',
					},
					headerRight: () => <HeaderRigth />,
				};
			}}
			component={PostProvider}
		/>
	</Stack.Navigator>
);
export const FavoritesStack = () => (
	<Stack.Navigator>
		<Stack.Screen name="Favorites" component={FavoritesView} />
	</Stack.Navigator>
);
